import React from "react";
import ProForm, {
  ProFormDateRangePicker,
   ProFormSelect,
  ProFormText,
} from "@ant-design/pro-form";
import { message} from "antd";



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
      <ProForm<{
        name: string,
        company?: string,
        useMode?: string
      }>
        onFinish={ async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
        }}
        params={{}}
        request={async () => {
          console.log('request:')
          await waitTime(100);
          return {
            name: '西电工业自动化',
            useMode: '易华录',
            projectName: '智慧停车'
          }
        }}
        initialValues={{
          name: '杭州时祺科技有限公司',
          useMode: 'chapter'
        }}
      >
        <ProForm.Group>
          <ProFormText
            label='签约客户名称'
            name='name'
            width='md'
            tooltip='最长为24位'
            placeholder='请输入客户名称'
          />
          <ProFormText
            label='我方公司名称'
            name='company'
            width='md'
            placeholder='请输入名称'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label='合同名称'
            name={['contract', 'name']}
            width='md'
            placeholder='请输入名称'
          />
          <ProFormDateRangePicker
            label='合同生效时间'
            name={['contract', 'name']}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            label='合同约定生效方式'
            name='useMode'
            width='xs'
            options={[{
              value: 'chapter',
              label: '盖章后生效'
            }]}
            readonly
          />
          <ProFormSelect
            label='合同约定失效方式'
            name='unusedMode'
            width='xs'
            options={[{
              value: 'time',
              label: '履行完终止'
            }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label='主合同编号'
            name='id'
            width='sm'
            placeholder='请输入'
          />
          <ProFormText
            label='项目名称'
            name='projectName'
            width='md'
            placeholder='请输入名称'
            // initialValue='智慧停车'
            disabled
          />
          <ProFormText
            label='商务经理'
            name='manager'
            width='xs'
            placeholder='请输入名称'
            initialValue='启超'
            disabled
          />
        </ProForm.Group>
      </ProForm>

    </>
  );

}
