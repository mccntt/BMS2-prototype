import {
  Layout,
  Menu,
  Breadcrumb,
  Badge,
  List,
  Col,
  Row,
  Typography,
  Button,
  Tooltip,
  Space,
  Input,
  Divider
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SyncOutlined
} from "@ant-design/icons";
import React from "react";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
      </Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          style={{ height: "100%vh" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>BMS2</Breadcrumb.Item>
            <Breadcrumb.Item>Quotation</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <ListPage />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

const QList = () => {
  const data = [
    {
      id: 0,
      number: "HKQ20200826-06-23",
      amount: "100.00",
      currency: "USD",
      sales: "Arias"
    },
    {
      id: 1,
      number: "HKQ20200826-06-22",
      amount: "1012320.31230",
      currency: "HKD",
      sales: "Arias"
    },
    {
      id: 2,
      number: "HKQ20200826-06-21",
      amount: "52300.00",
      currency: "CNY",
      sales: "Arias"
    },
    {
      id: 3,
      number: "HKQ20200826-06-20",
      amount: "9900.00",
      currency: "USD",
      sales: "Arias"
    },
    {
      id: 4,
      number: "HKQ20200826-06-19",
      amount: "1100.00",
      currency: "HKD"
    },
    {
      id: 5,
      number: "HKQ20200826-06-18",
      amount: "100.00",
      currency: "HKD",
      sales: "Arias"
    },
    {
      id: 6,
      number: "HKQ20200826-06-17",
      amount: "90.00",
      currency: "CNY",
      sales: "Arias"
    },
    {
      id: 7,
      number: "HKQ20200826-06-18",
      amount: "9.00",
      currency: "CNY",
      sales: "Arias"
    }
  ];

  const renderItem = (item) => {
    const parser = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: item.currency
    });
    let status;
    if (item.id % 3 === 0) {
      status = <Badge color="green" text="Approved" />;
    } else if (item.id % 5 === 0) {
      status = <Badge color="red" text="Rejected" />;
    } else {
      status = <Badge color="#808080" text="Draft" />;
    }

    return (
      // eslint-disable-next-line
      <List.Item actions={[<a key="edit">edit</a>]}>
        <List.Item.Meta
        // eslint-disable-next-line
          title={<a>{item.number}</a>}
          description={`Amount: ${parser.format(item.amount)} · Sales: ${
            item.sales
          }`}
        />
        <div>{status}</div>
      </List.Item>
    );
  };

  return (
    <List
      size="large"
      dataSource={data}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3
      }}
      renderItem={renderItem}
    ></List>
  );
};

const ListPage = () => {
  return (
    <>
      <Row justify="space-between">
        <Col span={8}>
          <Title level={3}> Quotation List </Title>
        </Col>
        <Col span={8}>
          <Space style={{ float: "right" }}>
            <Tooltip title="refresh">
              <Button icon={<SyncOutlined />} />
            </Tooltip>
            <Button type="primary">Create</Button>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Input />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <QList />
        </Col>
      </Row>
    </>
  );
};
