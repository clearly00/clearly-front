import { Layout, PageHeader } from "antd";
import "../../styles/App.less";

const { Header, Content, Footer } = Layout;

export function Settings() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        backIcon={null}
        title="Settings"
        subTitle="Control how Clearly should behave"
      />
      <Content style={{ padding: "16px 50px" }}>
        <div className="site-layout-content">This is the Dashboard</div>
      </Content>
    </>
  );
}
