:: BASE_DOC ::

## API

### Menu Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
collapsed | Boolean | false | \- | N
expandMutex | Boolean | false | \- | N
expandType | String | normal | options: normal/popup | N
expanded | Array | [] | Typescript：`Array<MenuValue>` | N
defaultExpanded | Array | [] | uncontrolled property。Typescript：`Array<MenuValue>` | N
logo | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
operations | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
theme | String | light | Menu can be light mode or dark mode。options: light/dark/global/system | N
value | String / Number | - | Typescript：`MenuValue` `type MenuValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/menu/type.ts) | N
defaultValue | String / Number | - | uncontrolled property。Typescript：`MenuValue` `type MenuValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/menu/type.ts) | N
width | String / Number / Array | '232px' | Typescript：`string \| number \| Array<string \| number>` | N
onChange | Function |  | Typescript：`(value: MenuValue) => void`<br/> | N
onExpand | Function |  | Typescript：`(value: Array<MenuValue>) => void`<br/> | N


### HeadMenu Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
expandType | String | normal | options: normal/popup | N
expanded | Array | [] | Typescript：`Array<MenuValue>` | N
logo | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
operations | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
theme | String | light | options: light/dark | N
value | String / Number | - | Typescript：`MenuValue` `type MenuValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/menu/type.ts) | N
defaultValue | String / Number | - | uncontrolled property。Typescript：`MenuValue` `type MenuValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/menu/type.ts) | N
onChange | Function |  | Typescript：`(value: MenuValue) => void`<br/> | N
onExpand | Function |  | Typescript：`(value: Array<MenuValue>) => void`<br/> | N


### Submenu Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
disabled | Boolean | - | \- | N
icon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
popupProps | Object | - | Transparent all feature props of the Popup。Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/menu/type.ts) | N
title | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
value | String / Number | - | Typescript：`MenuValue` | N


### MenuItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
disabled | Boolean | - | \- | N
href | String | - | \- | N
icon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
target | String | _self | options: _blank/_self/_parent/_top | N
tooltipProps | Object | - | Transparent all feature props of the Tooltip。Typescript：`TooltipProps`，[Tooltip API Documents](./tooltip?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/menu/type.ts) | N
value | String / Number | - | Typescript：`MenuValue` | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on click | N


### MenuGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
title | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
