import React, {useState} from 'react';
import {
  ProFormDatePicker,
  ProFormDateRangePicker, ProFormGroup,
  ProFormSelect,
  ProFormText,
  QueryFilter
} from "@ant-design/pro-form";
import {Card, Input, Tabs} from "antd";
import styles from './search-filter.module.less'
import {DownOutlined, UpOutlined} from "@ant-design/icons/lib";


const {Tabpane} = Tabs;

type AdvancedSearchProps = {
  onFilterChange?: (allValues: any) => void,
  onSearch?: (text: string) => void,
  onTypeChange?: (type: string) => void,
  defaultType: string
}


const AdvancedSearch: React.FC<AdvancedSearchProps> = (props) => {
  const { onSearch, onTypeChange, onFilterChange, defaultType = 'articles'} = props;
  const [searchText, setSearchText] = useState<string>();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const quickSearch = ['小程序开发', '入驻', 'ISV 权限'];
  return (
    <>
      <Card>
        <div>
          <Input.Search
            placeholder='请输入'
            enterButton='搜索'
            size='large'
            value={searchText}
            onChange={ event => setSearchText(event.target.value) }
            onSearch={onSearch}
            style={{maxWidth: 552, width: '100%'}}
          />
          <div className={styles.quickSearch}>
            {
              quickSearch.map(text => (
                <span
                  key={text}
                  onClick={ () => {
                    setSearchText(text);
                    if(onSearch) {
                      onSearch(text);
                    }
                  }}
                >
                {text}
              </span>
              ))
            }
          </div>
        </div>
        <Tabs
          defaultActiveKey={defaultType}
          onChange = {onTypeChange}
          tabBarExtraContent={
            <a
              className={styles.filterTrigger}
              onClick={() => {
                  setShowFilter(!showFilter);
                }
              }
            >
              高级筛选{showFilter? <UpOutlined /> : <DownOutlined/> }
            </a>
          }
        >
          <Tabpane tab='文章' key='articles' />
          <Tabpane tab='项目' key='projects' />
          <Tabpane tab='应用' key='applications' />
        </Tabs>
        <QueryFilter

        >
          <ProFormGroup title='姓名'>
            <ProFormText  width='sm'/>
          </ProFormGroup>
          <ProFormGroup title='详情'>
            <ProFormText label='年龄' width='sm'/>
            <ProFormDatePicker label='生日' width='sm'/>
          </ProFormGroup>
        </QueryFilter>

      </Card>
    </>
  );
};

export default AdvancedSearch;
