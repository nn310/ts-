import React, { useState } from 'react';
import { Card, Button } from 'antd';
import './style.less';
interface IButtonProps {}

const ButtonPage: React.FunctionComponent<IButtonProps> = (props) => {
  // 控制Loading
  const [btn_loading, setLoading] = useState<boolean>(true);
  // 控制大小
  const [btn_size, setSize] = useState<'large' | 'small' | 'default'>(
    'default',
  );

  return (
    <div className="ButtonPage">
      <Card title="基础按钮">
        <div className="card-content">
          <Button type="primary">我是按钮</Button>
          <Button type="danger">我是按钮</Button>
          <Button type="ghost">我是按钮</Button>
          <Button type="danger">我是按钮</Button>
          <Button type="link">我是按钮</Button>
        </div>
      </Card>
      <Card title="图标按钮">
        <div className="card-content">
          <Button icon="download" type="primary">
            我是按钮
          </Button>
          <Button icon="qq" type="danger">
            我是按钮
          </Button>
          <Button icon="reddit" type="ghost">
            我是按钮
          </Button>
          <Button icon="like" type="danger">
            我是按钮
          </Button>
          <Button icon="skin" type="link">
            我是按钮
          </Button>
        </div>
      </Card>
      <Card title="带Loading按钮">
        <div className="card-content">
          <Button loading={btn_loading} type="primary">
            带Loading的按钮
          </Button>
          <Button loading={btn_loading} type="danger">
            带Loading的按钮
          </Button>
          <Button loading={btn_loading} type="ghost">
            带Loading的按钮
          </Button>
          <Button loading={btn_loading} type="danger">
            带Loading的按钮
          </Button>
          <Button loading={btn_loading} type="link">
            带Loading的按钮
          </Button>
          <Button
            onClick={() => {
              setLoading(!btn_loading);
            }}
            type="link"
          >
            切换状态
          </Button>
        </div>
      </Card>
      <Card title="按钮组">
        <Button.Group>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </Button.Group>
      </Card>
      <Card title="控制大小按钮">
        <Button.Group>
          <Button
            size={btn_size}
            onClick={() => {
              setSize('large');
            }}
          >
            Large
          </Button>
          <Button
            size={btn_size}
            onClick={() => {
              setSize('default');
            }}
          >
            Default
          </Button>
          <Button
            size={btn_size}
            onClick={() => {
              setSize('small');
            }}
          >
            Small
          </Button>
        </Button.Group>
      </Card>
    </div>
  );
};

export default ButtonPage;
