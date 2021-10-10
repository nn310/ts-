import * as React from 'react';
import { Form, Input, Select } from 'antd';
import { FormComponentProps, FormItemProps } from 'antd/es/form';
const FormItem = Form.Item;
const Option = Select.Option;
interface IRoleCreateFormProps extends FormComponentProps {
  //props属性，需要继承
  getForm: Function;
}

const RoleCreateForm: React.FunctionComponent<IRoleCreateFormProps> = (
  props,
) => {
  let { getFieldDecorator } = props.form;

  const formatItems: FormItemProps = {
    labelCol: {
      sm: 24,
      md: 6,
    },
    wrapperCol: {
      sm: 24,
      md: 16,
    },
  };

  React.useEffect(() => {
    // 获取表单实例
    if (props.getForm) {
      props.getForm(props.form);
    }
  }, []);
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
          <Select style={{ width: 100 }}>
            <Option value={0}>开启</Option>
            <Option value={1}>关闭</Option>
          </Select>,
        )}
      </FormItem>
    </div>
  );
};

export default Form.create<IRoleCreateFormProps>()(RoleCreateForm);
