import { useEffect, useState } from 'react';
import CreateUser from './CreateUser';
import CTable from './CTable';
import { Button, notification } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import useUserActions from './hooks/useUserActions';
import { useAppSelector } from './hooks/store';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { getUsersFetchAction } = useUserActions();
  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const [api, contextHolder] = notification.useNotification();
  const statusUser = useAppSelector((state) => state.users.status);
  const { setStatusUserAction } = useUserActions();
  useEffect(() => {
    getUsersFetchAction();
  }, []);
  useEffect(() => {
    if (statusUser) {
      api[statusUser.type]({
        message: 'Notificación',
        description: statusUser.message,
        placement: 'bottomRight',
        showProgress: true,
        pauseOnHover: false,
      });
    }
    setStatusUserAction(null);
  }, [statusUser]);
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={handleSetIsOpen}
        style={{ marginBottom: '1em' }}
      >
        <UserAddOutlined />
        Agregar
      </Button>
      <CreateUser isOpen={isOpen} handleSetIsOpen={handleSetIsOpen} />
      <CTable />;
    </>
  );
}

export default App;
