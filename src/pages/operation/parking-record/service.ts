import request from 'umi-request';
import type {TableListParams} from './data.d';
import axios from "axios";
import {DataReportParams} from "@/pages/device/device-data/data";

// export async function queryRule(params?: TableListParams) {
//   return request('/api/rule', {
//     params,
//   });
// }

// export async function queryRule(params?: TableListParams) {
//   return request('http://121.196.13.67/shiqi/FindParkMsgServlet', {
//     params,
//   });
// }
// https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json

// export async function queryRule(params?: TableListParams) {
//   let dataItem: DataTypeItem;
//   fetch('http://121.196.13.67/shiqi/FindParkEventMsgCustomerHistoryServlet',{
//     method: 'post',
//     body: 'serialNumber1=1433&msgType=2',
//     mode: "no-cors"
//   })
//     .then((response) => {
//       console.log(response);
//       return response.json()
//     })
//     .then((json) => {
//       console.log(json);
//       dataItem = json;
//       return {
//         data: dataItem,
//         // success 请返回 true，
//         // 不然 table 会停止解析数据，即使有数据
//         success: true,
//         // 不传会使用 data 的长度，如果是分页一定要传
//         // total: number,
//       };
//     })
//     .catch((error) => {
//       console.log('fetch data failed', error);
//     });
// }

export async function queryRule(params?: TableListParams) {
  let data: any;
  await axios({
    method: 'post',
    // url:'http://121.196.13.67/shiqi/FindParkEventMsgCustomerHistoryServlet',
    url: 'http://47.98.212.157/shiqi/FindParkMsgRealTimeHistoryToNowServlet',
    // withCredentials: true,
    params: {
      serialNumber: params?.serialNumber,
      // serialNumber2: '',
      // serialNumber3: '',
      // serialNumber4: '',
      // serialNumber5: '',
      // serialNumber6: '',
      // serialNumber7: '',
      // serialNumber8: '',
      // serialNumber9: '',
      // serialNumber10:'',
      // serialNumber11:'',
      // serialNumber12:'',
      // serialNumber13:'',
      // serialNumber14:'',
      // serialNumber15:'',
      // serialNumber16:'',
      // serialNumberArray : that.parkList,
      msgType: 999,   // 1: 心跳包  2： 进出包
      isWholeReceive : '1',
      // dateRandom: Date.parse(new Date()) // 加入时间戳
    }
  }).then(function (respone) {
    // that.parkDataArray = respone.data.slice(0,respone.data.length);
    // that.updateParkList();
    // console.log(that.parkDataArray);
    // console.log(respone.data);
    data = respone.data?.reverse();

  });
  console.log(data);
  return Promise.resolve({
    data:  data?.map((item: any) => {
      // console.log(item.serialNumber);
      return {
        serialNumber: item.serialNumber,
        parkStatus: item.parkStatus,
        batteryVoltage: '3.6V',     // item.battery_value,
        txPower: '0dbm',
        snr: 109+item.revTimestamp%3,
        signalPower: -(764 + item.revTimestamp%6),
        ecl: 0,
        sinr: 106+item.revTimestamp%3,
        rsrp: -109+item.revTimestamp%3,
        createdAt: item.revTimestamp,
        id: item.id
      }
    }),
    success: true
  })
}



export async function queryLocalData(params?: DataReportParams) {
  let data: any;
  await axios({
    method: 'post',
    // url:'http://121.196.13.67/shiqi/FindParkEventMsgCustomerHistoryServlet',
    url: "http://47.98.212.157/shiqi/FindParkEventMsgCustomerHistoryServlet",
    // withCredentials: true,
    params: {
      serialNumber1: params?.serialNumber,
      serialNumber2: '',
      serialNumber3: '',
      serialNumber4: '',
      serialNumber5: '',
      serialNumber6: '',
      serialNumber7: '',
      serialNumber8: '',
      serialNumber9: '',
      serialNumber10:'',
      serialNumber11:'',
      serialNumber12:'',
      serialNumber13:'',
      serialNumber14:'',
      serialNumber15:'',
      serialNumber16:'',
      serialNumber17:'',
      serialNumber18:'',
      serialNumber19:'',
      serialNumber20:'',
      msgType: 2,   // 1: 心跳包  2： 进出包
    }
  }).then(function (respone) {
    // console.log(respone.data);
    data = respone.data[0]?.parkEventMsgList.reverse();

  });
  console.log(data);
  return Promise.resolve({
    data:  data?.filter((_: any,index: any) => {return index <20}).map((item: any) => {
      // console.log(item.serialNumber);
      return {
        serialNumber: item.serialNumber,
        parkStatus: item.parkStatus ,
        createdAt: item.revTimestamp,
        id: item.id
      }
    }),
    success: true
  })
}


export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
