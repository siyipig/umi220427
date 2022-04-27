import React, {useState} from "react";
import ProForm, {
  ProFormText
} from "@ant-design/pro-form";
import {message} from "antd";

import {EditableProTable, ProColumns} from "@ant-design/pro-table";




const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}

//  先定义表的数据结构
type DataSourceType = {
  id: React.Key,
  title?: string,
  decs?: string,
  state?: string,
  created_at?: string,
  children?: DataSourceType[]
}

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '篮球',
    decs: '篮球比赛很激烈',
    state: '开放',
    created_at: '2020-05-26T09:42:56Z'
  },{
    id: 624691229,
    title: '足球',
    decs: '足球比赛很激烈',
    state: '结束',
    created_at: '2020-05-26T08:19:22Z'
  }
]

const columns: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
    width: '30%'
  },{
    title: '状态',
    dataIndex: 'state'
  },{
    title: '描述',
    dataIndex: 'decs'
  },{
    title: '操作',
    valueType: 'option'
  }
];

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id)
  )
  return (
    <>
      <ProForm<{
        name: string,
        company: string
      }>
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
        }}
        initialValues={{
          name: '杭州时祺'
        }}
      >
        <ProForm.Group>
          <ProFormText
            label='签约客户名称'
            name='name'
            width='md'
            placeholder='请输入名称'
            tooltip='最长为24位'
          />
          <ProFormText
            label='我方公司名称'
            name='company'
            width='md'
            placeholder='请输入名称'
          />
        </ProForm.Group>
        <ProFormText
          label='合同编号'
          name='contractId'
          width='md'
          placeholder='请输入'
        />
        <ProForm.Item
          label='数组数据'
          name='dataSource'                          // 这也需要再好好理解
          initialValue={defaultData}
          trigger='onValuesChange'
        >
          <EditableProTable<DataSourceType>
            rowKey='id'
            toolBarRender={false}
            columns={columns}
            recordCreatorProps={{                       // 需要再好好理解
              newRecordType: 'dataSource',
              position: 'top',
              record: ()  => ({
                id: Date.now()
              })
            }}
            editable={{                                // 需要再好好理解
              type: 'multiple',
              editableKeys,
              onChange: setEditableRowKeys,
              actionRender: (row, _, dom) => {
                return [dom.delete];
              }

            }}

          />

        </ProForm.Item>

      </ProForm>
    </>
  );

}
