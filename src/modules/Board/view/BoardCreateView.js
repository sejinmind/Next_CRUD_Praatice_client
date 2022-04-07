import * as React from "react";
import { Input, Form, Button, message } from "antd";
export const BoardCreateView = () => {
  const [fields, setFields] = React.useState([]);

  const [form] = Form.useForm();

  const onChange = (e) => {};
  const onFinish = (values) => {
    form.resetFields();
    message.success("글 작성이 완료되었습니다!");
    // form.submit();
  };
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <React.Fragment>
      <Form
        name="boardCreateForm"
        size="large"
        fields={fields}
        onFieldsChange={(_, allFields) => {
          setFields(allFields);
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item required label={<React.Fragment>내용</React.Fragment>}>
          <Input
            showCount
            maxLength={100}
            onChange={onChange}
            bordered={true}
            style={{ minHeight: 100 }}
            rules={[{ required: true }]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block>
            작성
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};
