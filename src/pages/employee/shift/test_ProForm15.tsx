

import React from "react";
import ProForm, {
  ProFormList, ProFormSelect,

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
        <ProFormList
          name="users"
          initialValue={[
            {
              useMode: 'chapter',
            },
          ]}
          creatorButtonProps={{
            position: 'top',
            creatorButtonText: '在建一行',
          }}
          creatorRecord={{
            useMode: 'none',
          }}
        >
          <ProFormSelect
            options={[
              {
                value: 'chapter',
                label: '盖章后生效',
              },
              {
                value: 'none',
                label: '不生效',
              },
            ]}
            width="md"
            name="useMode"
            label="合同约定生效方式"
          />
        </ProFormList>
      </ProForm>
    </>
  );

}

