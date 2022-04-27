
import React, {useRef} from 'react';
import ProTable, {ActionType, ProColumns, TableDropdown} from "@ant-design/pro-table";

import request from "umi-request";
import {Button, Dropdown, Menu, Space, Tag} from "antd";
import {EllipsisOutlined, PlusOutlined} from "@ant-design/icons/lib";



type DataType = {
  title: string,
  state: string,
  labels: {
    name: string,
    color: string
  }[],
  created_at: string,

  updated_at: string,
  closed_at?: string,
  url: string,
  id: number,
  number: number,
  comments: number
}

const columns: ProColumns<DataType>[] = [
  {
    dataIndex: 'dataIndex',
    valueType: 'indexBorder',
    width: 48
  },
  {
    title: '标题',
    dataIndex: 'title',
    // width: 100,
    copyable: true,
    tooltip: '标题过长会自动收缩',
    ellipsis: true,
    formItemProps: {
      style: {
        color: "red"
      },
      rules: [
        {
          required: true,
          message: '这个是必填项'
        }
      ]
    }
  },
  {
    title: '状态',
    dataIndex: 'state',
    filtered: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      }
    }
  },
  {
    title: '标签',
    dataIndex: 'labels',
    search: false,               // renderFormItem 作用
    renderFormItem: (_,{ defaultRender}) => {
      return defaultRender(_);
    },
    render: (_, record) => (            // 这段要多看看
      <Space>
        {
          record.labels.map(({name, color}) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))
        }
      </Space>
    )
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: "date",
    sorter: true,
    hideInSearch: true         // 这个 search 有什么区别
  },
  {
    title: '创建时间',          // 这一列要再多理解理解
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: value =>
      {                    // transform 作用  这个value 是搜索form表单的值, 转换成column内的值
         console.log(value);
         return {
           startTime: value[0],
           endTime: value[1]
         }
      }
    }
  },
  { // 这一列得多理解下
    title: '操作',
    dataIndex: 'action',
    valueType: 'option',
    render: (text,record, _, action) => [
      <a
        key='editable'
        onClick={() => {
          action?.startEditable?.(record.id)
        }}
      >
        编辑
      </a>,
      <a href={record.url} target='_blank'  key='view'>查看</a>,
      <TableDropdown
        key='actionGroup'
        onSelect={() => action?.reload()}
        menus={[
          {key: 'copy', name: '复制'},
          {key: 'delete', name: '删除'}
        ]}
      />

    ]
  }
]


// const initData = {
//   border: true,
//   loading: false,
//   columns,
//   pagination: {
//     show: true,
//     pageSize: 5,
//     current: 1,
//     total: 100
//   },
//   size: 'small',
//   expandable: false,
//   headerTitle: '高级表格',
//   tooltip: '高级表格 tooltip',
//   showHeader: true,
//   footer: true,
//   rowSelection: {},
//   scroll: false,
//   hasData: true,
//   tableLayout: undefined,
//   toolBarRender: true,
//   search: {
//     show: 'true',
//     span: 12,
//     collapseRender: true,
//     labelWidth: 80,
//     filterType: 'query',
//     layout: 'horizontal'
//   },
//   options: {
//     show: 'true',
//     density: true,
//     fullScreen: true,
//     setting: true
//   }
// }

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <>
      <ProTable
        columns={columns}
        request={async (params = {}, sort, filter) => {
          console.log(sort, filter);
          return request<{
            data: DataType[];
          }>('https://proapi.azurewebsites.net/github/issues', {
            params,
          });
        }}
        rowKey="id"
        actionRef={actionRef}
        editable={{
          type: 'multiple'
        }}
        search={{
          labelWidth: "auto"
        }}
        form={{
          syncToUrl: ((values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime]
              };
            }
            return values;
          })
        }}
        pagination={{
          pageSize: 5
        }}
        dateFormatter='string'
        headerTitle='高级表格'
        toolBarRender={() => [
          <Button key='button' icon={<PlusOutlined />} type='primary'>新建</Button>,
          <Dropdown key='menu' overlay={menu}>
            <Button>
              <EllipsisOutlined/>
            </Button>
          </Dropdown>
        ]}
      >

      </ProTable>
    </>
  )
}





