import React from 'react';
import {Button} from "antd";

function Index() {

  const [count,setCount] = React.useState(0);
  const [name, setName] = React.useState('杭州停车');

  function add (): void {
    setCount(count+1);
  }

  function changeName (): void {
    setName("龙岩停车");
  }
  React.useEffect(() => {
    const time = setInterval(() => {
      setCount(prvCount => prvCount+1)
    },1000)
    return ( () => {
      clearInterval(time)         // 返回值是函数，挂载时会调用，相当于componentWillUnmount
    })
  },[])                     // 第二个参数是数组，没有这个参数，所有变量update的时候，都会调用这个函数。componentDidUpdate
                                  // 有这个参数的时候，设置对应变量，变量update的时候，调用这个函数。
                                  // 有数组参数，里面不设置变量，相当于componentDidMount
  const myInputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <h2>当前求和是{count}</h2>
      <h2>当前是{name}</h2>
      <Button onClick={add}>设置count</Button>
      <Button onClick={changeName}>设置count</Button>
      <input type='text' ref={myInputRef} />
      <h2>当前输入的是{myInputRef.current ? myInputRef.current.value : '哈哈'}</h2>
      {/* {props} */}
    </div>
  );
}

export default Index;
