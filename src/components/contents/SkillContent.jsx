import React, { useState } from 'react'
import SkillTable from '../layout/SkillTable'
import { Button, Modal, Typography, Flex } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Title } = Typography;

const SkillContent = () => {
    const [isShow, setIsShow] = useState(false);
    const showModal = () => {
        setIsShow(!isShow);
    }
    const closeModal = () => {
        setIsShow(false);
    }
    return (
        <div>
            <Flex justify="space-between" align="center" style={{ marginBottom: 24 }}>
                <Title level={3} style={{ margin: 0 }}>スキル一覧</Title>
                <Button onClick={showModal} type='primary' icon={<PlusOutlined />}>スキル作成</Button>
            </Flex>
            <SkillTable />
            <Modal
                title="スキル作成"
                closable={true}
                open={isShow}
                onOk={closeModal}
                onCancel={closeModal}
            ></Modal>
        </div>
    )
}

export default SkillContent