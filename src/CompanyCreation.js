import React, { useState } from "react";
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
  Descriptions,
  Badge,
  Table,
  Tooltip,
  Dropdown,
  Menu,
  Popconfirm,
  Drawer,
  Collapse,
} from "antd";
import { Link, useHistory } from "react-router-dom";
import {
  CopyOutlined,
  EditOutlined,
  MinusCircleOutlined,
  RollbackOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { List } from "antd/lib/form/Form";
import { ChangeBasicInfoForm } from "./Create";
import Modal from "antd/lib/modal/Modal";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Panel } = Collapse;

const products = [
  {
    name: "G Suite Basic",
    description:
      "* Google Mail (30GB per user)\n* Google Calendar\n* Google Drive\n* Google Hangout\n* Google+\n* Google Sites",
    price: 10100.0,
    qty: 100.0,
    unit: "User(s)",
  },
  {
    name: "G Suite Basic",
    description:
      "* Google Mail (30GB per user)\n* Google Calendar\n* Google Drive\n* Google Hangout\n* Google+\n* Google Sites",
    price: 10100.0,
    qty: 100.0,
    unit: "User(s)",
  },
  {
    name: "G Suite Basic",
    description:
      "* Google Mail (30GB per user)\n* Google Calendar\n* Google Drive\n* Google Hangout\n* Google+\n* Google Sites",
    price: 10100.0,
    qty: 100.0,
    unit: "User(s)",
  },
];

const terms = [
  "We understand and accept that the period of subscription is a minimum of four (4) calendar months.",
  "Early Termination: Non-refundable for remaining unused contractual months.; and",
  "Costs incurred from any extension of the project scope or change requests will need to be separately negotiated.",
  "All work to be carried out during normal office hour, 9am-6pm, Monday-Friday.",
  "The Client shall bear all costs related to remittance to us, including but not limited to withholding tax, bank charges and fees.",
  "We acknowledge that we have read and understood the above terms and conditions.",
  "We confirm that all information given by us in connection with this application is true and correct.",
  "After the Initial Term, this Agreement shall be deemed renewed automatically each year for an additional one (1) year period (an “Automatic Renewal Term”) unless this Agreement is terminated in accordance with one-month advance notice.",
  "Any outstanding balance over the credit term granted to you is interest bearing at 12% p.a.",
  "The above-mentioned invoice amount is considered true and correct if no disputes are received within 7 days from the date of service delivery.",
  "Price quoted above assume all delivery and installation are in HK and within normal office Hour.",
];

export const EditWithCompanyCreation = () => {
  const history = useHistory();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const contactLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const contactLayoutWithoutLabel = {
    wrapperCol: { span: 24 },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>BMS2</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/BMS2-prototype/quotations">Quotation</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>HKQ20200826-06-22</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Row justify="space-between">
          <Col span={8}>
            <Title level={3}>HKQ20200826-06-22</Title>
          </Col>
          <Col span={8}>
            <Space style={{ float: "right" }}>
              <Button>Preview</Button>
              <Button disabled>Submit</Button>
              <Button type="primary">Save</Button>
              <Tooltip>
                <Popconfirm title="confirm copy?">
                  <Button icon={<CopyOutlined />}></Button>
                </Popconfirm>
              </Tooltip>
              <Tooltip title="Back to List">
                <Link to="/BMS2-prototype/quotations">
                  <Button icon={<RollbackOutlined />}></Button>
                </Link>
              </Tooltip>
            </Space>
          </Col>
        </Row>
        <Divider orientation="left">
          <Title level={5}>
            <Space>
              Base Info
              <Tooltip title="Change customer info">
                <EditOutlined />
              </Tooltip>
            </Space>
          </Title>
        </Divider>
        <Row>
          <Col span={24}>
            <Descriptions
            //   title={
            // <Title level={5}>
            //   <Space>
            //     Base Info
            //     <Link to="/editBase">
            //       <EditOutlined />
            //     </Link>
            //   </Space>
            // </Title>
            //   }
            >
              <Descriptions.Item label="Company Name">
                Hong Kong Medical Association
              </Descriptions.Item>
              <Descriptions.Item label="Address" span={2}>
                6 West Gohome Avenue
              </Descriptions.Item>
              <Descriptions.Item label="Attention"> Arias </Descriptions.Item>
              <Descriptions.Item label="Email">
                arias.han@hkmci.com
              </Descriptions.Item>
              <Descriptions.Item label="Sales"> czp </Descriptions.Item>
              <Descriptions.Item label="Currency">USD</Descriptions.Item>
              <Descriptions.Item label="Language">English</Descriptions.Item>
              <Descriptions.Item label="Status">
                <Badge color="green" text="Approved" />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Divider orientation="left">
          <Title level={5}>Products</Title>
        </Divider>
        <Row>
          <Col span={24}>
            <ProductTable />
          </Col>
        </Row>
        <Divider orientation="left">
          <Title level={5}>Terms & Conditions</Title>
        </Divider>
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Row>
            <Col span={8}>
              <Text>Payment Terms:</Text>
            </Col>
            <Col span={8}>
              <Radio.Group>
                <Radio value={1}>10 days</Radio>
                <Radio value={2}>14 days</Radio>
                <Radio value={3}>30 days</Radio>
                <Radio value={4}>45 days</Radio>
                <Radio value={4}>60 days</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Text>Validity:</Text>
            </Col>
            <Col span={8}>
              <Radio.Group>
                <Radio value={2}>14 days</Radio>
                <Radio value={3}>30 days</Radio>
                <Radio value={4}>60 days</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <Space direction="vertical">
                <Text>Contents:</Text>
                <Space direction="vertical" style={{ width: "100%" }}>
                  {terms.map((it, index) => {
                    return (
                      <Space key={`terms-${index}`} align="start">
                        <Text>{index + 1}.</Text>
                        <Input.TextArea
                          autosize
                          value={it}
                          style={{ resize: "none", width: "42vw" }}
                        />
                        <MinusCircleOutlined />
                      </Space>
                    );
                  })}
                  <Button type="dashed" disabled style={{ width: "100%" }}>
                    Add Terms
                  </Button>
                </Space>
              </Space>
            </Col>
          </Row>
        </Space>
        <Drawer
          title="Edit Base Info"
          onClose={() => {
            // setDisplayDrawer(false);
            console.log("drawer closed");
          }}
          onOk={() => {
            // setDisplayDrawer(false);
            console.log("drawer ok");
          }}
          width={640}
          visible={true}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button
                onClick={() => {
                  //   setDisplayDrawer(false);
                  console.log("drawer closed");
                }}
                style={{ marginRight: 8 }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  //   setDisplayDrawer(false);
                  console.log("drawer ok");
                }}
                type="primary"
              >
                Save
              </Button>
            </div>
          }
        >
          <Row>
            <Col span={20}>
              <ChangeBasicInfoForm text="Save" />
            </Col>
          </Row>
        </Drawer>
        <Modal
          visible={true}
          title="Create Company Profile"
          onOk={() => {
            console.log("ok");
          }}
        >
          <Form
            {...layout}
            name="basic"
            onFinish={() => {
              console.log("finished");
            }}
            onFinishFailed={() => {
              console.log("finish failed");
            }}
            initialValues={{
              addresses: [""],
              contacts: [
                {
                  name: "",
                  email: "",
                },
              ],
            }}
          >
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Company Domain"
              name="companyDomain"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.List name="addresses">
              {(fields, { add, remove }, { errors }) => {
                return (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...(index === 0 ? layout : formItemLayoutWithOutLabel)}
                        label={index === 0 ? "Company Addresses" : ""}
                        key={field.key}
                      >
                        <Space style={{ width: "100%" }}>
                          <Form.Item {...field} noStyle>
                            <Input placeholder="address" />
                          </Form.Item>
                          {fields.length > 1 && index !== 0 ? (
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                            />
                          ) : null}
                          {index === 0 ? (
                            <Form.Item noStyle>
                              <Button
                                type="dashed"
                                onClick={() => add()}
                                // style={{ width: "60%" }}
                                icon={<PlusOutlined />}
                              />
                            </Form.Item>
                          ) : null}
                        </Space>
                      </Form.Item>
                    ))}
                  </>
                );
              }}
            </Form.List>
            <Collapse bordered={false} ghost>
              <Panel header="Contacts">
                <Form.List name="contacts">
                  {(fields, { add, remove }, { errors }) => {
                    return (
                      <>
                        {fields.map((field, index) => (
                          <Form.Item
                            {...layout}
                            // label={index === 0 ? "Contacts" : ""}
                            key={field.key}
                          >
                            <Space style={{ width: "100%" }}>
                              <Form.Item
                                {...field}
                                {...contactLayout}
                                name={[field.name, "name"]}
                                fieldKey={[field.fieldKey, "name"]}
                                noStyle
                              >
                                <Input placeholder="name" />
                              </Form.Item>
                              <Form.Item
                                {...field}
                                name={[field.name, "email"]}
                                fieldKey={[field.fieldKey, "email"]}
                                noStyle
                              >
                                <Input placeholder="email" />
                              </Form.Item>
                              {fields.length > 1 && index !== 0 ? (
                                <MinusCircleOutlined
                                  className="dynamic-delete-button"
                                  onClick={() => remove(field.name)}
                                />
                              ) : null}
                              {index === 0 ? (
                                <Form.Item noStyle>
                                  <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    // style={{ width: "60%" }}
                                    icon={<PlusOutlined />}
                                  />
                                </Form.Item>
                              ) : null}
                            </Space>
                          </Form.Item>
                        ))}
                      </>
                    );
                  }}
                </Form.List>
              </Panel>
            </Collapse>
          </Form>
        </Modal>
      </Content>
    </>
  );
};

const ProductTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "description",
      render: (description, item, index) => (
        <>
          {item.name}
          <br />
          <Input.TextArea
            autoSize={{ minRows: 1 }}
            allowClear={false}
            spellCheck={false}
            value={description}
            className="item-table-description"
          />
        </>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price, _, index) => <Input addonBefore={"$"} value={price} />,
    },
    {
      title: "QTY",
      dataIndex: "qty",
      render: (qty) => <Input value={qty} />,
    },
    {
      title: "Unit",
      dataIndex: "unit",
    },
    {
      title: "Sub Total",
      dataIndex: "price",
      render: (price, item) => (
        <>
          {"$"}
          {price * item.qty}
        </>
      ),
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_) => {
        return <a>Delete</a>;
      },
    },
  ];

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Table columns={columns} dataSource={products} pagination={false} />
      <Button type="dashed" style={{ width: "100%" }}>
        Add New Product
      </Button>
    </Space>
  );
};
