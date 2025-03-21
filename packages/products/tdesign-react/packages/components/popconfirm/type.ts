/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button';
import { PopupProps } from '../popup';
import { TNode, TElement } from '../common';
import { MouseEvent } from 'react';

export interface TdPopconfirmProps {
  /**
   * 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件
   * @default ''
   */
  cancelBtn?: ButtonProps | TNode;
  /**
   * 触发元素，同 triggerElement
   */
  children?: TNode;
  /**
   * 确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件
   * @default ''
   */
  confirmBtn?: ButtonProps | TNode;
  /**
   * 是否在关闭浮层时销毁浮层
   * @default true
   */
  destroyOnClose?: boolean;
  /**
   * 确认框图标
   */
  icon?: TElement;
  /**
   * 浮层出现位置
   * @default top
   */
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom';
  /**
   * 透传 Popup 组件全部属性
   */
  popupProps?: PopupProps;
  /**
   * 是否显示浮层箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * 文字提示风格。如果期望不显示文本前方的主题图标，请更为设置 `icon` 为 `null`
   * @default default
   */
  theme?: 'default' | 'warning' | 'danger';
  /**
   * 触发元素
   */
  triggerElement?: TNode;
  /**
   * 点击取消按钮时触发
   */
  onCancel?: (options: { e: MouseEvent<HTMLElement> }) => void;
  /**
   * 点击确认按钮时触发
   */
  onConfirm?: (options: { e: MouseEvent<HTMLElement> }) => void;
  /**
   * 确认框显示或隐藏时触发
   */
  onVisibleChange?: (visible: boolean, context?: PopconfirmVisibleChangeContext) => void;
}

export interface PopconfirmVisibleChangeContext {
  trigger?: TriggerSource;
  e?: MouseEvent<HTMLDivElement | HTMLButtonElement>;
}

export type TriggerSource = 'cancel' | 'confirm' | 'document' | 'trigger-element-click';
