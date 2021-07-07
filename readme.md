格式化vue文件
If you want to run eslint from the command line, make sure you include the .vue extension using the --ext option (opens new window)or a glob pattern, because ESLint targets only .js files by default.
example:
eslint --ext .js,.vue src
eslint "src/**/*.{js,vue}"

# develop
```
npm run dev
```
@port 8086
# .Vue 文件内部的样式或者分离样式
如果一个组件是业务组件，那么在 Vue 文件内部写样式，但是这样会让主题的切换变得困难，因为一些基础变量的来源难以控制。所以还是要把样式抽离出来，这样的话又要给每一个组件增加命名空间...