import { Card, Col, Layout, PageHeader, Row, Statistic } from "antd";
import { Chart } from "../../components/charts";
import "../../styles/App.less";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

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
          <Row gutter={[16, 16]} style={{ marginBottom: "50px" }}>
            <Col span={6}>
              <Card title="Active Workers">
                {" "}
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Success Tasks">
                {" "}
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Failed Tasks">
                {" "}
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="On Queue">
                {" "}
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card title="Active Workers">
                <Chart />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Active Workers">
                <Chart />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Active Workers">
                <Chart />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Active Workers">
                <Chart />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
}
