
import React from "react";
import ProTable, { ProColumns} from "@ant-design/pro-table";
import {Button, Tooltip} from "antd";
import {DownOutlined, QuestionCircleOutlined} from "@ant-design/icons/lib";
// import {queryRule} from "@/pages/device/device-alarm/service";
import {PageContainer} from "@ant-design/pro-layout";
// import UpdateForm, {FormValueType} from "@/pages/device/device-alarm/components/UpdateForm";




type DataType = {
  serialNumber: string,
  alarmInfo: string,
  createdAt: number,
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
// const handleUpdate = async (fields: FormValueType) => {
//   const hide = message.loading('正在配置');
//   try {
//     await updateRule({
//       name: fields.name,
//       desc: fields.desc,
//       key: fields.key,
//     });
//     hide();
//
//     message.success('配置成功');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('配置失败请重试！');
//     return false;
//   }
// };

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
const getData = (total: number) => {
  if (total < 1) {
    return [];
  }
  const data: DataType[] = [];
  for (let i = 1; i <= total; i +=1) {
    data.push({
      serialNumber: `14${i%5+2}${i}`,
      alarmInfo: (i % 2 === 0) ? 'error1' : 'error2',
      createdAt: Date.now() - 1000*3600*5*i-1800*1000*Math.random(),
      id: i.toString()
    });
  }
  return data;
}

export default () => {
  // const [createUpgradeVisible, handleUpgradeVisible] = useState<boolean>(false);
  // const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  // const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  // const [stepFormValues, setStepFormValues] = useState({});
  // const actionRef = useRef<ActionType>();
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
      title: '告警信息',
      dataIndex: 'alarmInfo',
      width: 80,
      valueType: 'select',
      valueEnum: {
        online: { text: '已上线', status: 'Success'},
        error1: { text: '设备掉线', status: 'Error'},
        error2: { text: '电池电量低', status: 'Error'},
        running: { text: '运行中', status: 'Processing'},
        close: { text: '关闭', status: 'default'}
      }
    },
    {
      title: (
        <>
          报警时间
          <Tooltip placement="top" title="报警时间">
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
    //   title: '操作',
    //   width: 180,
    //   key: 'option',
    //   valueType: 'option',
    //   search: false,
    //   render: (_, record) => [
    //     <a key='link'
    //        onClick={() => {
    //          console.log(record)
    //          // handleUpdateModalVisible(true);
    //          // setStepFormValues(record);
    //        }}
    //     >删除报警</a>,
    //     // <a key='alarm'
    //     //    onClick={() => {
    //     //      handleUpgradeVisible(true);
    //     //      // setStepFormValues(record);
    //     //    }}
    //     // >升级</a>,
    //     // <a key='monitor' >监控</a>,
    //     // <TableDropdown
    //     //   key="actionGroup"
    //     //   menus={[
    //     //     { key: 'copy', name: '复制' },
    //     //     { key: 'delete', name: '删除' },
    //     //   ]}
    //     // />
    //   ]
    // }
  ]

  return (
    <PageContainer>
      <ProTable<DataType>
        key='proTable1'
        columns={columns}
        // request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        // dataSource={tableListDataSource}
        dataSource={getData(8)}
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
        dateFormatter="string"
      />
    </PageContainer>

  )
};
