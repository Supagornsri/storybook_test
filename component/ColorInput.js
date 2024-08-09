"use client";

import { Button, Form, Input } from 'antd';
import PropTypes from "prop-types";
import { useState } from "react";

function ColorInput ({ label, size = "small" }) {

  const [bgcolor, setBgcolor] = useState("blue");

  const onFinish = (values) => {
    console.log("values", values)
    setBgcolor(values.input);
  };

  return (
    <Form
      onFinish={onFinish}
    >
      <Form.Item
        name="input"
        rules={[
          {
            required: true,
            message: 'Please input color!',
          },
        ]}
      >
        <Input placeholder="Input color"/>
      </Form.Item>

      <Button
        type='primary'
        htmlType='submit'
        style={{backgroundColor: bgcolor}}
        size={size}
      >
        {label ? label : "Submit"}
      </Button>
    </Form>
  )
}

ColorInput.PropTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small","default","large"]),
};

export default ColorInput;