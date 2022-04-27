import React from "react";
import ProForm, {
  ProFormCheckbox,
  ProFormDigit, ProFormGroup,
  ProFormRadio,
  ProFormSelect, ProFormSlider, ProFormSwitch,
  ProFormText
} from "@ant-design/pro-form";
import {Rate} from "antd";

import Mock from 'mockjs'




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
        }}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
      >
        <ProFormGroup label='文本类'>
          <ProFormText
            label='名字'
            name='name'
            width='md'
            placeholder='请输入名字'
            initialValue='七贤'
          />
          <ProFormText.Password
            label='密码'
            name='password'
            width='md'
            placeholder='请输入密码'
          />
        </ProFormGroup>
        <ProForm.Group>
          <ProFormSelect
            label='Select'
            name='country'
            width='sm'
            valueEnum={{
              china: 'China',
              usa: 'U.S.A',
            }}
            rules={[{
              required: true,
              message: '请选择国家'
            }]}
          />
          <ProFormSelect
            showSearch
            label='支持搜索查询的 Select'
            name='country1'
            width='sm'
            request={async ({keyWords}) => {          // 这边需要再消化下
              await waitTime(1000);
              return Mock.mock({
                'data|1-10': [
                  {
                    value: '@id',
                    label: '@name'
                  }
                ]
              }).data.concat({
                value: keyWords,
                label: '目标_target'
              });
            }}
            rules={[{
              required: true,
              message: '请选择国家'
            }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            label='合同约定生效方式'
            name='useMode'
            width='md'
            request={async () => [
              {label: '全部', value: 'all'},
              {label: '已解决', value: 'open'},
              {label: '未解决', value: 'closed'},
              {label: '解决中', value: 'processing'}
            ]}

          />
          <ProFormSelect
            mode="multiple"
            label='Select[multiple]'
            name='colorPick'
            width='xs'
            valueEnum={{
              red: 'Red',
              green: 'Green',
              blue: 'Blue',
            }}
            placeholder="Please select favorite colors"
            rules={[{
              required: true,
              message: 'Please select your favorite colors!'
            }]}

          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormRadio.Group
            label='Radio.Group'
            name='itemSelect1'
            initialValue='item1'
            // width='md'
            options={[{
              value: 'item1',
              label: 'item1'
            },{
              value: 'item2',
              label: 'item2'
            },{
              value: 'item3',
              label: 'item3'
            }]}
          />
          <ProFormRadio.Group
            label='Radio.Group'
            name='itemSelect2'
            layout='vertical'
            // width='md'
            options={[{
              value: 'item1',
              label: 'item1'
            },{
              value: 'item2',
              label: 'item2'
            },{
              value: 'item3',
              label: 'item3'
            }]}
            initialValue='item1'
          />
          <ProFormRadio.Group
            label='Radio.Group'
            name='itemSelect3'
            radioType='button'
            // width='md'
            options={[{
              value: 'item1',
              label: 'item1'
            },{
              value: 'item2',
              label: 'item2'
            },{
              value: 'item3',
              label: 'item3'
            }]}
            initialValue='item1'
          />
        </ProForm.Group>
        <ProFormCheckbox.Group
          label='Checkbox.Group'
          name='itemSelect4'
          // width='md'
          options={['A','B','C','D','E','F']}
          initialValue={['A','B']}
        />
        <ProForm.Group>
          <ProFormDigit
            label='InputNumber'
            name='numberSelect'
            min={1}
            max={10}
            initialValue={5}
            fieldProps={{
              step: 2,
            }}
          />
          <ProFormSwitch
            label='switch'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSlider
            label='InputNumber'
            name='numberSelect1'
            width='lg'
            min={0}
            max={100}
            initialValue={0}
            fieldProps={{
              step: 1,
              marks:{
                0:  'A',
                20: 'B',
                40: 'C',
                60: 'D',
                80: 'E',
                100:'F'
              }
            }}
          />
          <ProForm.Item>
            <Rate allowHalf defaultValue={3.5}/>
          </ProForm.Item>
        </ProForm.Group>
      </ProForm>
    </>
  );

}
