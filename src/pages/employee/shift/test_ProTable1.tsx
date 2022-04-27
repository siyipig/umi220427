import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import ProForm, {
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormList,
  ProFormGroup, ProFormDependency, ProFormTextArea,
} from '@ant-design/pro-form';
import type { ProColumnType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useDebounceFn } from '@ant-design/pro-utils';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';

const valueTypeArray = [
  'password',
  'money',
  'textarea',
  'option',
  'date',
  'dateWeek',
  'dateMonth',
  'dateQuarter',
  'dateYear',
  'dateRange',
  'dateTimeRange',
  'dateTime',
  'time',
  'timeRange',
  'text',
  'select',
  'checkbox',
  'rate',
  'radio',
  'radioButton',
  'index',
  'indexBorder',
  'progress',
  'percent',
  'digit',
  'second',
  'avatar',
  'code',
  'switch',
  'fromNow',
  'image',
  'jsonCode'
]

type DataType = {
  age: number,
  adress: string,
  name: string,
  time: number,
  key: number,
  description: string
}

const columns: ProColumnType<DataType>[] = [
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'time',
    dataIndex: 'time',
    valueType: 'date'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    valueType: 'select',
    filters: true,
    onFilter: true,
    valueEnum: {
      london: {
        text: '伦敦'
      },
      'New York': {
        text: '纽约'
      }
    }
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    valueType: 'option',
    render: () => [
      <a key='delete'>Delete</a>,
      <a key='link' className='ant-dropdown-link'>
        More actions <DownOutlined/>
      </a>
    ]
  }
]

const getData = (total: number) => {
  if (total < 1) {
    return [];
  }
  const data: DataType[] = [];
  for (let i = 1; i <= total; i +=1) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + 10,
      time: Date.now(),
      adress: i % 2 === 0 ? 'london' : 'New York',
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`
    });
  }
  return data;
}

const initData = {
  border: true,
  loading: false,
  columns,
  pagination: {
    show: true,
    pageSize: 5,
    current: 1,
    total: 100
  },
  size: 'small',
  expandable: false,
  headerTitle: '高级表格',
  tooltip: '高级表格 tooltip',
  showHeader: true,
  footer: true,
  rowSelection: {},
  scroll: false,
  hasData: true,
  tableLayout: undefined,
  toolBarRender: true,
  search: {
    show: 'true',
    span: 12,
    collapseRender: true,
    labelWidth: 80,
    filterType: 'query',
    layout: 'horizontal'
  },
  options: {
    show: 'true',
    density: true,
    fullScreen: true,
    setting: true
  }
}


export default  () => {

  const [config, setConfig] = useState<any>(initData);
  const updateConfig = useDebounceFn(async (state) => {
    setConfig(state);
  },20);
  const tableColumns = (config.columns || columns)?.map((item: any) => ({
    ...item,
     ellipsis: config.ellipsis
  }))
  return (
   <>
      <ProCard
        split='vertical'
        bordered
        headerBordered
        style={{
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <ProCard
          style={{
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <ProTable
            {...config}
            pagination={
              config.pagination?.show ? config.pagination : { pageSize: 5}
            }
            search={config.search?.show ? config.search : {}}
            expandable={
              config.expandable && {
                expandedRowRender: (record: DataType) => <p>{record.description}</p>
              }
            }
            options={config.options?.show ? config.options : false}
            toolBarRender={
              config?.toolBarRender ? () => [<Button type="primary">刷新</Button>] : false
            }
            footer={config.footer ? () => 'Here is footer' : false}
            headerTitle={config.headerTitle}
            columns={tableColumns}
            dataSource={getData(config.pagination?.total || 10)}
            scroll={config.scroll}
          />
        </ProCard>
        <ProForm
          layout='inline'
          initialValues={initData}
          submitter={false}
          colon={false}
          onValuesChange={(_, values) => updateConfig.run(values)}
        >
          <ProCard
            colSpan='470px'
            style={{
              height: '100vh',
              overflow: 'auto',
              boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
              top: 0,
              right: 0,
              width: 470
            }}
            tabs={{}}
          >
            <ProCard.TabPane
              key='tab1'
              tab='基本配置'
              cardProps={{
                bodyStyle: {
                  padding: 12
                }
              }}
            >
              <ProForm.Group
                title='表格配置'
                size={0}
                collapsible
                direction='horizontal'
                labelLayout='twoLine'        //  每个标签一行
              >
                <ProFormSwitch
                  fieldProps={{
                    size: 'small'
                  }}
                  label='边框'
                  tooltip='bordered'
                  name='bordered'
                />
                <ProFormRadio.Group
                  label='尺寸'
                  name='size'
                  radioType='button'
                  tooltip={`size="middle"`}
                  fieldProps={{
                    size: 'small'
                  }}
                  options={[
                    {
                      value: 'default',
                      label: '大'
                    },
                    {
                      value: 'middle',
                      label: '中'
                    },
                    {
                      value: 'small',
                      label: '小'
                    }
                  ]}
                />
                <ProFormSwitch
                  label='加载中'
                  name='loading'
                  tooltip='loading'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='显示标题'
                  name='showHeader'
                  tooltip='showHeader'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='页脚'
                  name='footer'
                  tooltip='footer'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='支持展开'
                  name='expandable'
                  tooltip='expandable'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='行选择'
                  name='rowSelection'
                  tooltip='rowSelection'
                  fieldProps={{
                    size: 'small'
                  }}
                />
              </ProForm.Group>
              <ProForm.Group
                title='工具栏'
                tooltip='toolBarRender={false}'
                extra={                         // 直接ReactNode
                    <ProFormSwitch
                      name='toolBarRender'
                      fieldProps={{
                        size: 'small'
                      }}
                      noStyle
                    />
                 }
                collapsible
                direction='horizontal'
                labelLayout='twoLine'
                size={0}
              >
                <ProFormText
                  label='表格标题'
                  tooltip='headerTitle={false}'
                  name='headerTitle'
                  fieldProps={{
                    size: 'small',
                  }}
                />
                <ProFormText
                  label='表格的tooltip'
                  tooltip='tooltip={false}'
                  name='tooltip'
                  fieldProps={{
                    size: 'small',
                  }}
                />
                <ProFormSwitch
                  label='Icon显示'
                  name={['options', 'show']}
                  tooltip='options={{show: false}}'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='密度Icon'
                  name={['options', 'density']}
                  tooltip='options={{density: false}}'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='keyWords'
                  name={['options', 'search']}
                  tooltip='options={{search: false}}'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='全屏 Icon'
                  name={['options', 'fullScreen']}
                  tooltip='options={{fullScreen: false}}'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='列设置 Icon'
                  name={['options', 'setting']}
                  tooltip='options={{setting: false}}'
                  fieldProps={{
                    size: 'small'
                  }}
                />
              </ProForm.Group>
            </ProCard.TabPane>
            <ProCard.TabPane
              key='tab2'
              tab='表单配置'
              cardProps={{
                bodyStyle: {
                  padding: 12
                }
              }}
            >
              <ProForm.Group
                title='查询表单'
                collapsible
                tooltip='search={{show: false}}'
                direction='horizontal'
                labelLayout='twoLine'
                extra={
                  <ProFormSwitch
                    name={['search', 'show']}          // 这个有疑问 , 不起作用？？
                    fieldProps={{
                      size: 'small'
                    }}
                    noStyle
                  />
                }
                size={0}
              >
                <ProFormText
                  label='提交按钮文案'
                  tooltip='search={{submitText}}'
                  name={['search', 'submitText']}
                  fieldProps={{
                    size: 'small',
                  }}
                />
                <ProFormText
                  label='重置按钮文案'
                  tooltip='search={{resetText}}'
                  name={['search', 'resetText']}
                  fieldProps={{
                    size: 'small',
                  }}
                />
                <ProFormSwitch
                  label='收起按钮'
                  name={['search', 'collapseRender']}
                  tooltip='search={{collapseRender:false}}'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSwitch
                  label='表单收起'
                  name={['search', 'collapsed']}
                  tooltip='search={{collapsed:false}}'
                  fieldProps={{
                    size: 'small'
                  }}
                />
                <ProFormSelect
                  label='表单栅格'
                  tooltip='search={{span: 8}}'
                  name={['search', 'span']}
                  fieldProps={{
                    size: 'small',
                  }}
                  options={[
                    {
                      value: 24,
                      label: '24'
                    },
                    {
                      value: 12,
                      label: '12'
                    },
                    {
                      value: 8,
                      label: '8'
                    },
                    {
                      value: 4,
                      label: '4'
                    }
                  ]}
                />
                <ProFormRadio.Group
                  label='表单布局'
                  name={['search', 'layout']}
                  tooltip="search={{layout: 'horizontal'}}"
                  radioType='button'
                  valueEnum={{
                    vertical: '垂直',
                    horizontal: '水平'
                  }}
                />
                <ProFormRadio.Group
                  label='表单类型'
                  name={['search', 'filterType']}
                  tooltip="search={{filterType: 'query'}}"
                  radioType='button'
                  valueEnum={{
                    query: '默认',
                    light: '轻量'
                  }}
                />
              </ProForm.Group>

            </ProCard.TabPane>
            <ProCard.TabPane
              key='tab3'
              tab='数据配置'
              cardProps={{
                bodyStyle: {
                  padding: 12
                }
              }}
            >
              <ProFormGroup
                title='分页器'
                tooltip='pagination={}'
                direction='horizontal'
                labelLayout='twoLine'
                size={0}
                extra={
                  <ProFormSwitch
                    name={['pagination', 'show']}
                    fieldProps={{
                      size: 'small'
                    }}
                    noStyle
                  />
                }
              >
                <ProFormRadio.Group
                  label='尺寸'
                  name={['pagination', 'size']}
                  tooltip="pagination={{size:'middle'}}"
                  radioType='button'
                  fieldProps={{
                    size:'small'
                  }}
                  valueEnum={{
                    default: '默认',
                    small: '小'
                  }}
                />
                <ProFormDigit
                  label='页码'
                  name={['pagination', 'current']}
                  tooltip="pagination={{current: 1}}"
                  fieldProps={{
                    size:'small'
                  }}
                />
                <ProFormDigit
                  label='每页数量'
                  name={['pagination', 'pageSize']}
                  tooltip="pagination={{pageSize: 5}}"
                  fieldProps={{
                    size:'small'
                  }}
                />
                <ProFormDigit
                  label='每页数量'
                  name={['pagination', 'total']}
                  tooltip="pagination={{total: 100}}"
                  fieldProps={{
                    size:'small'
                  }}
                />

              </ProFormGroup>

            </ProCard.TabPane>
            <ProCard.TabPane
              key='tab4'
              tab='列配置'
              cardProps={{
                bodyStyle: {
                  padding: 12
                }
              }}
            >
              <ProFormList
                name='columns'
                itemRender={({listDom, action}) => {
                  return (
                    <ProCard
                      bordered
                      style={{
                        marginBottom: 8,
                        position: 'relative'
                      }}
                      bodyStyle={{
                        padding: 8,
                        paddingRight: 16,
                        paddingTop: 16,
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: -4,
                          right: 2,
                        }}
                      >
                        {action}
                      </div>
                      {listDom}
                    </ProCard>
                  )
                }}
              >
                <ProFormText
                  label='标题'
                  name='title'
                  rules={[{
                    required: true,
                    message: '这个是必填写项'
                  }]}
                />
                <ProFormGroup
                  style={{
                    marginTop: 8,
                  }}
                >
                  <ProFormSwitch
                    label='过长省略'
                    name='ellipsis'
                  />
                  <ProFormSwitch
                    label='复制按钮'
                    name='copyable'
                  />
                </ProFormGroup>
                <ProFormGroup
                  style={{
                    marginTop: 8,
                  }}
                  size={8}
                >
                  <ProFormSelect
                    label='dataIndex'
                    name='dataIndex'            //  返回对象dataIndex字段的值，同时去除undefine
                    width='xs'
                    options={columns.map( (item: any) => item.dataIndex ).filter((item: any) => item)}
                  />
                  <ProFormSelect
                    label='值类型'
                    name='valueType'
                    width='xs'
                    options={valueTypeArray.map((value) => ({
                      label: value,
                      value,
                    }))}
                  />
                </ProFormGroup>
                <ProFormGroup
                  style={{
                    marginTop: 8,
                  }}
                  size={8}
                >
                  <ProFormText
                    label='列提示'
                    name='tooltip'
                    width='xs'
                  />
                </ProFormGroup>
                <ProFormDependency name={['valueEnum', 'valueType']}>
                  {
                    ({valueEnum, valueType}) => {
                      if (valueType !== 'select') {
                        return  null;
                      }
                      return (
                        <ProFormTextArea
                          formItemProps={{       // 这个得再理解下
                            style: {
                              marginTop: 8,
                            },
                          }}
                          fieldProps={{
                            value: JSON.stringify(valueEnum),
                          }}
                          normalize={(value) => {
                            return JSON.parse(value);
                          }}
                          label="数据枚举"
                          name="valueEnum"
                        />
                      )
                    }
                  }
                </ProFormDependency>
              </ProFormList>

            </ProCard.TabPane>
          </ProCard>
        </ProForm>
      </ProCard>
   </>
  );
};


