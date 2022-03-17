import { Card, Col, Layout, PageHeader, Radio, Row, Select } from "antd";
import "../../styles/App.less";
import { Table } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
const { Option } = Select;

const { Header, Content, Footer } = Layout;

export function Tasks() {
  const columns = [
    { title: "Task Name", dataIndex: "name", key: "name", fixed: true },
    { title: "UUID", dataIndex: "age", key: "age", fixed: true },
    { title: "State", dataIndex: "address", key: "1" },
    { title: "Result", dataIndex: "address", key: "2" },
    { title: "Received", dataIndex: "address", key: "3" },
    { title: "Started", dataIndex: "address", key: "4" },
    { title: "Runtime", dataIndex: "address", key: "5" },
    { title: "Worker", dataIndex: "address", key: "6" },
    { title: "Actions", key: "operation", fixed: false, width: 100, render: () => <a>action</a> },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 40,
      address: "London Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 40,
      address: "London Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 40,
      address: "London Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 40,
      address: "London Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 40,
      address: "London Park",
    },
  ];

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        backIcon={null}
        title="Tasks"
        subTitle="All executed & queued tasks"
      />
      <Content style={{ padding: "16px 50px" }}>
        <div className="site-layout-content">
          <Form
            name="basic"
            layout="inline"
            labelCol={{ span: 16 }}
            wrapperCol={{ span: 42 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Form Layout" name="layout">
              <Radio.Group value={"inline"}>
                <Radio.Button value="horizontal">Horizontal</Radio.Button>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                <Radio.Button value="inline">Inline</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Task States">
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="select one country"
                defaultValue={["china"]}
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option value="china" label="China">
                  <div className="demo-option-label-item">China (中国)</div>
                </Option>
                <Option value="usa" label="USA">
                  <div className="demo-option-label-item">USA (美国)</div>
                </Option>
                <Option value="japan" label="Japan">
                  <div className="demo-option-label-item">Japan (日本)</div>
                </Option>
                <Option value="korea" label="Korea">
                  <div className="demo-option-label-item">Korea (韩国)</div>
                </Option>
              </Select>
            </Form.Item>

            <Form.Item label="Task States">
              <Select
                placeholder="select one country"
                defaultValue={["china"]}
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option value="china" label="China">
                  <div className="demo-option-label-item">China (中国)</div>
                </Option>
                <Option value="usa" label="USA">
                  <div className="demo-option-label-item">USA (美国)</div>
                </Option>
                <Option value="japan" label="Japan">
                  <div className="demo-option-label-item">Japan (日本)</div>
                </Option>
                <Option value="korea" label="Korea">
                  <div className="demo-option-label-item">Korea (韩国)</div>
                </Option>
              </Select>
            </Form.Item>
            <Form.Item label="Search">
              <Input />
            </Form.Item>
          </Form>

          <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
        </div>
      </Content>
    </>
  );
}
