import { useState } from 'react';

import { Form } from 'antd';
import { Item, User } from '../store/users/slice';
import useUserActions from './useUserActions';

function useCTable() {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const { updateUserAction } = useUserActions();

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ nombre: '', correo: '', gihub: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as User;
      const localKey = key.toString();
      const item = { key: localKey, ...row };
      updateUserAction({ key: localKey, item });
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  return { isEditing, edit, cancel, save, form, editingKey };
}
export default useCTable;
