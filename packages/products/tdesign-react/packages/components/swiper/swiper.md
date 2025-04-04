:: BASE_DOC ::

## API

### Swiper Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
animation | String | slide | 轮播切换动画效果类型：滑动、淡入淡出等。可选项：slide/fade | N
autoplay | Boolean | true | 是否自动播放 | N
current | Number | 0 | 当前轮播在哪一项（下标） | N
defaultCurrent | Number | 0 | 当前轮播在哪一项（下标）。非受控属性 | N
direction | String | horizontal | 轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical | N
duration | Number | 300 | 滑动动画时长 | N
height | Number | - | 当使用垂直方向滚动时的高度 | N
interval | Number | 5000 | 轮播间隔时间 | N
loop | Boolean | true | 是否循环播放 | N
navigation | TNode | - | 导航器全部配置。TS 类型：`SwiperNavigation \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
stopOnHover | Boolean | true | 是否悬浮时停止轮播 | N
theme | String | light | 深色模式和浅色模式。可选项：light/dark | N
trigger | String | hover | 触发切换的方式：悬浮、点击等。可选项：hover/click | N
type | String | default | 样式类型：默认样式、卡片样式。可选项：default/card | N
onChange | Function |  | TS 类型：`(current: number, context: { source: SwiperChangeSource }) => void`<br/>轮播切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'click' \| 'hover'`<br/> | N
