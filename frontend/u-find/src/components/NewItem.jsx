
import React, { useState } from 'react';
import { Form, Modal, Button, Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import axios from 'axios'

function NewItem() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  function showModal() {
    setVisible(true);
  };

  function handleOk() {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 100);
  };

  function handleCancel() {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  function onFinish(values) {

    let data_packet = {
      description: values.description,
      status: values.status,
      finderName: values.finderName,
      finderEmail: values.finderEmail,
      uploadDate: new Date(),
      owner: values.owner,
    }

    axios.post('http://localhost:3001/newItem', data_packet).then(res => {
      console.log(res);
    });
  }

  return (
    <>
      <Button type="primary" onClick={showModal} size={"large"}>
        Enter Lost Item
      </Button>
      <Modal
        title="Enter Lost Item"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >

          <Form
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="finderName"
            >
              <Input size="large" placeholder="Enter your name" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="finderEmail"
            >
              <Input size="large" placeholder="Enter your email" prefix={<UserOutlined />} />
            </Form.Item>

            If you are able to locate the name of the owner, please enter it below.

            <Form.Item
              name="owner"
            >
            <Input size="large" placeholder="Enter name of owner" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="description"
            >
              <Input size="large" placeholder="Title/description of item" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="status"
            >
              <Input size="large" placeholder="Location of item (e.g. SLC front desk, with me, etc.)" prefix={<UserOutlined />} />
            </Form.Item>
            
            <input id="image" name="myFile" type="file" />

            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={handleOk} style={{marginTop: "20px"}}>
                Submit
              </Button>
            </Form.Item>
          </Form>
      </Modal>
    </>
  );
};

export default NewItem;