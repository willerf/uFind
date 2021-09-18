
import React, { useState } from 'react';
import { Modal, Button, Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function NewItem() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  function showModal() {
    setVisible(true);
  };

  function handleOk() {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  function handleCancel() {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} size={"large"}>
        Enter Lost Item
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>

        <Space direction="vertical">
          <Input size="large" placeholder="Enter your name" prefix={<UserOutlined />} />
          <Input size="large" placeholder="Enter your email" prefix={<UserOutlined />} />

          If you are able to locate the name of the owner, please enter it below.
          <Input size="large" placeholder="Enter name of owner" prefix={<UserOutlined />} />
          <Input size="large" placeholder="Title/description of item" prefix={<UserOutlined />} />
          <Input size="large" placeholder="Location of item (e.g. SLC front desk, with me, etc.)" prefix={<UserOutlined />} />

          <input id="image" type="file" />
        </Space>


      </Modal>
    </>
  );
};

export default NewItem;