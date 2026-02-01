import React, { useState } from 'react'
import WorkshopTable from '../layout/WorkshopTable'
import { Button, Modal, Typography, Flex } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Title } = Typography;

const WorkshopContent = () => {
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
                <Title level={3} style={{ margin: 0 }}>勉強会一覧</Title>
                <Button onClick={showModal} type='primary' icon={<PlusOutlined />}>勉強会作成</Button>
            </Flex>
            <WorkshopTable />
            <Modal
                title="勉強会作成"
                closable={true}
                open={isShow}
                onOk={closeModal}
                onCancel={closeModal}
            ></Modal>
        </div>
    )
}

export default WorkshopContent