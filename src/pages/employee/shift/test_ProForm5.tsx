import React from "react";
import ProForm, {
  ProFormDependency,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-form";
import {Form, message} from "antd";



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
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
        }}
        initialValues={{
          name: '杭州时祺科技',
          // name2: '杭州西电',
          useMode: 'chapter'
        }}
      >
        <ProForm.Group>
          <ProFormText
            label='签约客户名称'
            name='name'
            tooltip='最长为24位'
            width='md'
          />
          <ProFormText
            label='签约客户名称'
            name={['name2', 'text']}
            tooltip='最长为24位'
            width='md'
          />
        </ProForm.Group>
        <ProFormDependency name={['name',['name2','text']]}>
          {
            ({name, name2}) => {
              return (
                <ProFormSelect
                  label={`与《${name || ''}》 与 《${name2?.text || ''}》合同约定生效方式`}
                  name='useMode'
                  width='md'
                  options={[{
                    value: 'chapter',
                    label: '盖章后生效'
                  }]}
                />
              )
            }
          }
        </ProFormDependency>
        <Form.Item noStyle shouldUpdate>
          {(form) => {
            return (
              <ProFormSelect
                label={`与《${form.getFieldValue('name')|| ''}》 与 《${form.getFieldValue(['name2','text']) || ''}》合同约定生效方式`}
                name='useMode'
                width='md'
                options={[{
                  value: 'chapter',
                  label: '盖章后生效'
                }]}
              />
            )
          }}
        </Form.Item>
      </ProForm>
    </>
  );

}
