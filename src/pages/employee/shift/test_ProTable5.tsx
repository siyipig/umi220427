
import React from "react";
import ProTable, {ProColumns, TableDropdown} from "@ant-design/pro-table";
import {Button, Dropdown, Input, Menu} from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import {SearchOutlined} from "@ant-design/icons/lib";

type DataType = {
  name: string,
  creator: string,
  status: string,
  createdAt: number,
  memo: string,
  id: number
}

const columns: ProColumns<DataType>[] = [

  {
    title: '排序',
    dataIndex: 'dataIndex',
    valueType: 'indexBorder',
    width: 48
  },
  {
    title: '应用名称',
    dataIndex: 'name',
    render: dom => <a>{dom}</a>,
    filterDropdown: () => (
      <div style={{padding: 8}}>
        <Input style={{width:188, marginBottom:8, display:"block"}}/>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{color: filtered ? '#1890ff': undefined}}/>
    )
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueType: 'select',
    valueEnum: {
      all: {text: '全部'},
      付小小: {text: '付小小'},
      曲丽丽: {text: '曲丽丽'},
      林东东: {text: '林东东'},
      陈帅帅: {text: '陈帅帅'},
      兼某某: {text: '兼某某'},
    }
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    filtered: true,
    onFilter: true,
    valueEnum: {
      online: { text: '已上线', status: 'Success'},
      error: { text: '异常', status: 'Error'},
      running: { text: '运行中', status: 'Processing'},
      close: { text: '关闭', status: 'default'}
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a?.createdAt -b?.createdAt,
    tooltip: '这是一段描述',

    width: 140,
    key: 'since'         // 为什么要加key
  },
  {
    title: '备注',
    dataIndex: 'memo',
    copyable: true,
    ellipsis: true,
    width: 38,
    render: (dom) => <div style={{paddingRight:3}}>{dom}</div>
  },
  {
    title: '操作',
    valueType: 'option',
    width: 180,
    key: 'option',        // 为什么要加key
    render: () => [
      <a key='link'>链路</a>,
      <a key='alarm'>报警</a>,
      <a key='monitor'>监控</a>,
      <TableDropdown
        key='actionGroup'
        menus={[
          {
            key: 'copy',
            name: '复制'
          },
          {
            key: 'delete',
            name: '删除'
          }
        ]}
      />
      // <Dropdown.Button
      //   key='actionGroup'
      //   overlay={
      //     <Menu>
      //       <MenuItem key='copy'>复制</MenuItem>
      //       <MenuItem key='delete'>删除</MenuItem>
      //     </Menu>
      //   }
      // >
      // </Dropdown.Button>
    ]
  }
]

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};
const tableListDataSource: DataType[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    id: i,
    name: 'AppName',
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
  });
}

const menu = (
  <Menu key='menu2'>
    <MenuItem key='1st'>1st item</MenuItem>
    <MenuItem key='2nd'>2nd item</MenuItem>
    <MenuItem key='3rd'>3rd item</MenuItem>
  </Menu>
);

export default ()  => {

  return (
    <>
      <ProTable<DataType>
        columns={columns}
        // dataSource={tableListDataSource}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        headerTitle='高级表格'
        tooltip='这是一个标题提示'
        rowKey='id'
        toolBarRender={() => [
          <Button danger key='danger' >危险按钮</Button>,
          <Button key='view' >查看日志</Button>,
          <Button type='primary' key='create'>创建应用</Button>,
          <Dropdown.Button overlay={menu} key='down'/>
        ]}
        dateFormatter='string'
        pagination={{
          showQuickJumper: true
        }}
        // search={{
        //   layout: 'vertical',
        //   defaultCollapsed: false,
        //   filterType: 'light'
        // }}
        search={false}
        toolbar={{
          title: '高级表格',
          tooltip: '这是一个标题提示'
        }}
      />
    </>
  )

}
