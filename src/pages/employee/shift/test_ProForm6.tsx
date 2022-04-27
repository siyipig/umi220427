import React, {useRef} from "react";
import ProForm, {
  FormInstance,
  ProFormText,
} from "@ant-design/pro-form";
import {Button, message} from "antd";



const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}


export default () => {
  const myRef = useRef<FormInstance>();
  const fillIn = () => {
    myRef?.current?.setFieldsValue({
      name: '张三',
      company: '蚂蚁金服'
    })
  }
  const readCompany = () => {
    message.info(myRef?.current?.getFieldValue('company'));
  }
  return (
    <>
      <ProForm
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
        }}
        formRef={myRef}
        submitter={{
          searchConfig: {
            submitText: '登录'
          },
          submitButtonProps: {
            // size: 'default',
            style: {
              width: '100%'
            }
          },
          render: (props, doms) => {return [
            doms[1],
            <Button key='fillin' onClick={fillIn}>一键填写</Button>,
            <Button key='readCompany' onClick={readCompany}>读取公司</Button>
          ]}
        }}
      >
        <ProFormText
          label='签约客户名称'
          name='name'
          width='md'
          tooltip='最长为24位'
          placeholder='请输入名称'
        />
        <ProFormText
          label='我方公司名称'
          name='company'
          width='md'
          placeholder='请输入名称'
        />
      </ProForm>
    </>
  );

}
