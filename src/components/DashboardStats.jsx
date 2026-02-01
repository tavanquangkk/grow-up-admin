import React, { useState, useEffect, useRef } from 'react';
import { Card, Col, Row, Statistic, Spin, Alert, Button, Switch, Space, theme } from 'antd';
import { ReloadOutlined, UserOutlined, CalendarOutlined, ToolOutlined, ClockCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { fetchAllStats } from '../api/stats_api';
import { useNavigate } from 'react-router';

const DashboardStats = () => {
    const navigate = useNavigate();
    const { token } = theme.useToken();
    const [stats, setStats] = useState({
        userCount: 0,
        workshopCount: 0,
        skillCount: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);
    const [autoRefresh, setAutoRefresh] = useState(false);
    const intervalRef = useRef(null);

    const AUTO_REFRESH_INTERVAL = 30000;

    const fetchStats = async () => {
        setLoading(true);
        setError(null);
        try {
            const statsData = await fetchAllStats();
            setStats({
                userCount: statsData.userCount || 0,
                workshopCount: statsData.workshopCount || 0,
                skillCount: statsData.skillCount || 0
            });
            setLastUpdated(new Date());
        } catch (error) {
            console.error('Error fetching stats:', error);
            setError('統計データの取得に失敗しました。');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    useEffect(() => {
        if (autoRefresh) {
            intervalRef.current = setInterval(fetchStats, AUTO_REFRESH_INTERVAL);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [autoRefresh]);

    if (error && !loading) {
        return (
            <Alert
                message="エラー"
                description={error}
                type="error"
                showIcon
                action={
                    <Button size="small" onClick={fetchStats} icon={<ReloadOutlined />}>
                        再試行
                    </Button>
                }
                style={{ marginBottom: 24 }}
            />
        );
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
                <Space>
                    {lastUpdated && (
                        <span style={{ fontSize: 12, color: token.colorTextSecondary }}>
                            <ClockCircleOutlined style={{ marginRight: 4 }} />
                            最終更新: {lastUpdated.toLocaleTimeString('ja-JP')}
                        </span>
                    )}
                    <Button
                        type="text"
                        icon={<ReloadOutlined />}
                        onClick={fetchStats}
                        loading={loading}
                        size="small"
                    />
                    <Space size="small">
                        <span style={{ fontSize: 12 }}>自動更新</span>
                        <Switch
                            checked={autoRefresh}
                            onChange={setAutoRefresh}
                            size="small"
                        />
                    </Space>
                </Space>
            </div>

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={8}>
                    <Card bordered={false} hoverable>
                        <Spin spinning={loading}>
                            <Statistic
                                title="登録ユーザー"
                                value={stats.userCount}
                                prefix={<UserOutlined style={{ color: token.colorPrimary }} />}
                                suffix="人"
                            />
                            <Button 
                                type="link" 
                                size="small" 
                                style={{ padding: 0, marginTop: 8 }} 
                                onClick={() => navigate("/users")}
                            >
                                詳細 <ArrowRightOutlined />
                            </Button>
                        </Spin>
                    </Card>
                </Col>

                <Col xs={24} sm={8}>
                    <Card bordered={false} hoverable>
                        <Spin spinning={loading}>
                            <Statistic
                                title="ワークショップ"
                                value={stats.workshopCount}
                                prefix={<CalendarOutlined style={{ color: token.colorPrimary }} />}
                                suffix="件"
                            />
                            <Button 
                                type="link" 
                                size="small" 
                                style={{ padding: 0, marginTop: 8 }} 
                                onClick={() => navigate("/workshops")}
                            >
                                詳細 <ArrowRightOutlined />
                            </Button>
                        </Spin>
                    </Card>
                </Col>

                <Col xs={24} sm={8}>
                    <Card bordered={false} hoverable>
                        <Spin spinning={loading}>
                            <Statistic
                                title="登録スキル"
                                value={stats.skillCount}
                                prefix={<ToolOutlined style={{ color: token.colorPrimary }} />}
                                suffix="個"
                            />
                            <Button 
                                type="link" 
                                size="small" 
                                style={{ padding: 0, marginTop: 8 }} 
                                onClick={() => navigate("/skills")}
                            >
                                詳細 <ArrowRightOutlined />
                            </Button>
                        </Spin>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DashboardStats;