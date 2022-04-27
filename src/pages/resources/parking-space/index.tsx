// import {Col, Divider, Row} from "antd";
//
// const style = {background: '#0092ff', padding: '8px, 0'}

import {Layout, Menu, Breadcrumb, MenuProps} from 'antd';
const {Header, Footer, Content} = Layout;

import styles from './style.less';

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

export default () => {

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.siteLayoutContent}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      {/*<Layout >*/}
      {/*  <Header>*/}
      {/*    <div>log</div>*/}
      {/*    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
      {/*      {*/}
      {/*        new Array(15).fill(null).map((_, index) => {*/}
      {/*          return (<Menu.Item>{`nav${index}`}</Menu.Item>);*/}
      {/*        })*/}
      {/*      }*/}
      {/*    </Menu>*/}
      {/*  </Header>*/}
      {/*  <Content>*/}
      {/*    <Breadcrumb>*/}
      {/*      <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
      {/*      <Breadcrumb.Item>List</Breadcrumb.Item>*/}
      {/*      <Breadcrumb.Item>App</Breadcrumb.Item>*/}
      {/*    </Breadcrumb>*/}
      {/*    Content*/}
      {/*    /!*<iframe src='www.baidu.com' height={800} width={800}></iframe>*!/*/}
      {/*  </Content>*/}
      {/*  <Footer>*/}
      {/*    Ant Design ©2018 Created by Ant UED*/}
      {/*  </Footer>*/}
      {/*</Layout>*/}

    </>
  );
};
