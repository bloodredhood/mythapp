import React from "react";
import {connect} from "react-redux";
import {createEssence} from "../../redux/essences/actions";
import {showAlert} from "../../redux/app/actions";
import {Button, Form, Input} from "antd";


const EssenceForm = (props) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  const submitHandler = values => {
    const {name, pantheon, image, text} = values
    console.log(values)
    if (!name.trim() || !pantheon.trim() || !image.trim() || !text.trim()) {
      props.showAlert('нужно заполнить все поля!');
      return;
    }

    const newEssence = {
      name, pantheon, image, text, id: Date.now().toString()
    }
    props.createEssence(newEssence)
    form.resetFields();
  }

  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{
        name: "",
        pantheon: "",
        image: "",
        text: ""
      }}
      onFinish={submitHandler}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="pantheon"
        name="pantheon"
        rules={[{ required: true, message: 'Please input your pantheon!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="image"
        name="image"
        rules={[{ required: true, message: 'Please input your image!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="text"
        name="text"
        rules={[{ required: true, message: 'Please input your text!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {props.alert && <div>{props.alert}</div>}
    </Form>
  )
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

const mapDispatchToProps = {
  createEssence, showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(EssenceForm)
