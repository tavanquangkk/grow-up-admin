import { GroupOutlined, HomeOutlined, SettingOutlined, ThunderboltOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import logoUrl from "../../assets/icons/logo.png";
import { Link, useLocation } from "react-router";

const LeftSideMenu = ({ setIsDarkMode, isDarkMode, collapsed }) => {
  const location = useLocation();

  const darkModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === '/') return ['home'];
    if (path.startsWith('/users')) return ['user'];
    if (path.startsWith('/workshops')) return ['workshop'];
    if (path.startsWith('/skills')) return ['skill'];
    return [];
  };

  const items = [
    {
      label: <Link to="/">ホーム</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/users">ユーザー</Link>,
      key: 'user',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/workshops">勉強会</Link>,
      key: 'workshop',
      icon: <GroupOutlined />,
    },
    {
      label: <Link to="/skills">スキル</Link>,
      key: 'skill',
      icon: <ThunderboltOutlined />,
    },
    {
      label: 'ダークモード',
      key: 'setting',
      icon: isDarkMode ? <span style={{ fontSize: '16px' }}>☀️</span> : <span style={{ fontSize: '16px' }}>🌙</span>,
      onClick: darkModeChange,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ 
          height: 64, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          margin: '0 16px 16px 16px'
      }}>
         <img 
            src={logoUrl} 
            alt="Logo" 
            style={{ 
                height: 32, 
                width: 'auto',
                maxWidth: collapsed ? 32 : '100%',
                transition: 'all 0.2s'
            }} 
         />
         {!collapsed && (
             <span style={{ 
                 marginLeft: 12, 
                 fontSize: 16, 
                 fontWeight: 600, 
                 color: 'var(--ant-color-text)',
                 whiteSpace: 'nowrap',
                 overflow: 'hidden'
             }}>
                 GrowUp
             </span>
         )}
      </div>
      
      <Menu
        mode="inline"
        selectedKeys={getSelectedKey()}
        items={items}
        style={{ borderRight: 0, background: 'transparent' }}
      />
    </div>
  );
};
export default LeftSideMenu;