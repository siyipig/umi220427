import React, {useState} from 'react';
import {Button, message, Modal, Progress, Steps, Upload} from 'antd';
import {UploadOutlined} from "@ant-design/icons/lib";

const { Step } = Steps;

interface CreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}



const CreateUpdateGradeForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel } = props;
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);
  let count: any = 0;
  let timeId: any;
  // const increasePercent = () => {
  //   console.log(`1--${currentPercent}`)
  //   setCurrentPercent(currentPercent+10);
  //   if (currentPercent >= 100) {
  //     console.log(`2--${currentPercent}`)
  //     clearInterval(timeId);
  //     setCurrentStep(2);
  //   }
  // }
  const increasePercent = () => {
    // console.log(`1--${count}`)
    count+=1;
    setCurrentPercent(count);
    if (count >= 100) {
      // console.log(`2--${currentPercent}`)
      clearInterval(timeId);
      count=0;
      setCurrentStep(2);
    }
  }
  const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
        setCurrentStep(1);
        setCurrentPercent(0);
        timeId = setInterval(increasePercent,100)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
  };
  const modalCancel = () => {
    setCurrentStep(0);
    setCurrentPercent(0);
    count=0;
    // return
    // clearInterval(timeId);
  }

  return (
    <Modal
      destroyOnClose
      title="升级"
      visible={modalVisible}
      // onCancel={() => onCancel()}
      onCancel={() => {
        modalCancel();
        onCancel();
      }}
      footer={null}
    >
      {/* <Upload {...uploadProps}> */}
      {/*  <Button icon={<UploadOutlined />}>上传升级文件</Button> */}
      {/* </Upload> */}
      <Steps direction="vertical" current={currentStep} >
        <Step
          title={
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>上传升级文件</Button>
          </Upload>
        }
          description={
            <>
              <br/>
              地磁检测器升级
              <br/>
              <br/>
            </>
          }
        />
        <Step
          title="升级中"
          subTitle={<Progress type="circle" percent={currentPercent} width={80} />}
          description={
            <>
              地磁检测器升级
              <br/>
            </>
          }
        />
        <Step title="升级完成" description="地磁检测器升级" />
      </Steps>
    </Modal>
  );
};

export default CreateUpdateGradeForm;
