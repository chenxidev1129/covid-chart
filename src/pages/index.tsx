import { Space, Row, Col, Card, Button } from 'antd';
import BaseLayout from './baseLayout';
import { EditOutlined, EllipsisOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons';
import mainStyle from '../styles/main.module.css';

export default function Home() {
  return (
    <BaseLayout>
      <Space className={mainStyle.mainBody} direction='vertical' size={10} align='baseline'>
        <div className={mainStyle.headerSection}>
          <div>
            <h2>Page title</h2>
          </div>
          <div className={mainStyle.toolbarSection}>
            <Button icon={<SearchOutlined />}>
              Eport PDF
            </Button>
            <Button icon={<SearchOutlined />}>
              Notes
            </Button>
            <Button icon={<SearchOutlined />}>
              Filter
            </Button>
          </div>
        </div>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Chart Title"
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}>
              Card content
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Chart title"
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}>
              Card content
            </Card>
          </Col>
        </Row>
      </Space>
    </BaseLayout>
  )
}
