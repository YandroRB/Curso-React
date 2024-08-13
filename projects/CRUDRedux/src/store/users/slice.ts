import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import fetchData from '../../services/fetchData';
import Item from 'antd/es/list/Item';

export interface User {
  nombre: string;
  correo: string;
  github: string;
}
export type userKey = string;

export interface Item extends User {
  key: userKey;
}
export interface StatusUser {
  type: 'success' | 'error';
  message: string;
}
export interface UserState {
  data: Item[];
  loading: boolean;
  status: StatusUser | null;
}
export interface RollBackInterface {
  type: 'add' | 'delete' | 'update';
  item: Item;
}
const { getData } = fetchData();
const initialState: UserState = {
  data: (() => {
    const persistanceLocalStore = localStorage.getItem('__redux__state__');
    return persistanceLocalStore
      ? JSON.parse(persistanceLocalStore).users.data
      : [];
  })(),
  loading: false,
  status: null,
};

export const fetchGetUsers = createAsyncThunk(
  'users/fetchGetUsers',
  async () => await getData()
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    rollBackState: (state, action: PayloadAction<RollBackInterface>) => {
      if (action.payload.type === 'delete') {
        const isAlreadyData = state.data.some(
          (item) => item.key === action.payload.item.key
        );
        if (!isAlreadyData) state.data = [...state.data, action.payload.item];
      } else if (action.payload.type === 'add') {
        state.data = state.data.filter(
          (item) => item.key !== action.payload.item.key
        );
      } else if (action.payload.type === 'update') {
        const findedIndex = state.data.findIndex(
          (item) => item.key === action.payload.item.key
        );
        if (findedIndex > -1) {
          state.data[findedIndex] = { ...action.payload.item };
        }
      }
    },
    updateKey: (state, action: PayloadAction<{ key: userKey; item: Item }>) => {
      const findedIndex = state.data.findIndex(
        (item) => item.key === action.payload.key
      );
      if (findedIndex > -1) {
        state.data[findedIndex].key = action.payload.item.key;
      }
    },
    setStatusUser: (state, action: PayloadAction<StatusUser | null>) => {
      state.status = action.payload;
    },
    updateUsersById: (
      state,
      action: PayloadAction<{ key: userKey; item: Item }>
    ) => {
      const findedIntex = state.data.findIndex(
        (item) => item.key === action.payload.key
      );
      if (findedIntex > -1)
        state.data[findedIntex] = { ...action.payload.item };
    },
    deleteUsersById: (state, action: PayloadAction<userKey>) => {
      const key = action.payload;
      const newData = state.data.filter((item) => item.key !== key);
      state.data = newData;
    },
    addUser: (state, action: PayloadAction<Item>) => {
      state.data.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchGetUsers.pending, (state, _) => {
        state.loading = true;
        state.status = null;
      })
      .addCase(fetchGetUsers.rejected, (state, action) => {
        state.loading = false;
        state.status = {
          type: 'error',
          message: action.error.message || 'Ha ocurrido algo inesperado',
        };
      });
  } /*
      .addCase(fetchPostUsers.fulfilled, (state, action) => {
        const newData = [...state.data];
        const findIndex = newData.findIndex(
          (user) => user.key === action.payload.tempKey
        );
        newData[findIndex] = action.payload.response;
        return { ...state, data: newData };
      })
      .addCase(fetchPostUsers.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || 'No se ha podido agregar el usuario';
      })
      .addCase(fetchDeleteUsers.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeleteUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          'No se ha podido concretar la accion por favor vuelva a intentar';
      });
  },*/,
});
export default usersSlice.reducer;
export const {
  deleteUsersById,
  addUser,
  rollBackState,
  setStatusUser,
  updateUsersById,
  updateKey,
} = usersSlice.actions;
