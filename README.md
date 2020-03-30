## taro in wepy

一次 `wepy` 和 `taro` 通信的尝试

方便起见，将测试后的编译产物也直接放上来，直接导入即可查看效果

TODO:

- [x] 编译后的 `weapp/app.js` 中写入 `require('./taro-package/app.js')` ，使 `taro` 组件能够在 `wepy` 中使用；
- [ ] 解决 `wpy` 文件在 `config` 中引入 `taro` 组件时的报错：`Can not resolve xxx`；目前要使用 `taro` 的组件只能手动在需要引入的页面的编译后的 `xxx.json` 的 `usingComponents` 中引入 `taro` 组件编译后的产物
- [ ] 解决 `wepy` 和 `taro` 的通信问题
- [ ] 应该还有没发现的问题...