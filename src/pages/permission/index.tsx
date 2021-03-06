import React, { useEffect, useState } from 'react';
import { Button, Card, Table, Pagination, Modal } from 'antd';
import './style.less';
import SFaxios from '@/utils/SFaxios';
// 引入子组件集
import { RoleCreate } from './components';
import { TableRowSelection } from '_antd@3.26.20@antd/lib/table';
interface IPermissionProps {}

const Permission: React.FunctionComponent<IPermissionProps> = (props) => {
  // 表格数据
  const [data, setData] = useState([]);
  // 选定行编号
  const [tableKay, setTableKay] = useState<number[] | string[]>();
  // 选定行内容
  const [tableRow, setTableRow] = useState<any>([]);
  // 模态框是否弹出
  const [visible, setVisible] = useState(false);
  // 标题显示
  const [title, setTitle] = useState('');
  const [type, setTupe] = useState<
    'create' | undefined | 'setting' | 'editUser'
  >();
  // 请求数据
  useEffect(() => {
    SFaxios.ajax({ url: '/role/list' }).then((res: any) => {
      res.result.item_list.forEach((item: any, index: number) => {
        item.key = index;
      });
      setData(res.result.item_list);
    });
  }, []);
  // 表单逻辑提交

  const columns = [
    {
      title: '角色ID',
      dataIndex: 'id',
    },
    {
      title: '角色名称',
      dataIndex: 'role_name',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      // render: Utils.formateDate
    },
    {
      title: '使用状态',
      dataIndex: 'status',
      render(status: any) {
        return status == 1 ? '启用' : '停用';
      },
    },
    {
      title: '授权时间',
      dataIndex: 'authorize_time',
      // render: Utils.formateDate
    },
    {
      title: '授权人',
      dataIndex: 'authorize_user_name',
    },
  ];
  // 单选按钮配置
  const rowSelection: TableRowSelection<{}> = {
    type: 'radio',
    selectedRowKeys: tableKay,
    onChange: (selectKey, selectRow) => {
      setTableRow(selectRow);
      setTableKay(selectKey);
    },
  };
  return (
    <div className="permission">
      <Card style={{ marginBottom: 10 }}>
        <div className="myContent">
          <Button
            type="primary"
            onClick={() => {
              setTitle('创建角色');
              setVisible(true);
              setTupe('create');
            }}
          >
            创建角色
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setTitle('设置权限');
              setVisible(true);
              setTupe('editUser');
            }}
          >
            设置权限
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setTitle('用户权限');
              setVisible(true);
              setTupe('setting');
            }}
          >
            用户权限
          </Button>
        </div>
      </Card>
      <Card>
        <Table
          // pagination={false}
          columns={columns}
          dataSource={data}
          rowSelection={rowSelection}
          onRow={(record, index) => {
            return {
              onClick: () => {
                setTableKay([index]);
                setTableRow(record);
              },
            };
          }}
        />
      </Card>
      <Modal
        title={title}
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      >
        {type == 'create' ? <RoleCreate getForm={() => {}} /> : ''}
      </Modal>
    </div>
  );
};

export default Permission;
