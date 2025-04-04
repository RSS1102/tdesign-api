:: BASE_DOC ::

## API

### Message Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
action | String / Slot | - | 已废弃。操作。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
align | String | left | 文本对齐方式。可选项：left/center。TS 类型：`MessageAlignType` `type MessageAlignType = 'left' \| 'center'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
close-btn | String / Boolean / Object / Slot | false | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：'user'，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
content | String / Slot | - | 用于自定义消息弹出内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
duration | Number | 3000 | 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器 | N
gap | String / Number / Boolean | 12 | 两条 `message` 之间的间距 | N
icon | String / Boolean / Object / Slot | true | 消息提醒前面的图标，可以自定义。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：'info'，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
link | String / Object / Slot | - | 链接名称。值为字符串表示链接名称，值为 `Object` 类型，表示透传至 `Link`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：`boolean \| MessageMarquee` `interface MessageMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
offset | Array | - | 相对于 placement 的偏移量，默认单位 rpx。示例：[-10, 20] 或 ['10rpx', '8rpx']。TS 类型：`Array<string \| number>` | N
single | Boolean | true | 是否保持仅显示一条信息 | N
theme | String | info | 消息组件风格。可选项：info/success/warning/error。TS 类型：`MessageThemeList` `type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
visible | Boolean | false | 是否显示，隐藏时默认销毁组件 | N
default-visible | Boolean | undefined | 是否显示，隐藏时默认销毁组件。非受控属性 | N
z-index | Number | 15000 | 元素层级，样式默认为 15000 | N

### Message Events

名称 | 参数 | 描述
-- | -- | --
action-btn-click | - | 已废弃。当操作按钮存在时，用户点击操作按钮时触发
close-btn-click | - | 当关闭按钮存在时，用户点击关闭按钮触发
duration-end | \- | 计时结束后触发
link-click | - | 当`link`链接存在时，点击链接文本时触发

### Message External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-close-btn | 关闭按钮样式类
t-class-content | 内容样式类
t-class-icon | 图标样式类
t-class-link | 链接样式类
