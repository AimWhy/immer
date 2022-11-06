immer 包暴露了一个完成所有工作的默认函数。

`produce(currentState, recipe: (draftState) => void): nextState`

`produce` 需要一个 `baseState`，以及一个可用于对传入的 `draft` 进行所有所需更改的 `recipe`。

在 `recipe` 中，常规的数据操作都可以用在 `draft` 对象上，包括属性字段分配、删除操作和修改数组，如 push、pop、splice、 delete 等。


## 例子

```javascript
import produce from "@aimwhy/immer"

const baseState = [
	{
		title: "Learn TypeScript",
		done: true
	},
	{
		title: "Try Immer",
		done: false
	}
]

const nextState = produce(baseState, draftState => {
	draftState.push({title: "Tweet about it"})
	draftState[1].done = true
})
```

`nextState` 对象仅是对 `baseState` 中所有修改链上的引用进行新的生成。
注意: `baseState` 的数据也变了，但修改链上引用可能没有变。


```javascript
baseState.length === 3   // ✔️

nextState.length === 3   // ✔️

baseState !== nextState  // ✔️

nextState[0] === baseState[0]  // ✔️

nextState[1] !== baseState[1]  // ✔️
```