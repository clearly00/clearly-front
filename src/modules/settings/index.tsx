import { Divider, Layout, PageHeader } from "antd";
import "../../styles/App.less";
import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

const { Option } = Select;

const { Header, Content, Footer } = Layout;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export function Settings() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        backIcon={null}
        title="Settings"
        subTitle="Control how Clearly should behave"
      />
      <Content style={{ padding: "16px 0 0 0" }}>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <div className="site-layout-content">
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  residence: ["zhejiang", "hangzhou", "xihu"],
                  prefix: "86",
                }}
                scrollToFirstError
              >
                <Row>
                  <Col span={8}>Estado Padrão</Col>
                  <Col span={16}>
                    <Form.Item
                      name="intro"
                      rules={[{ required: true, message: "Please input Intro" }]}
                    >
                      <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />

                <Row>
                  <Col span={8}>Estado Padrão</Col>
                  <Col span={16}>
                    <Form.Item
                      name="gender"
                      rules={[{ required: true, message: "Please select gender!" }]}
                    >
                      <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />

                <Row>
                  <Col span={8}>Estado Padrão</Col>
                  <Col span={16}>
                    <Form.Item
                      name="gender"
                      rules={[{ required: true, message: "Please select gender!" }]}
                    >
                      <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />

                <Row>
                  <Col span={8}>Estado Padrão</Col>
                  <Col span={16}>
                    <Form.Item
                      name="gender"
                      rules={[{ required: true, message: "Please select gender!" }]}
                    >
                      <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />

                <Row>
                  <Col span={8}>Estado Padrão</Col>
                  <Col span={16}>
                    <Form.Item
                      name="gender"
                      rules={[{ required: true, message: "Please select gender!" }]}
                    >
                      <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />

                <Row>
                  <Col span={8}>Estado Padrão</Col>
                  <Col span={16}>
                    <Form.Item extra="We must make sure that your are a human.">
                      <Row gutter={8}>
                        <Col span={12}>
                          <Form.Item
                            name="captcha"
                            noStyle
                            rules={[
                              { required: true, message: "Please input the captcha you got!" },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Button>Get captcha</Button>
                        </Col>
                      </Row>
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />

                <Row>
                  <Col span={8}>Estado Padrão</Col>
                  <Col span={16}>
                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                      style={{
                        marginLeft: "0px",
                        display: "flex",
                        float: "left",
                        paddingLeft: "0px",
                      }}
                      rules={[
                        {
                          validator: (_, value) =>
                            value
                              ? Promise.resolve()
                              : Promise.reject(new Error("Should accept agreement")),
                        },
                      ]}
                      {...tailFormItemLayout}
                    >
                      <Checkbox>I have read the agreement</Checkbox>
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />

                <Row>
                  <Col span={24}>
                    <Form.Item
                      {...tailFormItemLayout}
                      style={{
                        marginRight: "0px",
                        display: "flex",
                        float: "right",
                        paddingLeft: "0px",
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Register
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </>
  );
}
