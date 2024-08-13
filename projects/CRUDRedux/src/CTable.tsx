import type { TableProps } from 'antd';
import {
  Avatar,
  Badge,
  ConfigProvider,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
} from 'antd';
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import useCTable from './hooks/useCTable';
import { Item, userKey } from './store/users/slice';
import useUserActions from './hooks/useUserActions';
import { useAppSelector } from './hooks/store';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  input: 'text';
  record: Item;
  index: number;
}
const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  input,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `¡Por favor ingrese su ${title}!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function CTable() {
  const originData = useAppSelector((state) => state.users.data);

  const { isEditing, edit, cancel, save, form, editingKey } = useCTable();
  const { delUser } = useUserActions();
  const handleDeleteBtn = (key: userKey) => {
    delUser(key);
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      editable: true,
      width: '35%',
    },
    {
      title: 'Correo',
      dataIndex: 'correo',
      editable: true,
      width: '25%',
    },
    {
      title: 'Github',
      dataIndex: 'github',
      width: '15%',
      editable: true,
      render: (_: any, record: Item) => {
        return (
          <>
            <Avatar
              src={`https://unavatar.io/${record.github}`}
              style={{ marginInlineEnd: 10 }}
            />
            {_}
          </>
        );
      },
    },
    {
      title: 'Accion',
      dataIndex: 'accion',
      width: '5%',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        const iconSize = { fontSize: '20px' };
        return editable ? (
          <span>
            <ConfigProvider
              theme={{
                token: {
                  colorLink: 'green',
                  colorLinkHover: '#1677ff',
                },
              }}
            >
              <Typography.Link
                onClick={() => save(record.key)}
                style={{
                  marginInlineEnd: 8,
                }}
              >
                <CheckOutlined style={iconSize} />
              </Typography.Link>
            </ConfigProvider>
            <ConfigProvider
              theme={{
                token: {
                  colorLink: 'red',
                  colorLinkHover: '#1677ff',
                },
              }}
            >
              <Typography.Link onClick={cancel}>
                <CloseOutlined style={iconSize} />
              </Typography.Link>
            </ConfigProvider>
          </span>
        ) : (
          <span>
            <ConfigProvider
              theme={{
                token: { colorLink: 'green', colorLinkHover: '#1677ff' },
              }}
            >
              <Typography.Link
                disabled={editingKey !== ''}
                onClick={() => edit(record)}
                style={{ marginInlineEnd: 10 }}
              >
                <EditOutlined style={iconSize} />
              </Typography.Link>
            </ConfigProvider>
            <ConfigProvider
              theme={{ token: { colorLink: 'red', colorLinkHover: '#1677ff' } }}
            >
              <Popconfirm
                title="Elimiar usuario"
                placement="left"
                description="Estas seguro de eliminar este usuario"
                okText="Si"
                cancelText="No"
                onConfirm={() => {
                  handleDeleteBtn(record.key);
                }}
              >
                <Typography.Link disabled={editingKey !== ''}>
                  <DeleteOutlined style={iconSize} />
                </Typography.Link>
              </Popconfirm>
            </ConfigProvider>
          </span>
        );
      },
    },
  ];

  const mergedColumns: TableProps['columns'] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        input: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={originData}
          columns={mergedColumns}
          pagination={{
            onChange: cancel,
            position: ['bottomCenter'],
            pageSize: 5,
          }}
          title={() => (
            <Space>
              <Typography.Text style={{ fontSize: '20px', fontWeight: '500' }}>
                Usuarios
              </Typography.Text>
              <Badge
                style={{ color: '#2b25be', fontWeight: '700' }}
                color={'rgba(22, 119, 255,.3)'}
                count={originData.length}
                overflowCount={999}
              />
            </Space>
          )}
        />
      </Form>
    </>
  );
}

export default CTable;
