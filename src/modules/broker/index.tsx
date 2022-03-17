import { Card, Col, Layout, PageHeader, Row } from "antd";
import "../../styles/App.less";

const { Header, Content, Footer } = Layout;

export function Broker() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        backIcon={null}
        title="Broker"
        subTitle="Broker & Backend Results"
      />
      <Content style={{ padding: "16px 50px" }}>
        <div className="site-layout-content">
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card title="Active Workers">Active Workers</Card>
            </Col>
            <Col span={6}>
              <Card title="Success Tasks">Success Tasks</Card>
            </Col>
            <Col span={6}>
              <Card title="Failed Tasks">Failed Tasks</Card>
            </Col>
            <Col span={6}>
              <Card title="On Queue">On Queue</Card>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
}
