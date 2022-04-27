import React, { useState } from 'react';
import { Form, Button, Input, Modal, Steps } from 'antd';

import type { TableListItem } from '../data.d';

export interface FormValueType extends Partial<TableListItem> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
}
const FormItem = Form.Item;
const { Step } = Steps;
// const { TextArea } = Input;
// const { Option } = Select;
// const RadioGroup = Radio.Group;

export interface UpdateFormState {
  formVals: FormValueType;
  currentStep: number;
}

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const UpdateSensorForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    name: props.values.name,
    desc: props.values.desc,
    key: props.values.key,
    target: '0',
    template: '0',
    type: '1',
    time: '',
    frequency: 'month',
  });

  const [currentStep, setCurrentStep] = useState<number>(0);

  const [form] = Form.useForm();

  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;

  const forward = () => setCurrentStep(currentStep + 1);

  const backward = () => setCurrentStep(currentStep - 1);

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();

    setFormVals({ ...formVals, ...fieldsValue });

    if (currentStep < 2) {
      forward();
    } else {
      handleUpdate({ ...formVals, ...fieldsValue });
    }
  };

  const renderContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <FormItem
            name="radarThreshold1"
            label="25厘米雷达阈值"
          >
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem
            name="radarThreshold2"
            label="50厘米雷达阈值"
          >
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem
            name="radarThreshold3"
            label="100厘米雷达阈值"
          >
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem
            name="radarThreshold4"
            label="150厘米雷达阈值"
          >
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem
            name="radarThreshold5"
            label="200厘米雷达阈值"
          >
            <Input placeholder="请输入" />
          </FormItem>
        </>
      );
    }
    if (currentStep === 2) {
      return (
        <>
          <FormItem
            name="photosensitive"
            label="光照阈值"
          >
            <Input placeholder="请输入" />
          </FormItem>
        </>
      );
    }
    return (
      <>
        <FormItem
          name="name"
          label="X轴磁场阈值"
          // rules={[{ required: true, message: '请输入规则名称！' }]}
        >
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem
          name="desc"
          label="Y轴磁场阈值"
          // rules={[{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }]}
        >
          <Input placeholder="请输入" />
          {/* <TextArea rows={4} placeholder="请输入至少五个字符" /> */}
        </FormItem>
        <FormItem
          name="desc3"
          label="Z轴磁场阈值"
          // rules={[{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }]}
        >
          <Input placeholder="请输入" />
          {/* <TextArea rows={4} placeholder="请输入至少五个字符" /> */}
        </FormItem>
      </>
    );
  };

  const renderFooter = () => {
    if (currentStep === 1) {
      return (
        <>
          <Button style={{ float: 'left' }} onClick={backward}>
            上一步
          </Button>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>取消</Button>
          <Button type="primary" onClick={() => handleNext()}>
            下一步
          </Button>
        </>
      );
    }
    if (currentStep === 2) {
      return (
        <>
          <Button style={{ float: 'left' }} onClick={backward}>
            上一步
          </Button>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>取消</Button>
          <Button type="primary" onClick={() => handleNext()}>
            完成
          </Button>
        </>
      );
    }
    return (
      <>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>取消</Button>
        <Button type="primary" onClick={() => handleNext()}>
          下一步
        </Button>
      </>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="参数设置"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible()}
    >
      <Steps style={{ marginBottom: 28 }} size="small" current={currentStep}>
        <Step title="磁场参数设置" />
        <Step title="雷达参数设置" />
        <Step title="光敏参数设置" />
      </Steps>
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          target: formVals.target,
          template: formVals.template,
          type: formVals.type,
          frequency: formVals.frequency,
          name: formVals.name,
          desc: formVals.desc,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateSensorForm;
