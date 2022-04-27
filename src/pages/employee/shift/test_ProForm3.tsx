import React, {useState} from "react";
import ProForm, {
  ProFormRadio,
  ProFormText,
} from "@ant-design/pro-form";
import {message} from "antd";

type LayoutType = Parameters<typeof ProForm>[0]['layout'];    // 获取ProForm表单属性[0]组的layout类型

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}


export default () => {
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const formItemLayout = formLayout === 'horizontal' ? {
    labelCol: {span: 2},
    wrapperCol: {span: 14}
  }: null;
  return (
    <>
      <ProFormRadio.Group
        radioType='button'
        options={['horizontal', 'vertical', 'inline']}
        fieldProps={{
          value: formLayout,
          onChange: (e) => {
            setFormLayout(e.target.value);
          }
        }}
      />
      <ProForm<{
        name: string,
        company?: string,
        contractName?: string
      }>
        params={{}}
        request={async () => {
          await waitTime(100);
          return {
            name: '蚂蚁金服'
          }
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
        }}
        style={{margin: 16}}
        initialValues={{
          name: '蚂蚁金服',
          company: '杭州时祺'
        }}
        layout={formLayout}
        {...formItemLayout}
      >
        <ProFormText
          label='签约客户名称'
          name='name'
          width='md'
          tooltip='最长为24位'
          />
        <ProFormText
          label='我方公司名称'
          name='company'
          width='md'
        />
        <ProFormText
          label='合同名称'
          name='projectName'
          width='md'
        />

      </ProForm>
    </>
  );

}
