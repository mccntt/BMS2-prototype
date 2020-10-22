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
  Descriptions,
  Badge,
  Table,
  Tooltip,
} from "antd";
import { Link, useHistory } from "react-router-dom";
import {
  EditOutlined,
  MinusCircleOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { List } from "antd/lib/form/Form";

const { Title, Text } = Typography;
const { Content } = Layout;

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

export const Edit = () => {
  const history = useHistory();
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>BMS2</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/quotations">Quotation</Link>
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
              <Button type="primary">Save</Button>
              <Button disabled>Submit</Button>
              <Tooltip title="Back to List">
                <Link to="/quotations">
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
              <Link to="/editBase">
                <EditOutlined />
              </Link>
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
