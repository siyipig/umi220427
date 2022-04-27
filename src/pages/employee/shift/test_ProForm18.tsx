import React from 'react';
import {BetaSchemaForm, ProFormColumnsType} from "@ant-design/pro-form";

const valueEnum = {
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

type DataItem = {
  name: string,
  state: string
}

const columns: ProFormColumnsType<DataItem>[][] = [
  [
    {
      title: '标题',
      dataIndex: 'title',
      width:'m',
      formItemProps: {
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
      width:'m',
      valueType: 'select',
      valueEnum
    }
  ],
  [
    {
      title: '标签',
      dataIndex: 'tag',
      width:'m',
    },
    {
      title: '创建实际',
      dataIndex: 'create_at',
      width:'xs',
      valueType: 'date',
    },
    {
      title: '分组',
      dataIndex: 'group',
      valueType: 'group',
      columns: [
        {
          title: '状态',
          dataIndex: 'groupState',
          width:'m',
          valueType: 'select',
          valueEnum
        },{
          title: '标题',
          dataIndex: 'groupTitle',
          width:'m',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '这个是必填项'
              }
            ]
          }
        }
      ]
    }
  ],
  [
    {
      title: '列表',
      dataIndex: 'formList',
      valueType: 'formList',
      columns: [
        {
          title: '状态',
          dataIndex: 'listState',
          width:'m',
          valueType: 'select',
          valueEnum
        },{
          title: '标题',
          dataIndex: 'listTitle',
          width:'m',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '这个是必填项'
              }
            ]
          }
        }
      ]
    },
    {
      title: 'FormSet',
      dataIndex: 'formSet',
      valueType: 'formSet',
      columns: [
        {
          // title: '状态',
          dataIndex: 'setState',
          width:'xs',
          valueType: 'select',
          valueEnum
        },
        {
          // title: '状态',
          dataIndex: 'setTitle',
          width:'m',
        }
      ]
    },
    {
      title: '创建时间',
      dataIndex: 'create_at2',
      width:'xs',
      valueType: 'dateRange',
    }
  ]
]


export default () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        layoutType='StepsForm'
        steps={[
          {title: '第一步'},
          {title: '第二步'},
          {title: '第三步'}
        ]}
        columns={columns}
        onFinish={async (values) => {
          console.log(values);
        }}
      />
    </>
  );
};
