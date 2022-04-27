import React from "react";
import ProForm, {
  ProFormDatePicker, ProFormDateRangePicker, ProFormSelect,
  ProFormText,
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
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
        }}
        syncToUrl={(values, type) => {        //   这个字段需要再理解下
          if (type === 'get') {
            return {
              ...values,
              validTime: (values.startTime || values.endTime) ? [values.startTime, values.endTime] : undefined
            }
          }
          return {
            ...values,
            invalidTime: undefined
          }
        }}
        initialValues={{
          name: '杭州时祺'
        }}
      >
        <ProFormText
          label='签约客户名称'
          name='name'
          width='md'
          tooltip='最长为24位'
          placeholder='请输入名称'
        />
        <ProFormDateRangePicker
          label='合同生效时间'
          name='validTime'
          width='md'
          transform={(values) => {                 // 这个字段需要再理解下
            return {
              startTime: values ? values[0] : undefined,
              endTime: values ? values[1] : undefined
            }
          }}
          // tooltip='最长为24位'
          // placeholder='请输入名称'
        />
        <ProFormDatePicker
          label='合同失效时间'
          name='invalidTime'
          width='md'
        />
        <ProFormSelect
          label='合同约定生效方式'
          name='useMode'
          width='sm'
          options={[{
            value: 'chapter',
            label: '盖章后生效'
          }]}
        />
      </ProForm>
    </>
  );

}
