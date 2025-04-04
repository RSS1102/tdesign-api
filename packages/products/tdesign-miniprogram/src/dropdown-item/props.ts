/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDropdownItemProps } from './type';
const props: TdDropdownItemProps = {
  /** 是否禁用操作项 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 用来定义 value / label / disabled 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 标题 */
  label: {
    type: String,
    value: '',
  },
  /** 是否多选 */
  multiple: {
    type: Boolean,
    value: false,
  },
  /** 选项数据 */
  options: {
    type: Array,
    value: [],
  },
  /** 选项分栏（1-3） */
  optionsColumns: {
    type: null,
    value: 1,
  },
  /** 复选框和内容相对位置，仅单选菜单栏有效 */
  placement: {
    type: String,
    value: 'left',
  },
  /** 选中值 */
  value: {
    type: null,
    value: undefined,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: null,
    value: undefined,
  },
};

export default props;
