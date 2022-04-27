import React from "react";
import ProForm, {
  ProFormDateRangePicker, ProFormDigit, ProFormRadio, ProFormSelect,
  ProFormText, ProFormTextArea, ProFormUploadButton,
} from "@ant-design/pro-form";
import {message} from "antd";
import Card from "@ant-design/pro-card/lib/components/Card";
import BasicLayout, {FooterToolbar, PageContainer} from "@ant-design/pro-layout";
import {SmileOutlined} from "@ant-design/icons/lib";




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
      <BasicLayout
        fixSiderbar
        navTheme='light'
        breakpoint={false}
        defaultCollapsed
        pageTitleRender={false}
        menuDataRender={() => [
          {
            path: '/one',
            icon: <SmileOutlined />,
            name: '一级名称',
            children: [
              {
                path: 'two',
                name: '二级名称'
              }
            ]
          }
        ]}
        layout="mix"
        location={{
          pathname: '/one/two',
        }}
      >
        <PageContainer title='输入表单'>
          <Card>
            <ProForm
              onFinish={async (values) => {
                await waitTime(2000);
                console.log(values);
                message.success('提交成功');
              }}
              initialValues={{
                amountType: 'confirmAmount',
                taxRate: '6%',
                invoiceType: '发票'
              }}
              submitter={{
                render: (props, doms) => {
                  return <FooterToolbar>{doms}</FooterToolbar>    // 这个要再理解下
                }
              }}
            >
              <ProForm.Group>
                <ProFormText
                  label='签约客户名称'
                  name='name'
                  width='sm'
                  placeholder='请输入名称'
                  tooltip='最长为24位'
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
                  width='sm'
                  placeholder='请输入名称'
                />
                <ProFormDateRangePicker
                  label='合同生效时间'
                  name={['contract', 'validTime']}
                  width='md'
                  // placeholder='请输入名称'
                />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormSelect
                  label='合同约定生效方式'
                  name={['contract', 'useMode']}
                  width='xs'
                  options={[{
                    value: 'chapter',
                    label: '盖章后生效'
                  }]}
                />
                <ProFormSelect
                  label='合同约定失效方式'
                  name={['contract', 'unusedMode']}
                  width='xs'
                  options={[{
                    value: 'time',
                    label: '履行完终止'
                  }]}
                />
              </ProForm.Group>
              <ProFormText
                label='主合同编号'
                name={['contract', 'id']}
                width='sm'
                placeholder='请输入'
              />
              <ProFormText
                label='项目命名'
                name='projectName'
                width='lg'
                placeholder='请输入'
                initialValue='智慧停车项目'
                disabled
              />
              <ProFormText
                label='商务经理'
                name='managerName'
                width='xs'
                placeholder='请输入'
                initialValue='启超'
                disabled
              />
              <ProForm.Group>
                <ProFormSelect
                  label='金额类型'
                  name='amountType'
                  width='xs'
                  options={[{
                    value: 'confirmAmount',
                    label: '确认金额'
                  }]}
                />
                <ProFormSelect
                  label='税率'
                  name='taxRate'
                  width='xs'
                  options={[{
                    value: '6%',
                    label: '6%'
                  },{
                    value: '12%',
                    label: '12%'
                  }]}
                />
                <ProFormRadio.Group
                  label='发票类型'
                  name='invoiceType'
                  options={['发票','普票','无票']}
                />
              </ProForm.Group>
              <ProFormUploadButton
                label='倒签报备附件'
                name='file'
                width='xs'
                title='上传文件'
                extra='支持扩展名：.jpg .zip .doc .wps'
              />
              <ProFormDigit
                label='合同份数'
                width='xs'
                max={10}
                min={1}
                fieldProps={{
                  defaultValue: 5
                }}
              />
              <ProFormTextArea
                label='合同备注说明'
                width='lg'
              />
            </ProForm>
          </Card>
        </PageContainer>
      </BasicLayout>


    </>
  );

}
