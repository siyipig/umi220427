import React from "react";
import ProForm, {
  ProFormCaptcha,
  ProFormText,
} from "@ant-design/pro-form";
import {message} from "antd";
import {MailOutlined, MobileOutlined} from "@ant-design/icons/lib";


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
      <div style={{
        width: 330,
        margin: "auto"
      }}>
        <ProForm<{
          phoneNumber: string,
          verificationCode: string
        }>
          params={{}}
          request={async () => {
            await waitTime(100);
            return {
              phoneNumber: '13505816244',
              verificationCode: '1111'
            }
          }}
          onFinish={async (values) => {
            await waitTime(2000);
            console.log(values);
            message.success('提交成功');
          }}
          submitter={{
            searchConfig: {
              submitText: '登录'
            },
            render: (_, dom) => dom.pop(),   // submitter DOM 是一个类数组解构，把重置按钮弹出
            submitButtonProps: {
              size: 'large',
              style: {
                width: '100%'
              }
            }
          }}
        >
          <h1
            style={{
              textAlign: 'center'
            }}
          >
            <img
              style={{
                height: '44px',
                marginRight: 16
              }}
              alt='logo'
              src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            />
            Ant Design
          </h1>
          <div
            style={{
              textAlign: 'center',
              marginTop: 12,
              marginBottom: 40,
            }}
          >
            Ant Design 是西湖区最具影响力的 Web 设计规范
          </div>
          <ProFormText
            name='phone'
            width='md'
            placeholder='请输入手机号'
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined />
            }}
            rules={[{
              required: true,
              message: '请输入手机号'
            },{
              pattern: /^1\d{10}$/,
              message: '不合法的手机号格式!'
            }]}
          />
          <ProFormCaptcha
            name='captcha'
            phoneName='phone'
            placeholder='请输入验证码'
            onGetCaptcha={async (phone) => {
              await waitTime(1000);
              message.success(`手机号${phone}验证码发送成功`)
            }}
            rules={[{
              required: true,
              message: '请输入验证码'
            }]}
            fieldProps={{
              size: 'large',
              prefix: <MailOutlined />
            }}
            captchaProps={{
              size: 'large'
            }}
          />
        </ProForm>
      </div>
    </>
  );

}
