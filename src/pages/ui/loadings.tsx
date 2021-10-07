import React, { useState } from 'react';
import { Card, Alert, Spin, Switch, Icon } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  let [spinState, setSpin] = React.useState<boolean>(false);
  return (
    <div className="loading">
      <Card
        title={
          <span>
            spin加载设置
            <Switch
              checked={spinState}
              onChange={(checked) => {
                setSpin(checked);
              }}
            />
          </span>
        }
      >
        <Spin tip="正在加载" spinning={spinState} indicator={antIcon}>
          <Alert
            message="alert message Title"
            description="好好学习，高薪就业"
          />
        </Spin>
      </Card>
    </div>
  );
};

export default Loading;
