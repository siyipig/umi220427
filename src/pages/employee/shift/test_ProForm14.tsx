

import React from "react";
import ProForm, {
ProFormUploadButton, ProFormUploadDragger
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
        <ProFormUploadButton
          name="upload"
          label="Upload"
          max={2}
          fieldProps={{
            name: 'file',
          }}
          action="/upload.do"
          extra="longgggggggggggggggggggggggggggggggggg"
        />
        <ProFormUploadButton
          name="upload"
          label="Upload"
          max={2}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
          }}
          action="/upload.do"
          extra="longgggggggggggggggggggggggggggggggggg"
        />
        <ProFormUploadDragger max={4} label="Dragger" name="dragger" />
      </ProForm>
    </>
  );

}
