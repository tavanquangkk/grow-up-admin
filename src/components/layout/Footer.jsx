import React from 'react'
import { theme } from 'antd';

const Footer = () => {
  const { token } = theme.useToken();
  return (
    <div style={{ color: token.colorTextSecondary }}>
      ©2025 GrowUp Admin - Created by Newbie 2025
    </div>
  )
}

export default Footer;