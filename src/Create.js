import React from "react";
import {
  Row,
  Col,
  Typography,
  Form,
  Space,
  AutoComplete,
  Input,
  Divider,
  Radio,
  Button,
  Layout,
  Breadcrumb,
} from "antd";
import { MailOutlined, BankOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";

const { Title, Text } = Typography;
const { Content } = Layout;

const companies = [
  {
    name: "Hong Kong Medical Association",
    address: "6 West Gohome Avenue",
  },
  {
    name: "Hong Kong Physical Association",
    address: "room 201，building No.3,No.12，nan jing road，BaoShan District",
  },
  {
    name: "Rosewood Hotel Group",
    address: "Hong Kong Medical Association",
  },
  {
    name: "InnoPage",
    address: "6 East Changan Avenue PeKing",
  },
  {
    name: "Beijing Electron Co. Ltd Xian branch",
    address: "6 East Changan Avenue PeKing",
  },
  {
    name: "MasterConcept Hangzhou",
    address: "CityCenter, Yan'an Road",
  },
];

const contacts = [
  {
    name: "Arias",
    email: "arias.han@hkmci.com",
    company: "MasterConcept Hangzhou",
  },
  {
    name: "czp",
    email: "ZP.chen@hkmci.com",
    company: "MasterConcept Hangzhou",
  },
];

export const Create = () => {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>BMS2</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/quotations">Quotation</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Create</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Row type="flex">
          <Col span={8} offset={8}>
            <Title level={3}>Create New Quotation</Title>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12} offset={2}>
            <ChangeBasicInfoForm text="Continue" />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export const ChangeBasicInfoForm = ({ text }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const renderCompany = (company) => {
    return {
      value: company.name,
      label: (
        <Space direction="vertical" size="small">
          <Text>{company.name}</Text>
          <Text type="secondary">
            <Space>
              <BankOutlined />
              {company.address}
            </Space>
          </Text>
        </Space>
      ),
    };
  };

  const renderContact = (contact) => {
    return {
      value: contact.name,
      label: (
        <Space direction="vertical">
          <Text>{contact.name}</Text>
          <Text type="secondary">
            <Space size="small">
              <MailOutlined />
              {contact.email}
            </Space>
          </Text>
        </Space>
      ),
    };
  };
  return (
    <Form
      {...layout}
      name="create-quotation"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Company"
        name="companyName"
        rules={[{ required: true }]}
      >
        <AutoComplete options={companies.map(renderCompany)}>
          <Input placeholder="company" />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        label="Contact"
        name="contactName"
        rules={[{ required: true }]}
      >
        <AutoComplete options={contacts.map(renderContact)}>
          <Input placeholder="contact" />
        </AutoComplete>
      </Form.Item>
      <Form.Item label="Currency" name="currency" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="USD">USD</Radio>
          <Radio value="CNY">CNY</Radio>
          <Radio value="HKD">HKD</Radio>
          <Radio value="NTD">NTD</Radio>
        </Radio.Group>
      </Form.Item>
      {/* <Form.Item {...tailLayout}>
        <Link to="/edit">
          <Button type="primary" htmlType="submit">
            {text}
          </Button>
        </Link> */}
      {/* </Form.Item> */}
    </Form>
  );
};

export const EditBase = () => {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>BMS2</Breadcrumb.Item>
        <Breadcrumb.Item>Quotation</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/edit">HKQ20200826-06-22 </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Row type="flex">
          <Col span={8} offset={8}>
            <Title level={3}>Edit Base Info</Title>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12} offset={2}>
            <ChangeBasicInfoForm text="Save" />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export const EditBaseWithCompanyCreation = () => {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>BMS2</Breadcrumb.Item>
        <Breadcrumb.Item>Quotation</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/edit">HKQ20200826-06-22 </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Row type="flex">
          <Col span={8} offset={8}>
            <Title level={3}>Edit Base Info</Title>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12} offset={2}>
            <ChangeBasicInfoForm text="Save" />
          </Col>
        </Row>
      </Content>
      <Modal
        title="Create Quotation"
        visible={true}
        onOk={() => {
          console.log("ok");
        }}
        onCancel={() => {
          console.log("cancel");
        }}
      ></Modal>
    </>
  );
};
