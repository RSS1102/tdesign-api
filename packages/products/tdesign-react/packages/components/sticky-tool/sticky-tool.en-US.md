:: BASE_DOC ::

## API

### StickyTool Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
list | Array | [] | Typescript：`Array<TdStickyItemProps>` | N
offset | Array | - | Typescript：`Array<string \| number>` | N
placement | String | right-bottom | options: right-top/right-center/right-bottom/left-top/left-center/left-bottom | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/sticky-tool/type.ts) | N
shape | String | square | stickytool shape。options: square/round | N
type | String | normal | stickytool type。options: normal/compact | N
width | String / Number | - | \- | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent; item: TdStickyItemProps }) => void`<br/> | N
onHover | Function |  | Typescript：`(context: { e: MouseEvent; item: TdStickyItemProps }) => void`<br/> | N


### StickyItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
icon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
label | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
popup | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/sticky-tool/type.ts) | N
trigger | String | hover | options: hover/click | N
