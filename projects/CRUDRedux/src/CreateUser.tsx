import { Button, Form, Input, message, Modal } from 'antd';
import useUserActions from './hooks/useUserActions';
interface Props {
  isOpen: boolean;
  handleSetIsOpen: () => void;
}
function CreateUser({ isOpen, handleSetIsOpen }: Props) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { addUserAction } = useUserActions();
  const handleAddUser = () => {
    form
      .validateFields()
      .then((values) => {
        addUserAction(values);
        form.resetFields();
        messageApi.open({
          key: 'notification',
          duration: 5,
          type: 'success',
          content: 'Se ha agregado correctamente el usuario',
        });
        handleSetIsOpen();
      })
      .catch(() => {});
  };
  return (
    <>
      {contextHolder}
      <Modal
        title="Crear usuario"
        open={isOpen}
        onCancel={handleSetIsOpen}
        maskClosable={false}
        footer={[
          <Button key="submit" type="primary" onClick={handleAddUser}>
            Agregar
          </Button>,
          <Button key="cancel" onClick={handleSetIsOpen}>
            Cancelar
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="crear-usuario"
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="nombre"
            label="Nombre y apellido"
            rules={[
              { required: true, message: '¡Por favor ingrese su nombre!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="correo"
            label="Correo electronico"
            rules={[
              { required: true, message: '¡Por favor ingrese su correo!' },
              {
                type: 'email',
                message: '¡Por favor ingrese un correo valido!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="github"
            label="GitHub"
            rules={[
              { required: true, message: '¡Por favor ingrese su github!' },
            ]}
          >
            <Input maxLength={50} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreateUser;
