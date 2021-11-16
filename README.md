# cloud-mall-front

## Build Setup
项目包管理采用 yarn,需要使用yarn安装依赖，npm安装可能会造成未知的bug
```bash
# 安装依赖
$ yarn install

# 项目运行在 localhost:3000
$ yarn dev

# 打包及运行命令
$ yarn build
$ yarn start

## 页面布局
1. 全局版心类名 .container  /assets/scss/global.scss
2. 可多处复用类名也写在 /assets/scss/global.scss

## 新增页面/新增路由
1. 方便以后移动端适配，路由必须带有 pc 或 mb,  pc:电脑端 mb:移动端
2. 具体可参考已有路由配置

## 代码格式规范
1. vscode 安装插件 Prettier ESLint 用来格式化代码，保持代码风格统一
