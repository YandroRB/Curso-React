import {
  addUser,
  deleteUsersById,
  fetchGetUsers,
  Item,
  setStatusUser,
  StatusUser,
  updateUsersById,
  User,
  userKey,
} from '../store/users/slice';
import { useAppDispatch } from './store';

function useUserActions() {
  const dispatch = useAppDispatch();
  const delUser = (id: userKey) => {
    dispatch(deleteUsersById(id));
  };
  const addUserAction = (user: User) => {
    const tempUser = { ...user, key: crypto.randomUUID() };
    dispatch(addUser(tempUser));
  };
  const setStatusUserAction = (status: StatusUser | null) => {
    dispatch(setStatusUser(status));
  };
  const updateUserAction = ({ key, item }: { key: userKey; item: Item }) => {
    dispatch(updateUsersById({ key, item }));
  };

  const getUsersFetchAction = async () => await dispatch(fetchGetUsers());
  return {
    delUser,
    addUserAction,
    getUsersFetchAction,
    setStatusUserAction,
    updateUserAction,
  };
}
export default useUserActions;
