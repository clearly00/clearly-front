import { Layout, Menu, Breadcrumb, PageHeader } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { Broker } from "./modules/broker";
import { Dashboard } from "./modules/dashboard";
import { Settings } from "./modules/settings";
import { Tasks } from "./modules/tasks";
import { Workers } from "./modules/workers";
import "./styles/App.less";

const { Header, Content, Footer } = Layout;

export function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/tasks">Tasks</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/workers">Workers</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/broker">Broker</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="https://github.com/clearly00/clearly-front">Docs</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="https://github.com/clearly00/clearly-front">Github</Link>
          </Menu.Item>
        </Menu>
        <span />
      </Header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="workers" element={<Workers />} />
        <Route path="settings" element={<Settings />} />
        <Route path="broker" element={<Broker />} />
      </Routes>

      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}
