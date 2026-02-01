import { Button, Popconfirm } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { logout } from "../../api/auth_api";

const Header = () => {
    const handleLogout = () => {
        logout();
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '100%',
            padding: '0 24px'
        }}>
            <Popconfirm
                title="ログアウトしますか？"
                description="作業中のデータが保存されていることを確認してください 💫"
                onConfirm={handleLogout}
                okText="ログアウト"
                cancelText="キャンセル"
            >
                <Button
                    type="text"
                    icon={<LogoutOutlined />}
                    style={{ fontSize: '14px' }}
                >
                    ログアウト
                </Button>
            </Popconfirm>
        </div>
    );
}
export default Header;