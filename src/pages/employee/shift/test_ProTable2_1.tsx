
import React, {useState} from 'react';
import ProTable, {ProColumnType} from "@ant-design/pro-table";
import {Button} from "antd";
import {useDebounceFn} from "@ant-design/pro-utils";

type DataType = {
  title: string,
  state: string,
  tag: [],
  time: number,
  key: number,
  description: string

}

const columns: ProColumnType<DataType>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true
  },
  {
    title: '状态',
    dataIndex: 'state',
    filtered: true,
    onFilter: true
  },
  {
    title: '标签',
    dataIndex: 'tag'
  },
  {
    title: '创建时间',
    dataIndex: 'title',
    valueType: "date",
    sorter: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    valueType: 'option',
    render: () => [
      <a key='edit'> 编辑</a>,
      <a key='delete'>删除</a>
      ]
  }
]

const getData = (total: number) => {
  if (total < 1) {
    return []
  }
  const data: DataType[] = [];
  for (let i = 0; i < total; i+=1) {
    data.push({
      title: '十四看',
      state: '为解决',
      tag: [],
      time: Date.now(),
      key: Date.now(),
      description: `description: ${Date.now()}`
    })
  }
  return data;
}

const initData = {
  border: true,
  loading: false,
  columns,
  pagination: {
    show: true,
    pageSize: 5,
    current: 1,
    total: 100
  },
  size: 'small',
  expandable: false,
  headerTitle: '高级表格',
  tooltip: '高级表格 tooltip',
  showHeader: true,
  footer: true,
  rowSelection: {},
  scroll: false,
  hasData: true,
  tableLayout: undefined,
  toolBarRender: true,
  search: {
    show: 'true',
    span: 12,
    collapseRender: true,
    labelWidth: 80,
    filterType: 'query',
    layout: 'horizontal'
  },
  options: {
    show: 'true',
    density: true,
    fullScreen: true,
    setting: true
  }
}


export default () => {
  const [config, setConfig] = useState<any>(initData);
  const updateConfig = useDebounceFn(async (state) => {
    setConfig(state);
  },20);
  const tableColumns = (config.columns || columns)?.map((item: any) => ({
    ...item,
    ellipsis: config.ellipsis
  }))
  return (
    <>
      <ProTable
        {...config}
        pagination={
          config.pagination?.show ? config.pagination : { pageSize: 5}
        }
        search={config.search?.show ? config.search : {}}
        expandable={
          config.expandable && {
            expandedRowRender: (record: DataType) => <p>{record.description}</p>
          }
        }
        options={config.options?.show ? config.options : false}
        toolBarRender={
          config?.toolBarRender ? () => [<Button type="primary">刷新</Button>] : false
        }
        footer={config.footer ? () => 'Here is footer' : false}
        headerTitle={config.headerTitle}
        columns={tableColumns}
        dataSource={getData(config.pagination?.total || 10)}
        scroll={config.scroll}
      >

      </ProTable>
    </>
  )
}





