:: BASE_DOC ::

## API

### AutoComplete Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
autofocus | Boolean | - | \- | N
borderless | Boolean | false | \- | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
clearable | Boolean | - | \- | N
disabled | Boolean | undefined | \- | N
empty | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
filter | Function | - | Typescript：`(filterWords: string, option: T) => boolean \| Promise<boolean>` | N
filterable | Boolean | true | \- | N
highlightKeyword | Boolean | true | \- | N
inputProps | Object | - | Typescript：`InputProps`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/auto-complete/type.ts) | N
options | Array | - | Typescript：`Array<T>` | N
panelBottomContent | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
panelTopContent | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
placeholder | String | undefined | \- | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/auto-complete/type.ts) | N
readonly | Boolean | undefined | \- | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
status | String | default | options: default/success/warning/error | N
textareaProps | Object | - | Typescript：`TextareaProps`，[Textarea API Documents](./textarea?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/auto-complete/type.ts) | N
tips | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
triggerElement | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
value | String | - | \- | N
defaultValue | String | - | uncontrolled property | N
onBlur | Function |  | Typescript：`(context: { e: FocusEvent; value: string }) => void`<br/> | N
onChange | Function |  | Typescript：`(value: string, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent \| KeyboardEvent }) => void`<br/> | N
onClear | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onCompositionend | Function |  | Typescript：`(context: { e: CompositionEvent; value: string }) => void`<br/>trigger on compositionend | N
onCompositionstart | Function |  | Typescript：`(context: { e: CompositionEvent; value: string }) => void`<br/>trigger on compositionstart | N
onEnter | Function |  | Typescript：`(context: { e: KeyboardEvent; value: string }) => void`<br/> | N
onFocus | Function |  | Typescript：`(context: { e: FocusEvent; value: string }) => void`<br/> | N
onSelect | Function |  | Typescript：`(value: string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/> | N
