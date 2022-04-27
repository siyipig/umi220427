import React, {useState} from "react";
import ProForm, {
  DrawerForm,
  LightFilter,
  ModalForm, ProFormDateRangePicker,
  ProFormRadio, ProFormSelect,
  ProFormText,
  QueryFilter,
  StepsForm
} from "@ant-design/pro-form";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons/lib";


const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}


export default () => {

  const [type, setType] = useState('ProForm');
  const Components = {
    ProForm,
    ModalForm,
    DrawerForm,
    QueryFilter,
    LightFilter,
    StepsForm

  }

  if (type === 'StepsForm')  {
    return (
      <>
        <ProFormRadio.Group
          style={{margin: 24}}
          radioType='button'
          fieldProps={{
            value: type,
            onChange: (e => {
              setType(e.target.value)
            })
          }}
          options={['LightFilter', 'ProForm', 'ModalForm', 'DrawerForm', 'QueryFilter', 'StepsForm']}
        />
        <StepsForm

          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('提交成功');
          }}
        >
          <StepsForm.StepForm title='第一步'>
            <ProForm.Group>
              <ProFormText
                width='md'
                name='name'
                label='签约客户名称'
                tooltip='最长为24位'
                placeholder='请输入名称'
              />
              <ProFormText
                width='md'
                name='company'
                label='我公司名称'
                placeholder='请输入名称'
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                width='md'
                name={['contract','name']}
                label='合同名称'
                placeholder='请输入合同名称'
              />
              <ProFormDateRangePicker
                width='md'
                name={['contract','time']}
                label='合同生效时间'
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title='第二步'>
            <ProForm.Group>
              <ProFormSelect
                options={[{
                  value:'chapter',
                  label: '盖章后生效'
                }]}
                width='xs'
                name='useMode'
                label='合同约定履行方式'
              />
              <ProFormSelect
                options={[{
                  value: 'time',
                  label: '履行完终止'
                }]}
                width='xs'
                name='unusedMode'
                label='合同约定失效方式'
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title='第三步'>
            <ProForm.Group>
              <ProFormText
                width='md'
                name='id'
                label='主合同编号'
                placeholder='请输入合同编号'
              />
              <ProFormText
                width='md'
                name='project'
                label='项目名称'
                disabled
                initialValue='智慧停车'
              />
              <ProFormText
                width='md'
                name='managerName'
                label='项目经理'
                disabled
                initialValue='启超'
              />
            </ProForm.Group>
          </StepsForm.StepForm>
        </StepsForm>
      </>
    )
  }

  const FormComponents = Components[type];
  return (
    <>
      <ProFormRadio.Group
        style={{margin: 16}}
        radioType='button'
        fieldProps={{
          value: type,
          onChange: (e => {
            setType(e.target.value)
          })
        }}
        options={['LightFilter', 'ProForm', 'ModalForm', 'DrawerForm', 'QueryFilter', 'StepsForm']}
      />
      <div style={{margin: 24}}>
        <FormComponents
          labelWidth='auto'
          trigger={
            <Button type='primary'>
              <PlusOutlined />
              新建表单
            </Button>
          }
          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('提交成功');
          }}
          initialValues={{
            name:'杭州时祺科技有限公司',
            useMode: 'chapter'
          }}
        >
          <ProForm.Group>
            <ProFormText
              width='md'
              name='name'
              label='签约客户名称'
              tooltip='最长为24位'
              placeholder='请输入名称'

            />
            <ProFormText width='md' name='company' label='我方公司名称' placeholder='请输入名称' />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              name={['contract', 'name']}      // 放到contract的对象里, 对象字段为name
              width='md'
              label='合同名称'
              placeholder='请输入名称'
            />
            <ProFormDateRangePicker
              width="md"
              name={['contract', 'createTime']}   // 放到contract的对象里, 对象字段为createTime
              label="合同生效时间"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              options={[{
                value: 'chapter',
                label: '盖章后生效'
              }]}
              width='xs'
              name='useMode'
              label='合同约定生效方式'
            />
            <ProFormSelect
              options={[{
                value: 'time',
                label: '履行完终止'
              }]}
              name='unusedMode'
              label= '合同约定失效方式'
            />
          </ProForm.Group>
          <ProFormText
            name='id'
            width='md'
            label='主合同编号'
            placeholder='请输入合同编号'
          />
          <ProFormText
            name='project'
            width='md'
            label='项目名称'
            initialValue='智慧停车'
            disabled
          />
          <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途"/>
        </FormComponents>
      </div>
    </>
  )
}
