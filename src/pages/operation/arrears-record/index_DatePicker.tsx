
// import React from 'react';
import './test.css'

import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

function range(start: any, end: any) {
  const result = [];
  for (let i = start; i < end; i +=1) {
    result.push(i);
  }
  return result;
}

function disabledDate(current: any) {
  // Can not select days before today and today
  // console.log('current---',current)
  // console.log('moment---',moment)
  // console.log('moment()---',moment())
  // console.log('moment().endOf---',moment().endOf('day'))
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}
const onChange = (value: any, dateString: any) => {
  console.log('value---',value)
  console.log('dateString---',dateString)
}

function Index() {

  return (
    <div>
      <Space direction="vertical" size={12}>
        <DatePicker
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
          onChange={onChange}
        />
        <DatePicker picker="month" disabledDate={disabledDate} />
        <RangePicker disabledDate={disabledDate} />
        <RangePicker
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </Space>
    </div>

  );
}

export default Index;
