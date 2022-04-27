// import React from 'react';
// import { Table, Tag, Space } from 'antd';
// import { Table } from 'antd';

// const { Column, ColumnGroup } = Table;

import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


// const data = [
//   {
//     key: '1',
//     firstName: 'John',
//     lastName: 'Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     firstName: 'Jim',
//     lastName: 'Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     firstName: 'Joe',
//     lastName: 'Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text: any) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (tags: any) => (
//       <>
//         {
//           tags.map((tag: any) => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })
//         }
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text: any, record: any) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];
//
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: '胡彦斌',
//     age: 32,
//     address: '西湖区湖底公园1号',
//   },
//   {
//     key: '2',
//     name: '胡彦祖',
//     age: 42,
//     address: '西湖区湖底公园1号',
//   },
// ];
//
// const columns = [
//   {
//     title: '姓名',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: '年龄',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: '住址',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ];

function Test_table1() {

  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      {/*  <Table columns={columns} dataSource={data} /> */}
      {/* <Table dataSource={data}> */}
      {/*   <ColumnGroup title="Name"> */}
      {/*     <Column title="First Name" dataIndex="firstName" key="firstName" /> */}
      {/*     <Column title="Last Name" dataIndex="lastName" key="lastName" /> */}
      {/*   </ColumnGroup> */}
      {/*   <Column title="Age" dataIndex="age" key="age" /> */}
      {/*   <Column title="Address" dataIndex="address" key="address" /> */}
      {/*   <Column */}
      {/*     title="Tags" */}
      {/*     dataIndex="tags" */}
      {/*     key="tags" */}
      {/*     render={tags => ( */}
      {/*       <> */}
      {/*         {tags.map((tag: any) => ( */}
      {/*           <Tag color="blue" key={tag}> */}
      {/*             {tag} */}
      {/*           </Tag> */}
      {/*         ))} */}
      {/*       </> */}
      {/*     )} */}
      {/*   /> */}
      {/*   <Column */}
      {/*     title="Action" */}
      {/*     key="action" */}
      {/*     render={(text: any, record: any) => ( */}
      {/*       <Space size="middle"> */}
      {/*         <a>Invite {record.lastName}</a> */}
      {/*         <a>Delete</a> */}
      {/*       </Space> */}
      {/*     )} */}
      {/*   /> */}
      {/* </Table> */}
    </div>
  );
}

export default Test_table1;


