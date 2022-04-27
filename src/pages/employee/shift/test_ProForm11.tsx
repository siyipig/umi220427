import React, {useState} from "react";
import ProForm, {
  ProFormGroup,
  ProFormSelect
} from "@ant-design/pro-form";
import {message} from "antd";




type LayoutType = Parameters<typeof ProForm>[0]['layout'];

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}



export default () => {
  const [formLayout] = useState<LayoutType>('horizontal');
  return (
    <>
      <ProForm
        layout={formLayout}
        onFinish={async (values) => {
          await waitTime(1000);
          console.log(values);
          message.success('提交成功');
        }}

      >
        <ProFormGroup>
          <ProFormSelect.SearchSelect
            label='查询选择器 - request'
            name='eventStatus1'
            width='xs'
            placeholder='请选择'
            fieldProps={{
              labelInValue: true
            }}
            params={{}}
            request={async ({keyWords = ''}) => {                 // 还要再多理解
              return [
                {label: '全部', value: 'all'},
                {label: '已解决', value: 'open'},
                {label: '未解决', value: 'closed'},
                {label: '未解决(已分配)', value: 'closing'},
                {label: '解决中', value: 'processing'}
              ].filter(({value,label}) => {
                return value.includes(keyWords) || label.includes(keyWords)
              })
            }}
          />
          <ProFormSelect.SearchSelect
            label='查询选择器 - valueEnum'
            name='eventStatus2'
            width='xs'
            placeholder='请选择'
            valueEnum={{
              all: { text: '全部', status: 'default'},
              open: { text: '已解决', status: 'success'},
              closed: { text: '未解决', status: 'error'},
              processing: { text: '解决中', status: 'processing'}
            }}
          />
        </ProFormGroup>
        <ProFormSelect.SearchSelect
          label='查询选择器 - options'
          name='eventStatus3'
          width='xs'
          placeholder='请选择'
          options={[
            {label: '全部', value: 'all'},
            {label: '已解决', value: 'open'},
            {label: '未解决', value: 'closed'},
            {label: '未解决(已分配)', value: 'closing'},
            {label: '解决中', value: 'processing'}
            ]}
        />
      </ProForm>
    </>
  );

}
