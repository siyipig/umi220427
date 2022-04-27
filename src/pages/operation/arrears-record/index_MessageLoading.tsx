
import React from 'react';
import './test.css'

import { message, Button } from 'antd';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  // 调用这个后，为什么会关闭massage.loading
  setTimeout(hide, 2500);
};

export default class Index extends React.Component {

  render() {


    return (
      <Button onClick={success}>Display a loading indicator</Button>
    );
  };
}
