import { Layout, ConfigProvider, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";
import LeftSideMenu from "../components/layout/LeftSideMenu";
import HeaderComponent from "../components/layout/Header";
import FooterComponent from "../components/layout/Footer";
import "../assets/styles/app.css";

const { Header, Content, Footer, Sider } = Layout;

// New Layout Component using Ant Design Layout
const AppLayout = ({ isDarkMode, setIsDarkMode }) => {
    const { token } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);

    // Context state placeholders
    const [userNum, setUserNum] = useState(10);
    const [workshopNum, setWorkshopNum] = useState(0);
    const [skillNum, setSkillNum] = useState(0);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                theme={isDarkMode ? 'dark' : 'light'}
                width={260}
                style={{
                    background: token.colorBgContainer,
                    borderRight: `1px solid ${token.colorBorderSecondary}`,
                    boxShadow: "2px 0 8px 0 rgba(29,35,41,.05)",
                    zIndex: 10
                }}
            >
               <LeftSideMenu 
                    isDarkMode={isDarkMode} 
                    setIsDarkMode={setIsDarkMode} 
                    setUserNum={setUserNum}
                    collapsed={collapsed}
               />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: token.colorBgContainer, height: 'auto', lineHeight: 'normal' }}>
                    <HeaderComponent />
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: token.colorBgContainer, borderRadius: token.borderRadiusLG }}>
                        <Outlet context={[userNum, workshopNum, skillNum]} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', background: 'transparent' }}>
                    <FooterComponent />
                </Footer>
            </Layout>
        </Layout>
    );
};

const App = () => {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                token: {
                    colorPrimary: '#00b96b', // Modern Green
                    borderRadius: 8,
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                },
                components: {
                    Layout: {
                        bodyBg: isDarkMode ? '#141414' : '#f5f7fa',
                        headerBg: isDarkMode ? '#141414' : '#ffffff',
                    }
                }
            }}
        >
            <AppLayout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        </ConfigProvider>
    );
};

export default App;