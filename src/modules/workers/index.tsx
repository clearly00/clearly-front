import { Card, Col, Layout, PageHeader, Row } from "antd";
import "../../styles/App.less";
import { Table } from "antd";

const { Header, Content, Footer } = Layout;

export function Workers() {
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

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        backIcon={null}
        title="Workers"
        subTitle="View & Manage Celery Workers"
      />
      <Content style={{ padding: "16px 50px" }}>
        <div className="site-layout-content">
          <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
        </div>
      </Content>
    </>
  );
}
