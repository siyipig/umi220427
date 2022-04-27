
import React, {useRef} from "react";
import {Column, Line} from "@ant-design/charts";
import {Button} from "antd";

const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 0,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
];

// const config = {
//   data,
//   xField: 'year',
//   yField: 'value',
//   height: 400,
//   point: {
//     size: 5,
//     shape: 'diamond',
//     style: {
//       fill: 'whit'
//     }
//   }
// }

export default () => {
  const ref = useRef();
  const downloadImage = () => {
    ref.current?.downloadImage();
  }
  const toDataURL = () => {
    console.log(ref.current?.toDataURL());
  }
  return (
    <div>
      <Button onClick={downloadImage} style={{ marginRight: 24 }}>导出图片</Button>
      <Button onClick={toDataURL}>获取图标信息</Button>
      <Column
        chartRef={ref}
        data={data}
        xField='type'
        yField='sales'
        height={400}

        label={{
          position: 'middle',
          style: {
            fill: 'red',                      /// '#FFFFFF',
            opacity: 0.6}
        }}
        meta={{
          type: {alias: '类型'},
          sales: {alias: '销售额'}
        }}
        onReady={(plot) => {            // 需要再好好理解下 最好了解下plot的api
          plot.on('plot:click', (evt: any) => {
            const {x, y} = evt;
            const { xField } = plot.options;
            const tooltipData = plot.chart.getTooltipItems({ x, y });
            console.log('haha',tooltipData);
          })
        }}
        // point={{
        //   size: 5,
        //   shape: 'diamond',
        //   style: {
        //     fill: 'white',
        //     stroke: '#2593fc',
        //     lineWidth: 2
        //   }
        // }}
        // tooltip={{
        //   customContent: (title,items) => {
        //     console.log("title:",title);
        //     console.log("items:",items);
        //     console.log("ref:",items);
        //     return (
        //       <>
        //         <h5 style={{marginTop: 16}} key='h5'>{`哈哈${title}`}</h5>
        //         <ul style={{paddingLeft: 0}} key='dataList'>
        //           {
        //             items?.map((item, index) => {
        //               // console.log(item);
        //               const { name , value, color} = item;
        //               return (
        //                 <li
        //                   key={item.name}
        //                   className="g2-tooltip-list-item"
        //                   data-index={index}
        //                   style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
        //                   >
        //
        //                   <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
        //                   <span
        //                     style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
        //                   >
        //                     <span style={{ marginRight: 16 }}>{name}:</span>
        //                     <span className="g2-tooltip-list-item-value">{value}</span>
        //                   </span>
        //                 </li>
        //               )
        //             })
        //           }
        //         </ul>
        //       </>
        //     ) // as unknown as HTMLElement
        //   }
        // }}
      />
    </div>
  );
}
