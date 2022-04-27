
import React from 'react';
import { Line } from '@ant-design/charts';

const Index: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default Index;


// // import React from 'react';
// import './test.css'
//
// import { Table, Badge, Menu, Dropdown, Space } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
//
// const menu = (
//   <Menu>
//     <Menu.Item>Action 1</Menu.Item>
//     <Menu.Item>Action 2</Menu.Item>
//   </Menu>
// );
//
// function NestedTable() {
//   const expandedRowRender = () => {
//     const columns = [
//       { title: 'Date', dataIndex: 'date', key: 'date' },
//       { title: 'Name', dataIndex: 'name', key: 'name' },
//       {
//         title: 'Status',
//         key: 'state',
//         render: () => (
//           <span>
//             <Badge status="success" />
//             Finished
//           </span>
//         ),
//       },
//       { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
//       {
//         title: 'Action',
//         dataIndex: 'operation',
//         key: 'operation',
//         render: () => (
//           <Space size="middle">
//             <a>Pause</a>
//             <a>Stop</a>
//             <Dropdown overlay={menu}>
//               <a>
//                 More <DownOutlined />
//               </a>
//             </Dropdown>
//           </Space>
//         ),
//       },
//     ];
//
//     const data = [];
//     for (let i = 0; i < 3; ++i) {
//       data.push({
//         key: i,
//         date: '2014-12-24 23:12:00',
//         name: 'This is production name',
//         upgradeNum: 'Upgraded: 56',
//       });
//     }
//     return <Table columns={columns} dataSource={data} pagination={false} />;
//   };
//
//   const columns = [
//     { title: 'Name', dataIndex: 'name', key: 'name' },
//     { title: 'Platform', dataIndex: 'platform', key: 'platform' },
//     { title: 'Version', dataIndex: 'version', key: 'version' },
//     { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
//     { title: 'Creator', dataIndex: 'creator', key: 'creator' },
//     { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
//     { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
//   ];
//
//   const data = [];
//   for (let i = 0; i < 3; ++i) {
//     data.push({
//       key: i,
//       name: 'Screem',
//       platform: 'iOS',
//       version: '10.3.4.5654',
//       upgradeNum: 500,
//       creator: 'Jack',
//       createdAt: '2014-12-24 23:12:00',
//     });
//   }
//
//   return (
//     <Table
//       className="components-table-demo-nested"
//       columns={columns}
//       expandable={{ expandedRowRender }}
//       dataSource={data}
//     />
//   );
// }
//
//
// export default function Index() {
//   return (
//     <div>
//       <NestedTable />
//     </div>
//   );
// }



