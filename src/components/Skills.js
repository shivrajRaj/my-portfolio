import { Row, Col, Card, Typography, Tag } from "antd";

const { Title } = Typography;

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f3e8ff, #ffffff)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={2} style={{ color: "#1890ff" }}>
          🛠️ Skills
        </Title>
      </div>

      <Row gutter={[32, 32]} justify="center"> {/* increased gutter for spacing */}
        {/* Frontend */}
        <Col xs={24} md={12}>
          <Card
            title="Frontend"
            bordered={false}
            style={{
              borderRadius: "16px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              textAlign: "center",
              marginBottom: "20px", // extra gap
            }}
          >
          <Tag 
  color="blue" 
  style={{ fontSize: "14px", padding: "6px 12px", margin: "6px" }}
>
  React.js
</Tag>
<Tag 
  color="geekblue" 
  style={{ fontSize: "14px", padding: "6px 12px", margin: "6px" }}
>
  React Native
</Tag>
<Tag 
  color="cyan" 
  style={{ fontSize: "14px", padding: "6px 12px", margin: "6px" }}
>
  TypeScript
</Tag>
<Tag 
  color="purple" 
  style={{ fontSize: "14px", padding: "6px 12px", margin: "6px" }}
>
  Flutter
</Tag>

          </Card>
        </Col>

        {/* Backend */}
        <Col xs={24} md={12}>
          <Card
            title="Backend"
            bordered={false}
            style={{
              borderRadius: "16px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <Tag color="magenta" style={{ fontSize: "14px", padding: "6px 12px" }}>
              Node.js
            </Tag>
            <Tag color="volcano" style={{ fontSize: "14px", padding: "6px 12px" }}>
              Express.js
            </Tag>
          </Card>
        </Col>

        {/* Database */}
        <Col xs={24} md={12}>
          <Card
            title="Database"
            bordered={false}
            style={{
              borderRadius: "16px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <Tag color="gold" style={{ fontSize: "14px", padding: "6px 12px" }}>
              SQL
            </Tag>
            <Tag color="green" style={{ fontSize: "14px", padding: "6px 12px" }}>
              PostgreSQL
            </Tag>
          </Card>
        </Col>

        {/* Tools */}
        <Col xs={24} md={12}>
          <Card
            title="Other Tools"
            bordered={false}
            style={{
              borderRadius: "16px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <Tag color="red" style={{ fontSize: "14px", padding: "6px 12px" }}>
              Git
            </Tag>
            <Tag color="blue" style={{ fontSize: "14px", padding: "6px 12px" }}>
              Firebase
            </Tag>
          </Card>
        </Col>
      </Row>
    </section>
  );
}
