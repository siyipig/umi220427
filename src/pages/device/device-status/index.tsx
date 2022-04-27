
import React, {useRef, useState} from "react";
import ProTable, {ActionType, ProColumns} from "@ant-design/pro-table";
import {Button, FormInstance, message, Tooltip} from "antd";
import {DownOutlined, QuestionCircleOutlined} from "@ant-design/icons/lib";
import {queryRule,  updateRule} from "@/pages/device/device-status/service";
import {PageContainer} from "@ant-design/pro-layout";
// import UpdateForm, {FormValueType} from "@/pages/device/device-status/components/UpdateForm";
import UpdateSensorForm, {FormValueType} from "@/pages/device/device-status/components/UpdateSensorForm";
import CreateUpdateGradeForm from "@/pages/device/device-status/components/CreateUpdateGradeForm";
import LocalTable from "@/pages/device/device-status/components/LocalTable";



type DataType = {
  serialNumber: string,
  parkStatus: string,
  batteryVoltage: string,
  txPower: string,
  snr: string,
  signalPower: string,
  ecl: string,
  sinr: string,
  rsrp: string,
  createdAt: number,
  // memo: string,
  id: string
}



// const valueEnum = {
//   0: 'close',
//   1: 'running',
//   2: 'online',
//   3: 'error',
// };
// const tableListDataSource: DataType[] = [];
//
// const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

// for (let i = 0; i < 5; i += 1) {
//   tableListDataSource.push({
//     id: i,
//     serialNumber: '21070145',
//     parkStatus: Math.floor(Math.random() * 20),
//     batteryVoltage: '3.6V',
//     signalStrength: '-199',
//     networkStatus: '良好',
//     // creator: creators[Math.floor(Math.random() * creators.length)],
//     // status: valueEnum[Math.floor(Math.random() * 10) % 4],
//     createdAt: Date.now() - Math.floor(Math.random() * 100000),
//     memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
//   });
// }

/**
 * 添加节点
 *
 * @param fields
 */
// const handleAdd = async (fields: TableListItem) => {
//   const hide = message.loading('正在添加');
//   try {
//     await addRule({ ...fields });
//     hide();
//     message.success('添加成功');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('添加失败请重试！');
//     return false;
//   }
// };

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('正在配置');
  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();

    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

/**
 * 删除节点
 *
 * @param selectedRows
 */
// const handleRemove = async (selectedRows: TableListItem[]) => {
//   const hide = message.loading('正在删除');
//   if (!selectedRows) return true;
//   try {
//     await removeRule({
//       key: selectedRows.map((row) => row.key),
//     });
//     hide();
//     message.success('删除成功，即将刷新');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('删除失败，请重试');
//     return false;
//   }
// };

export default () => {
  const [createUpgradeVisible, handleUpgradeVisible] = useState<boolean>(false);
  // const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [localTableVisible, handleLocalTableVisible] = useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance>();
  // const [row, setRow] = useState<TableListItem>();
  // const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  const columns: ProColumns<DataType>[] = [
    {
      title: '地磁序列号',
      dataIndex: 'serialNumber',
      width: 80,
      render: (dom) => <a>{dom}</a>
    },
    {
      title: '车位状态',
      dataIndex: 'parkStatus',
      width: 80,
      // align: 'right',
      // sorter: (a, b) => a.containers - b.containers
    },
    {
      title: '电池电压',
      dataIndex: 'batteryVoltage',
      width: 80,
      // valueType: 'select',
      // valueEnum: {
      //   online: { text: '已上线', status: 'Success'},
      //   error: { text: '异常', status: 'Error'},
      //   running: { text: '运行中', status: 'Processing'},
      //   close: { text: '关闭', status: 'default'}
      // }
    },
    {
      title: '终端发射功率',
      dataIndex: 'txPower',
      width: 80,
      // valueType: 'select',
      // valueEnum: {
      //   online: { text: '已上线', status: 'Success'},
      //   error: { text: '异常', status: 'Error'},
      //   running: { text: '运行中', status: 'Processing'},
      //   close: { text: '关闭', status: 'default'}
      // }
    },
    {
      title: '信噪比',
      dataIndex: 'snr',
      width: 80,
      // valueType: 'select',
      // valueEnum: {
      //   online: { text: '已上线', status: 'Success'},
      //   error: { text: '异常', status: 'Error'},
      //   running: { text: '运行中', status: 'Processing'},
      //   close: { text: '关闭', status: 'default'}
      // }
    },
    {
      title: '信号强度',
      dataIndex: 'signalPower',
      width: 80,
      // valueType: 'select',
      // valueEnum: {
      //   online: { text: '已上线', status: 'Success'},
      //   error: { text: '异常', status: 'Error'},
      //   running: { text: '运行中', status: 'Processing'},
      //   close: { text: '关闭', status: 'default'}
      // }
    },
    {
      title: '无线网络覆盖等级',
      dataIndex: 'ecl',
      width: 80,
      // valueType: 'select',
      // valueEnum: {
      //   online: { text: '已上线', status: 'Success'},
      //   error: { text: '异常', status: 'Error'},
      //   running: { text: '运行中', status: 'Processing'},
      //   close: { text: '关闭', status: 'default'}
      // }
    },
    {
      title: '无线网络噪声比',
      dataIndex: 'sinr',
      width: 80,
      // valueType: 'select',
      // valueEnum: {
      //   online: { text: '已上线', status: 'Success'},
      //   error: { text: '异常', status: 'Error'},
      //   running: { text: '运行中', status: 'Processing'},
      //   close: { text: '关闭', status: 'default'}
      // }
    },
    {
      title: '无线网络信号接收功率',
      dataIndex: 'rsrp',
      width: 80,
      // valueType: 'select',
      // valueEnum: {
      //   online: { text: '已上线', status: 'Success'},
      //   error: { text: '异常', status: 'Error'},
      //   running: { text: '运行中', status: 'Processing'},
      //   close: { text: '关闭', status: 'default'}
      // }
    },
    {
      title: (
        <>
          时间
          <Tooltip placement="top" title="这是一段描述">
            <QuestionCircleOutlined style={{ marginLeft: 4 }} />
          </Tooltip>
        </>
      ),
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      width: 140,
      key: 'since',
      sorter: (a, b) => a.createdAt - b.createdAt
      // tooltip: '这是一段描述'
    },
    // {
    //   title: '备注',
    //   dataIndex: 'memo',
    //   copyable: true,
    //   ellipsis: true,
    //   align: 'left',
    //   width: 30,
    //   // fieldProps: {
    //   //   style: {
    //   //     padding: 5
    //   //   }
    //   // }
    //   render: (dom) => <div style={{padding: 5}}>{dom}</div>
    // },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      search: false,
      render: (_, record) => [
        <a key='link'
           onClick={() => {
             handleUpdateModalVisible(true);
             setStepFormValues(record);
           }}
        >参数设置</a>,
        <a key='alarm'
           onClick={() => {
             handleUpgradeVisible(true);
             // setStepFormValues(record);
           }}
        >升级</a>,
        <a key='monitor'
           onClick={() => {
             handleLocalTableVisible(true);
             // setStepFormValues(record);
           }}
        >本地存储读取</a>,
        // <TableDropdown
        //   key="actionGroup"
        //   menus={[
        //     { key: 'copy', name: '复制' },
        //     { key: 'delete', name: '删除' },
        //   ]}
        // />
      ]
    }
  ]

  return (
    <PageContainer>
      <ProTable<DataType>
        key='proTable1'
        columns={columns}
        // request={(params, sorter, filter) => {
        //   // 表单搜索项会从 params 传入，传递给后端接口。
        //   console.log('哈哈',params, sorter, filter);
        //   return Promise.resolve({
        //     data: tableListDataSource,
        //     success: true,
        //   });
        // }}
        request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        // dataSource={tableListDataSource}
        rowKey='id'
        headerTitle='地磁检测器'
        toolBarRender={() => [
          <Button key='view'>查看日志</Button>,
          <Button key='export' >导出数据<DownOutlined /></Button>,
          <Button key='create' type='primary'>创建应用</Button>
        ] }
        pagination={{
          showQuickJumper: true,
        }}
        // search={{
        //   optionRender: false,
        //   collapseRender: false,
        //   collapsed:false
        // }}
        dateFormatter="string"
        formRef={formRef}
      />
      <CreateUpdateGradeForm onCancel={() => handleUpgradeVisible(false)} modalVisible={createUpgradeVisible}>
      </CreateUpdateGradeForm>
      {/* <LocalTable onCancel={() => handleLocalTableVisible(false)} modalVisible={localTableVisible} serialNumber={() => {console.log(formRef.current?.getFieldValue('serialNumber'));return '1488'}}> */}
      {/* </LocalTable> */}
      <LocalTable onCancel={() => handleLocalTableVisible(false)} modalVisible={localTableVisible} serialNumber={formRef.current?.getFieldValue('serialNumber')}>
      </LocalTable>
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateSensorForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageContainer>

  )
}
