import { configureStore, type Middleware } from '@reduxjs/toolkit';
import usersReducer, {
  addUser,
  deleteUsersById,
  Item,
  rollBackState,
  setStatusUser,
  updateKey,
  updateUsersById,
} from './users/slice';
import fetchData from '../services/fetchData';

const { deleteData, postData, updateData } = fetchData();
const persistanceLocalStoreMW: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()));
};

const synWithDatabaseMW: Middleware = (store) => (next) => async (action) => {
  const previousState = store.getState().users;
  if (addUser.match(action)) {
    const tempUser = action.payload;
    next(action);
    try {
      const response = await postData(action.payload);

      store.dispatch(updateKey({ key: tempUser.key, item: response }));
      store.dispatch(
        setStatusUser({
          type: 'success',
          message: 'Se ha agregado correctamente el usuario',
        })
      );
    } catch (error: Error | any) {
      store.dispatch(rollBackState({ type: 'add', item: tempUser }));
      store.dispatch(
        setStatusUser({
          type: 'error',
          message: error.message,
        })
      );
    }
  } else if (deleteUsersById.match(action)) {
    const prevUser = previousState.data.find(
      (item: Item) => item.key === action.payload
    );
    next(action);
    try {
      await deleteData(action.payload);
      store.dispatch(
        setStatusUser({
          type: 'success',
          message: 'Se ha eliminado correctamente el usuario',
        })
      );
    } catch (error) {
      const err = error as Error;
      if (prevUser)
        store.dispatch(rollBackState({ type: 'delete', item: prevUser }));
      store.dispatch(
        setStatusUser({
          type: 'error',
          message: err.message,
        })
      );
      throw error;
    }
  } else if (updateUsersById.match(action)) {
    const prevUser = previousState.data.find(
      (item: Item) => item.key === action.payload.item.key
    );
    next(action);
    try {
      await updateData(action.payload.item);
      store.dispatch(
        setStatusUser({
          type: 'success',
          message: 'Se ha actualizando correctamente los datos',
        })
      );
    } catch (error: Error | any) {
      store.dispatch(rollBackState({ type: 'update', item: prevUser }));
      store.dispatch(
        setStatusUser({
          type: 'error',
          message: error.message,
        })
      );
    }
  } else {
    next(action);
  }
};
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(persistanceLocalStoreMW)
      .concat(synWithDatabaseMW),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
