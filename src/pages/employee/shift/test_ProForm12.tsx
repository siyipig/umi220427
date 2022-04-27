import React from "react";
import ProForm, {
  ProFormDependency, ProFormFieldSet,
  ProFormSelect, ProFormText
} from "@ant-design/pro-form";
import {message} from "antd";



const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}



export default () => {
  return (
    <>
      <ProForm
        onFinish={async (values) => {
          await waitTime(1000);
          console.log(values);
          message.success('提交成功')
        }}
        initialValues={{
          list: ['1', '2', '3']
        }}
      >
        <ProForm.Item label='互相依赖的表单'>
          <ProFormDependency name={['list']} >
            {
              ({list}) => {
                return <div>{JSON.stringify(list, null ,2)} </div>
              }}
          </ProFormDependency>

        </ProForm.Item>
        <ProFormFieldSet name='list' label='组件列表'>
          <ProFormText
            width='md'
          />
          <ProFormSelect
            label='合同约定生效方式'
            name='useMode'
            width='md'
            valueEnum={{
              all:{text: '全部', status: 'default'},
              open:{text: '已解决', status: 'success'},
              closed:{text: '已关闭', status: 'error'},
              processing: {text: '解决中', status: 'processing'}
            }}
          />

          <ProFormText
            width='md'
          />
        </ProFormFieldSet>
        <ProFormFieldSet
          name="list"
          label="组件列表- Input.Group"
          type="group"
          transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
        >
          <ProFormText width="md" />
          <ProFormText width="md" />
          <ProFormText width="md" />
        </ProFormFieldSet>
        <ProFormFieldSet
          name='list'
          label='组件列表'
          readonly
          transform={(value) => ({startTime: value[0], endTime: value[1]})}
        >
          <ProFormText
            readonly
            width='md'
          />
          -
          <ProFormText
            readonly
            width='md'
          />
          -
          <ProFormText
            readonly
            width='md'
          />
        </ProFormFieldSet>
        <ProFormDependency name={['input1', 'input2', 'input3']} >
          {
            ({input1, input2, input3}) => {
              return (
                  <div>{`${input1}-${input2}-${input3}`}</div>
              )
            }
          }
        </ProFormDependency>
      </ProForm>
    </>
  );

}
