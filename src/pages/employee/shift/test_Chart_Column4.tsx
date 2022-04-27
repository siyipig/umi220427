
import React from "react";
import {Column} from "@ant-design/charts";

const data = [
  {
    action: '浏览网站',
    pv: 50000,
  },
  {
    action: '放入购物车',
    pv: 35000,
  },
  {
    action: '生成订单',
    pv: 25000,
  },
  {
    action: '支付订单',
    pv: 15000,
  },
  {
    action: '完成交易',
    pv: 8500,
  },
];

const DemoColumn: React.FC = () => {

  // const [data, setData] = useState([]);
  // const asyncFetch = () => {
  //   fetch('')
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json);
  //       setData(json);
  //     })
  // }
  // useEffect(() => {
  //   asyncFetch();
  // },[])

  return <Column
    data={data}
    xField='action'
    yField='pv'
    xAxis={
      {
        label: {
          autoHide: true,      //  label 显示不下去的时候会自动隐藏和旋转的设置
          autoRotate: false
        }
      }
    }
    conversionTag={{}}



  />
}

export default DemoColumn;
