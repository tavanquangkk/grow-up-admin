import { Button, Card, Col, Row, Typography, Space } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import { UserOutlined, BookOutlined, ToolOutlined } from '@ant-design/icons';
import DashboardStats from '../DashboardStats';

const { Title, Paragraph } = Typography;

const HomeContent = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Title level={2} style={{ marginBottom: 24 }}>ダッシュボード</Title>
            
            {/* 統計情報カード */}
            <DashboardStats />

            <div style={{ marginTop: 48 }}>
                <Card bordered={false} style={{ boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)' }}>
                    <div style={{ textAlign: 'center', padding: '24px 0' }}>
                        <Title level={3} style={{ marginBottom: 16 }}>
                            🌱 システム管理
                        </Title>
                        <Paragraph type="secondary" style={{ fontSize: 16, maxWidth: 600, margin: '0 auto 32px' }}>
                            管理者として、ユーザー、ワークショップ、スキルを効率的に管理できます。<br />
                            各機能へは以下のボタンから素早くアクセスできます。
                        </Paragraph>
                        
                        <Space size="large" wrap justify="center">
                            <Button
                                type="primary"
                                size="large"
                                icon={<UserOutlined />}
                                onClick={() => navigate("/users")}
                                style={{ height: 48, paddingLeft: 32, paddingRight: 32 }}
                            >
                                ユーザー管理
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                icon={<BookOutlined />}
                                onClick={() => navigate("/workshops")}
                                style={{ height: 48, paddingLeft: 32, paddingRight: 32 }}
                            >
                                ワークショップ管理
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                icon={<ToolOutlined />}
                                onClick={() => navigate("/skills")}
                                style={{ height: 48, paddingLeft: 32, paddingRight: 32 }}
                            >
                                スキル管理
                            </Button>
                        </Space>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default HomeContent;