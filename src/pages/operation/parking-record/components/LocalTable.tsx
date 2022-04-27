import React from 'react';
import { Modal, Tooltip} from 'antd';
import {queryLocalData} from "@/pages/device/device-status/service";
import { QuestionCircleOutlined} from "@ant-design/icons/lib";
import ProTable, {ProColumns} from "@ant-design/pro-table";



interface CreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
  serialNumber?: string;
}

type DataType = {
  serialNumber: string,
  parkStatus: string,
  createdAt: number,
  id: string
}


const LocalTable: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel,serialNumber } = props;
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
  return (
    <Modal
      destroyOnClose
      title="地磁检测器本地存储"
      visible={modalVisible}
      // onCancel={() => onCancel()}
      onCancel={() => {
        onCancel();
      }}
      footer={null}
    >
      <ProTable<DataType>
        key='LocalTableProTable1'
        columns={columns}
        request={(params, sorter, filter) => queryLocalData({ ...params, sorter, filter,serialNumber})}
        // dataSource={tableListDataSource}
        rowKey='id'
        headerTitle={`${serialNumber}本地数据`}
        pagination={{
          showQuickJumper: true,
        }}
        search={false}
        // search={{
        //   optionRender: false,
        //   collapseRender: false,
        //   collapsed:false
        // }}
        dateFormatter="string"
      />
    </Modal>
  );
};

export default LocalTable;
