## taro in wepy

一次 `wepy` 和 `taro` 容器化的尝试

**使用 `taro` 组件应在 `config` 中使用 `usingTaroComponents` 字段，用法与 `usingComponents` 一致**

TODO:

- [x] 编译后的 `weapp/app.js` 中写入 `require('./taro-package/app.js')` ，使 `taro` 组件能够在 `wepy` 中使用；
- [x] 解决 `wpy` 文件在 `config` 中引入 `taro` 组件时的报错：`Can not resolve xxx`；目前要使用 `taro` 的组件只能手动在需要引入的页面的编译后的 `xxx.json` 的 `usingComponents` 中引入 `taro` 组件编译后的产物
- [ ] 解决 `wepy` 和 `taro` 的通信问题（事件绑定，数据绑定，双向绑定？...）
- [ ] 应该还有没发现的问题...