import React, { useState } from 'react';
import { Card, Modal, Button } from 'antd';
import './style.less';
interface IModalsProps {}

const Modals: React.FunctionComponent<IModalsProps> = (props) => {
  let [modaleVisbel, setVisibel] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  });
  const { modal1, modal2, modal3, modal4 } = modaleVisbel;

  // 动态匹配
  let handleState = (state: 'success' | 'info' | 'error' | 'warning') => {
    Modal[state]({ title: state, content: state + '出现了。测试哈哈' });
  };
  return (
    <div className="ModalPage">
      <Card>
        <div className="card-content">
          <Button
            onClick={() => {
              setVisibel({ ...modaleVisbel, modal1: true });
            }}
          >
            一号模态框
          </Button>
          <Button
            onClick={() => {
              setVisibel({ ...modaleVisbel, modal2: true });
            }}
          >
            没有页脚的模态框
          </Button>
          <Button
            onClick={() => {
              setVisibel({ ...modaleVisbel, modal3: true });
            }}
          >
            自定义页脚
          </Button>
          <Button
            onClick={() => {
              setVisibel({ ...modaleVisbel, modal4: true });
            }}
          >
            顶部弹框
          </Button>
        </div>
      </Card>
      <Card>
        <div className="card-content">
          <Button
            type="primary"
            onClick={() => {
              handleState('success');
            }}
          >
            success
          </Button>
          <Button
            onClick={() => {
              handleState('info');
            }}
          >
            info
          </Button>
          <Button
            type="danger"
            onClick={() => {
              handleState('error');
            }}
          >
            error
          </Button>
          <Button
            type="link"
            onClick={() => {
              handleState('warning');
            }}
          >
            warning
          </Button>
        </div>
      </Card>
      <Modal
        visible={modal1}
        onCancel={() => {
          setVisibel({ ...modaleVisbel, modal1: false });
        }}
        title="一号模态框"
      >
        明天的你会感谢今天努力的自己
      </Modal>
      <Modal
        visible={modal2}
        title="没有页脚模态框"
        footer={null}
        onCancel={() => {
          setVisibel({ ...modaleVisbel, modal2: false });
        }}
      >
        测试哈哈哈
      </Modal>
      <Modal
        visible={modal3}
        title="自定义页脚"
        okText="成功了，爷开心"
        cancelText="爷，不用了"
        onCancel={() => {
          setVisibel({ ...modaleVisbel, modal3: false });
        }}
      >
        测试哈哈哈
      </Modal>
      <Modal
        visible={modal4}
        title="距顶部20像素"
        style={{ top: '20px' }}
        onCancel={() => {
          setVisibel({ ...modaleVisbel, modal4: false });
        }}
      >
        测试哈哈哈
      </Modal>
    </div>
  );
};

export default Modals;
