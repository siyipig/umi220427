

import React from "react";
import ProForm, {
  ProFormFieldSet,
  ProFormText,

} from "@ant-design/pro-form";








// const waitTime = (time: number = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time)
//   })
// }




export default () => {
  return (
    <>
      <ProForm>
        <ProFormFieldSet
          name="list"
          label="组件列表"
          // 支持 两种方式，type="group" 会用input.group 包裹
          // 如果不配置 默认使用 space
          type="group"
          transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
        >
          <ProFormText width="md" />
          <ProFormText width="md" />
          <ProFormText width="md" />
        </ProFormFieldSet>
      </ProForm>
    </>
  );

}

