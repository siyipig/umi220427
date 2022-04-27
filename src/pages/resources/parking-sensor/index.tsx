import {Space, Table, Tag} from "antd";
import {PageContainer} from "@ant-design/pro-layout";


const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['success','loser'],
    // tags:
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: '西湖区湖底公园1号',
    tags: ['hi','teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: '西湖区湖底公园5号',
    tags: ['basketball','teacher'],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => (<a>{text}</a>)
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: []) => (
      <>
        {
          tags.map((tag: string) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>
            )
          })
        }
      </>
    )
  },
  {
    title: 'Action',
    // dataIndex: 'action',
    key: 'action',
    render: (text: string | undefined, record: any) => {
      console.log('haha',record);

      return (
        <Space>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
        );

    }
  },
];

export default () => {

  return (
    <PageContainer>
      <Table dataSource={dataSource} columns={columns} />
    </PageContainer>

  );

};
