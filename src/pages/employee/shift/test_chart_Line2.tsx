
import React, {useRef} from "react";
import {Line} from "@ant-design/charts";
import {Button} from "antd";

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
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
      <Line
        chartRef={ref}
        data={data}
        xField='year'
        yField='value'
        height={400}
        point={{
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#2593fc',
            lineWidth: 2
          }
        }}
        tooltip={{
          customContent: (title,items) => {
            console.log("title:",title);
            console.log("items:",items);
            console.log("ref:",items);
            return (
              <>
                <h5 style={{marginTop: 16}} key='h5'>{`哈哈${title}`}</h5>
                <ul style={{paddingLeft: 0}} key='dataList'>
                  {
                    items?.map((item, index) => {
                      // console.log(item);
                      const { name , value, color} = item;
                      return (
                        <li
                          key={item.name}
                          className="g2-tooltip-list-item"
                          data-index={index}
                          style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
                        >

                          <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
                          <span
                            style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
                          >
                            <span style={{ marginRight: 16 }}>{name}:</span>
                            <span className="g2-tooltip-list-item-value">{value}</span>
                          </span>
                        </li>
                      )
                    })
                  }
                </ul>
              </>
            ) // as unknown as HTMLElement
          }
        }}
      />
    </div>
  );
}
