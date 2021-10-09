import React, { useEffect, useState } from 'react';
import { Button, Card, Table, Pagination } from 'antd';
import './style.less';
import SFaxios from '@/utils/SFaxios';
interface IPermissionProps {}

const Permission: React.FunctionComponent<IPermissionProps> = (props) => {
  // 表格数据
  const [data, setData] = useState([]);
  // 选定行编号
  const [tableKay, setTableKay] = useState([]);
  // 选定行内容
  const [tableRow, setTableRow] = useState([]);
  useEffect(() => {
    SFaxios.ajax({ url: '/role/list' }).then((res: any) => {
      setData(res.result.item_list);
    });
  }, []);
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
  return (
    <div className="permission">
      <Card style={{ marginBottom: 10 }}>
        <div className="myContent">
          <Button type="primary">创建角色</Button>
          <Button type="primary">设置权限</Button>
          <Button type="primary">用户权限</Button>
        </div>
      </Card>
      <Card>
        <Table
          // pagination={false}
          columns={columns}
          dataSource={data}
        />
      </Card>
    </div>
  );
};

export default Permission;
