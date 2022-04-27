import React from 'react';
import {
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  QueryFilter
} from "@ant-design/pro-form";
import {message} from "antd";




export default () => {
  return (
    <>
      <QueryFilter<{
        name: string,
        company: string
      }>
        onFinish={async (values) => {
          console.log(values);
          message.success('提交成功');
        }}
      >
        <ProFormText
          label='应用名称'
          name='name'
          width='xs'
          rules={[{
            required: true,
            message: '这个是必填项'
          }]}
        />
        <ProFormText
          label='创建人'
          name='creator'
          width='xs'
        />
        <ProFormSelect.SearchSelect
          label='性别'
          name='sex'
          width='xs'
          valueEnum={{
            man: {text: '男', status: 'man'},
            woman: {text: '女', status: 'woman'}
          }}
        />
        <ProFormText
          label='应用状态'
          name='state'
          width='xs'
        />
        <ProFormDatePicker
          label='响应日期'
          name='date'
          width='xs'
        />
        <ProFormDateRangePicker
          label='创建时间'
          name='createDate'
          colSize={3}
        />
      </QueryFilter>
    </>
  );
};
