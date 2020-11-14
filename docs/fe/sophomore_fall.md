# 大二上学期

> 编写中

> 大二上学期在前端方向主要的目标是，掌握网络基础（HTTP/TCP/Socket编程），加强 JavaScript 的功底，学习 TypeScript。使用原生 JS/TS 编写一些轮子，加强代码能力。深入理解 React 相关技术栈，系统学习 CSS。

> 大二的节奏主要靠自己把控。总的来说，知道的越多，要学的东西就越多，所以其实是一个压力越来越大的过程。但也是一个探索越来越深入的过程。大二是很容易放弃，很容易放松的阶段，这个时候主要就靠自己的自控力。如果在这个阶段可以扎实的学一些东西，其实就已经有了以后工作的能力了。大学剩下的时间，可以用来研究一些更底层和深入的东西。


## 任务一：CSAPP 网络相关章节（高优先级）

通过这个任务，我们会接触 Unix 系统编程，了解信号量，系统 I/O，Socket 编程，并发编程相关知识，可以自己编写出一个简单的 HTTP Server，并通过 CGI 接口调用程序返回动态结果。

这几个章节里讲到的其实就是服务端开发的基石，理解了这些，就可以理解服务端的原理，从而对整个 Web 开发有一个全貌的了解。同时 HTTP 协议对于前端工程师来说，也是息息相关的。通过这个任务可以更好的理解 HTTP 协议。

### 子任务1（预备）

完成 CSAPP 第7章的学习。Lab 选做。

### 子任务2

阅读 CSAPP 第 10，11，12章。11 和 12 章主要是网络编程，介绍 HTTP 协议，Socket 编程和 Web Server 的基本工作原理。以及 CGI 这种协议。12 章主要介绍了主流的并发实现方式以及并发中的一些概念，比如临界区，锁。

阅读这些章节，思考课后练习。对于 11 章中的简单的 HTTP server，把源码下载并运行，根据课后的题目对代码进行修改。

对于 HTTP server 的原理，和这些章节中的知识点，写一些思考的博客。


## 任务二：JS/TS 精进（高优先级）


### JavaScript

目标：成为 JavaScript Ninja！

这个目标是说，我们要对 JS 的特性和语法了如指掌，并且可以写出 Idiomatic 的 JS 代码。符合 JS 特性的代码。简单的说，就是利用 JS 的一等函数的特性，围绕函数，结合一些函数式风格的概念（副作用，纯函数，组合优于继承），来编写代码。

+ [《Eloquent JavaScript》](https://eloquentjavascript.net/) 如果大一没有系统看完，推荐再好好看一下，做完里面的练习。如果看完了，也推荐把函数，对象，高阶函数，等等章节再仔细阅读一下。可以写一些笔记。
+ [《JS 忍者秘籍》](https://detail.tmall.com/item.htm?spm=a230r.1.14.4.4048133bbjlB5d&id=566464604411&ns=1&abbucket=2) 英文版请在团队内部咨询获取。这本书需要精读。读书笔记参考[这里](https://zxc0328.github.io/diary/2018/01/2018-01-08.html)
+ [《你不知道的 JS》](http://product.dangdang.com/27883708.html) 这本书其实优先级比较低，上中下推荐按顺序阅读，没有时间的话可以主要看上册。


### Idiomatic JS（地道的 JS）

看完了上面的书，其实你已经对 Idiomatic JS 有了一定的理解了。下面还有一些材料可以辅助你理解：

+ [学习JavaScript函数式编程 - JSUnconf 2016](https://www.youtube.com/watch?v=e-5obm1G_FY&list=LLHdx8Qwo6uxw0fj3gQ5yeTg&index=51)
+ [Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)

### TypeScript

TypeScript 是基于 JS 进行拓展的强类型语言，他包含了 JS 本身，是 JS 的超集。TS 最终编译到 JS
执行。目前 TS 在前端生态中已经占据了越来越重要的位置。强类型的静态编译型语言是构建大型应用，保证软件质量的必要条件，因此学习 TS 在当下已经是一个必修课了。

+ [《官方手册》](https://www.typescriptlang.org/docs/handbook/basic-types.html)
+ [《TypeScript Deep Dive》](https://basarat.gitbooks.io/typescript/docs/getting-started.html)

下面是一些使用技巧：

+ [《巧用 TypeScript》](https://zhuanlan.zhihu.com/p/39620591)
+ [《巧用 Typescript (二)》](https://zhuanlan.zhihu.com/p/64423022)

### 练习！

首先 EloquentJS 里面的练习都是不错的。此外，还有一些不错的资源：


+ [基于TypeScript从零重构axios](https://coding.imooc.com/class/330.html)（视频网盘链接团队内获取）
+ [ScriptOJ](http://scriptoj.mangojuice.top/problems?tag=all) 里面有很多经典的 JS 编程题

> 注：这里可能需要梳理一下常见的 JS 原生手写题目。

常见的：

+ 实现 Event Emitter
+ 实现防抖/节流
+ ES5 实现 Class
+ 实现 Bind 
+ 实现简单的 MVVM
+ 实现字符串模板引擎
+ 实现 Promise

## 任务三：React 相关技术学习（中优先级）

React 相关的，因为更新的很快，而且社区里的最佳实践层出不穷，所以看书的部分比较少，看代码的部分比较多。

书籍：

+ [React 实战：设计模式和最佳实践](https://juejin.im/book/5ba42844f265da0a8a6aa5e9)
+ [深入React技术栈](http://product.dangdang.com/24135483.html)


相关技术：

下面列了 React 生态下常用的相关技术，可以浏览一下，有一个大致的了解：

+ [React-router](https://reacttraining.com/react-router/web) React 社区最热门的 router 实现。
+ [Create-react-app](https://github.com/facebook/create-react-app) React 的官方脚手架，用的非常广泛。
+ [Redux](https://redux.js.org/) 最流行的状态管理方案。
+ [Redux-saga](https://github.com/redux-saga/redux-saga) Redux 中使用 saga 来隔离副作用，大型 Redux 应用必备。
+ [MobX](https://github.com/mobxjs/mobx) 和 Redux 齐名的状态管理方案，不同于单向数据流，MobX 提供了类似 Vue 的依赖搜集和数据绑定机制。
+ [dvajs](https://dvajs.com/) 集合了 Redux/React-router/Redux-saga 的应用框架，并提供了状态管理层的模块机制。在真实生产中，我们往往不会直接使用 Redux 而是使用 dva 之类的框架来帮助我们快速的进行开发。
+ [umijs](https://umijs.org/) umijs 是一个快速搭建中后台应用的框架/工具，在使用蚂蚁系技术（Ant design/dva）搭建管理后台时，umijs 是最好的选择。umijs 还封装了构建工具，类似 Create-react-app，但更加的强大。

React 关键知识点学习：

// TODO

官网文档

+ Hooks
+ ?

源码学习：

+ [Hyperapp](https://github.com/jorgebucaran/hyperapp) 极简的 React 风格，基于 virtual DOM 的组件框架。看懂他的源码就可以大致搞懂 React 的工作流程，以及 Virtual DOM 的具体原理。
+ [Redux](https://redux.js.org/) Redux 的源码其实很简单。可以搜 Redux 源码分析，或者实现一个 Redux 这样的文章参考。
+ [React-redux](https://react-redux.js.org/) React-redux 涉及很多精妙的设计，将 Redux 和 React 组件绑定起来，非常值得一看。也对 Redux 的性能优化等等有帮助。
+ [Tarojs](https://github.com/NervJS/taro) Taro 是一个类 React 的实现，对于理解 React 内部实现有帮助。同时也是一个不错的开源项目，值得研究。


## 任务四：CSS 系统学习（中优先级）

CSS 其实很少有人比较系统的掌握。当下的时代，Flex 等等新布局的推出，浏览器兼容性的优化，不再要求每一个前端工程师都是 CSS 大师。但对 CSS 有系统了解，对于今后走职业前端道路（会接触页面重构之类的工作）的同学来说，是有很大的好处的。会让你理解浏览器渲染 CSS 的一些规则，不再盲目的尝试，而是一步到位。

+ [《CSS权威指南（第四版）》](http://product.dangdang.com/27380293.html) 不用全部看，不现实，根据自己的需求看。比如对布局想系统了解就看 BFC 和 IFC，还有 Flex 相关的章节。但最基础的一些章节必须要看，比如选择器，优先级之类的。
+ [《CSS in Depth》](https://www.manning.com/books/css-in-depth) 电子版团队内获取
+ [《CSS 世界》](http://product.dangdang.com/25206611.html)


## 拓展：函数式编程（有多余时间，推荐学习）

函数式编程是区别于传统的面向对象编程的一种范式。因为前端主要使用的 JavaScript 是带有一些函数式特性的，因此前端同学也经常会接触到一下函数式的概念。同时前端生态圈里面的很多技术都是来源于函数式圈子。所以系统的学习函数式编程是很有必要的。

### 函数式 + JS

用 JS 为例子介绍函数式编程，相对来说，比较适合前端同学：

+ [《JavaScript函数式编程指南》](http://product.dangdang.com/25286300.html) 推荐
+ [Functional-Light-JS](https://github.com/getify/Functional-Light-JS)
+ [前端函数式攻城指南](http://product.dangdang.com/24038062.html) 偏 Clojure 风格，比较硬核

### 正统的函数式：Haskell

如果对函数式有很大的兴趣，可以学一门正统的函数式语言，比如 Haskell。

+ [Haskell趣学指南](http://product.dangdang.com/23399176.html)


## 拓展：渲染引擎 && JS 引擎工作原理（有多余时间，推荐学习）

对前端工程师来说，了解浏览器的工作原理，包括渲染引擎和 JS 引擎的原理，对于理解 CSS 和 JS 都大有好处。

对这方面有兴趣的同学，可以看以下的资料：

+ [重学前端](https://time.geekbang.org/column/intro/154) 资源团队内部咨询

> 可以补上更多资料








