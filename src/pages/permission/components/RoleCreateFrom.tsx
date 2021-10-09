import * as React from 'react';
import { Form, Input, Select } from 'antd';
import { FormComponentProps, FormItemProps } from 'antd/es/form';
const FormItem = Form.Item;
const Option = Select.Option;
interface IRoleCreateFormProps extends FormComponentProps {
  //props属性，需要继承
}

const RoleCreateForm: React.FunctionComponent<IRoleCreateFormProps> = (
  props,
) => {
  let { getFieldDecorator } = props.form;

  const formatItems: FormItemProps = {
    labelCol: {
      sm: 24,
      md: 8,
    },
    wrapperCol: {
      sm: 24,
      md: 16,
    },
  };

  return (
    <div className="RoleCreateForm">
      <FormItem label={'用户名'} {...formatItems}>
        {getFieldDecorator('user_name', {
          initialValue: '',
          rules: [{ required: true, message: '用户名不能为空' }],
        })(<Input />)}
      </FormItem>
      <FormItem label={'状态'} {...formatItems}>
        {getFieldDecorator('status', {
          initialValue: 1,
        })(
          <Select>
            <Option value={0}>开启</Option>
            <Option value={1}>关闭</Option>
          </Select>,
        )}
      </FormItem>
    </div>
  );
};

export default Form.create<IRoleCreateFormProps>()(RoleCreateForm);
