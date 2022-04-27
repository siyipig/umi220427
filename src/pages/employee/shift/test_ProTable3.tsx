
import React from "react";
import ProTable, {ProColumns, TableDropdown} from "@ant-design/pro-table";
import {Button, Tooltip} from "antd";
import {DownOutlined, QuestionCircleOutlined} from "@ant-design/icons/lib";


type DataType = {
  name: string,
  containers: number,
  status: string,
  creator: string,
  createdAt: number,
  memo: string,
  id: number
}

const columns: ProColumns<DataType>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    width: 80,
    render: (dom) => <a>{dom}</a>
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    width: 48,
    align: 'right',
    sorter: (a, b) => a.containers - b.containers
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    valueType: 'select',
    valueEnum: {
      online: { text: '已上线', status: 'Success'},
      error: { text: '异常', status: 'Error'},
      running: { text: '运行中', status: 'Processing'},
      close: { text: '关闭', status: 'default'}
    }
  },
  {
    title: '创建者',
    width: 80,
    dataIndex: 'creator',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    }
  },
  {
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    dataIndex: 'createdAt',
    valueType: 'date',
    width: 140,
    key: 'since',
    sorter: (a, b) => a.createdAt - b.createdAt
    // tooltip: '这是一段描述'
  },
  {
    title: '备注',
    dataIndex: 'memo',
    copyable: true,
    ellipsis: true,
    align: 'left',
    width: 30,
    // fieldProps: {
    //   style: {
    //     padding: 5
    //   }
    // }
    render: (dom) => <div style={{padding: 5}}>{dom}</div>
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    search: false,
    render: () => [
      <a key='link' >链路</a>,
      <a key='alarm' >报警</a>,
      <a key='monitor' >监控</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />
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
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
  });
}

export default () => {

  return (
    <ProTable<DataType>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      dataSource={tableListDataSource}
      rowKey='id'
      headerTitle='表格标题'
      toolBarRender={() => [
        <Button key='view'>查看日志</Button>,
        <Button key='export' >导出数据<DownOutlined /></Button>,
        <Button key='create' type='primary'>创建应用</Button>
      ] }
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        optionRender: false,
        collapseRender: false,
        collapsed:false
      }}
      dateFormatter="string"
    />
  )
}
