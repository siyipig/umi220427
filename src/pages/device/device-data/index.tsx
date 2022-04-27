
import React, {useRef} from "react";
import ProTable, {ActionType, ProColumns} from "@ant-design/pro-table";
import {Tooltip} from "antd";
import { QuestionCircleOutlined} from "@ant-design/icons/lib";
import {queryRule} from "@/pages/device/device-data/service";
import {PageContainer} from "@ant-design/pro-layout";
// import {DataReportParams} from "@/pages/device/device-data/data";



type DataType = {
  serialNumber: string,
  parkStatus: string,
  createdAt: number,
  id: string
}




export default () => {
  // const dataParams: DataReportParams = {
  //   serialNumber: '1433'
  // }
  const actionRef = useRef<ActionType>();
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
    }
  ]

  // useEffect(() => {
  //   const timeId = setInterval(() => {
  //     if (actionRef.current) {
  //       actionRef.current.reload();
  //     }
  //   },3000);
  //   return () => {
  //     clearInterval(timeId);
  //   }
  // },[])
  return (
    <PageContainer>
      <ProTable<DataType>
        key='deviceDataProTable'
        columns={columns}
        request={(params, sorter, filter) => queryRule({ ...params, sorter, filter})}
        // dataSource={tableListDataSource}
        rowKey='id'
        headerTitle='地磁检测器实时数据上报'
        pagination={{
          showQuickJumper: true,
        }}
        dateFormatter="string"
        actionRef={actionRef}
      />
    </PageContainer>

  )
}
