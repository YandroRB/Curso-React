import React from 'react';
import { Button, ConfigProvider, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import  styled from 'styled-components';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
const EditBtn=styled(Button)`
      color:green;
      outline:none!important
      
`;
const DelBtn=styled(Button)`
      color:red;
      outline:none!important
`

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <EditBtn shape='circle' icon={<EditOutlined />}></EditBtn>
        <DelBtn  shape='circle' icon={<DeleteOutlined />}></DelBtn>
      </Space>

    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const TableEx: React.FC = () => (
  <ConfigProvider
  theme={{
    components:{
      Button:{
        defaultHoverColor:"yellow",
        defaultHoverBorderColor:"yellow",
        controlOutline:"none",
      }
    }
  }}
  >
    <Table pagination={false} columns={columns} dataSource={data} />
  </ConfigProvider>
);

export default TableEx;