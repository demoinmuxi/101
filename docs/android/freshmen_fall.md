# 大一上学期

Android 是移动开发的一大巨头，从 Android 1.0 到现在的11.0，功能不断的完善，还有很多各地大牛编写的开源库也让安卓开发变得更高效更炫酷。 总之，欢迎打开新世界的大门~
对于一个 developer，可以多去逛逛那些能够 get 各种技术最新动态的网站。Android 是开源的，新技术出得也比较快，多关注这些网站就像不定期淘金，可以了解国外最新的 Android 技术，还可以提问、看 demo，事半功倍。

## 开发环境

* ``Linux``或者``MacOS`` ： 虽然现在 Windows 开发也还行，但是不是所有的生产力工具都有 Windows 版本的。 Linux  可以使用 Ubuntu 如何给自己的电脑安装 Ubuntu 然后翻墙

  有关 MacBook Pro 的好处： 相对客观的说，虽然 Linux 更加适合后期的学习，但是 MBP 以及上面的操作系统无疑增大了生产力，而且 Ubuntu 对一些电脑的兼容性可能不算太好，造成更快的电池损耗等。推荐的电脑的配置是 8G 以上的内存，256G 以上的硬盘，如果是双系统的同学可以分配 100G 左右给 Ubuntu。

* git 工具和 GitHub：git工作流可以大大提升工作效率 然后 GitHub能让你学习全世界的好代码，参与和发布自己的项目给千千万万的程序员使用 是不是特别酷! 

* Last but not the Least！建一个自己的博客或者选择一个好的笔记软件！也可以在GitHub上创建一个仓库，存放自己的笔记。笔记软件可以使用常用的编辑器。从初学者开始记录所学和自己的想法,以后不仅很好翻越复习(安卓的知识真的很杂很多)，对拿offer也很有帮助。Talk is cheap, show me your code.

## 详细计划

### 预备期

+ 安装Ubuntu系统（建议可以先自己搜索尝试一下，然后再去找学长帮忙）（W1）
+ 注册github账号、学习使用简单的git命令进行操作（W1）
+ C语言学习
  + week 1
    + **准备《明解C语言》、安装Dev cpp**
    + 《明解C语言》第1-2章
  + week 2
    + 《明解C语言》第3-5章
  + week 3
    + 《明解C语言》第6-7章
  + week 4
    + 复习、准备测试

### week 5

+ **提前准备：**
  + 参考教材：《Java 核心技术 卷 I（第11版）》
  + JDK: 1.8
  + IDE: IntelliJ IDEA

+ Java 学习：《核心技术》第 3 章、第 4 章
  + 第 3 章是 Java 的基本知识，和 C 语言的相关内容有一定的重复，所以不需要很仔细的看，重点注意一下 C 语言和 Java 中不同的地方
  + 第 4 章是 Java 入门的关键，一定要认真阅读，重点了解：**面向对象程序设计**、**类与对象**、**自定义类**、**包**等基本概念
  + 训练：[1-10](https://muxi-studio.github.io/101/android/appendix_java_quiz.html)

### week 6

+ Java 学习
  + 《核心技术》第6、7章。
    + 第 5 章：重点 **继承**、**超类和子类**、**多态**、**抽象类**、**泛型数组列表**、**Object类**等。
    + 第 6 章的 6.1、6.2、6.3： 重点 **接口**、 **回调**、**内部类**、**匿名内部类**等。
  + 训练：[11-16](https://muxi-studio.github.io/101/android/appendix_java_quiz.html)

### week 7

+ Java 学习
  - 《核心技术》第7章。
    - 重点：**异常**、**日志**、**调试**
  - 做题
    - [Quiz](https://github.com/Muxi-Studio/Android-Wiki/blob/master/Java101/JavaQuiz.md) Java特性，第二题，并构造一个自定义异常，在异常发生时输出自定义的一段日志，以及断点到异常发生时的堆栈都有哪些
+ Android学习
  + **提前准备**
    + 参考教材《Android 编程权威指南（第3版）》（从第四版开始就是 Kotlin Base）
    + IDE: Android Studio
    + 模拟器：原生模拟器 或 GenyMotion
  + 学习内容
    + 《权威指南》第一章 1.1~1.4，跟随案例写 GeoQuiz
      + 重点：**简单布局和基本属性**、**Androidstudio的使用**
    + 学习使用 LinearLayout 和 RelativeLayout，并合理使用两种布局完成一个简单的计算器界面

### week 8

- Java 学习
  - 《核心技术》第8章、第9章、第14章可以慢慢看，但是一定要在本学期结束之前看完。
  - 如果觉得 PAT 乙级太简单的同学，可以开始在 [leetcode](https://leetcode-cn.com/problemset/all/) 上系统的刷题了，选择 C 或者 Java 可能是当前不错的选择。
- Android 学习
    - 《权威指南》第1章的后半部分和第2章的内容，跟随案例写GeoQuiz。
         - 重点：**监听器**、**Activity**、**MVC设计模式**、**在模拟器和物理设备上运行代码**、**Button的基本属性和使用方法**、**Toast的使用**等
    - 完成挑战练习 1.11、2.7、2.8

### week 9

+ Android 学习
  + 《权威指南》第3章、第4章，跟随案例写 GeoQuiz。
    + 重点：**Activity的生命周期**、**使用日志**、**使用Bundle保存数据**、**多种调试应用的方法**
  + 完成挑战练习 3.7、3.8

### week 10

+ Android 学习
  + 《权威指南》第5章、第6章，跟随案例写 GeoQuiz。
    + 重点：**显式Intent的基本使用和传递数据的方法**、**在manifest.xml中声明**、**Android SDK**、**compileSdkVersion、minSdkVersion、targetSdkVersion的定义与区别**
  + 完成挑战练习：5.5的前两个漏洞，6.5

### week 11

+ Android学习
  + 《权威指南》第7-9章，跟随案例写CriminalIntent
    + 重点：**fragment的基本使用和相关知识**、**RecyclerView的使用方法**、**使用图形布局工具编辑布局**、**ConstraintLayout的基本使用**、**基本的布局属性**、
  + 完成挑战练习：8.8、9.5

### week 12

+ Android学习
  + 《权威指南》第10-13章，跟随案例写CriminalIntent
    + 重点：**使用argument传递数据**、**ViewPager的使用方法**、**fragment间的数据传递**、**在顶部栏添加menu**
  + 完成挑战练习：10.6、11.5、11.6、13.7

### week 13

+ Android学习

  + 《权威指南》第14-16章，跟随案例写CriminalIntent
    + 重点：**数据库的相关知识和SQLite的使用**、**隐式intent的组成和基本使用**、**使用隐式intent拍照**、**保存照片和加载本地照片**
  + 完成挑战练习：14.8、15.6、16.6、16.7

### week 14

+ Android学习
  + 《权威指南》第17章，写完CriminalIntent

  + 完成挑战练习：17.4

### 冬令营

+ 《权威指南》收尾

+ #### “网络数据处理”

  学习顺序为『阮一峰对计算机网络协议、RESTful架构的文章』->『图解HTTP』->『了解Json』->『尝试POSTMAN对豆瓣的多个API发送GET、POST请求』->

  在此阶段需要具备的知识和工具

  JSONView 这个Chrome插件可以帮助你最直接得看到Get方法获得的Json数据（偶尔快速看一下）
PostMan这个Chrome插件可以帮助你熟悉和测试使用Http的各种姿势（开发常用）
  强烈建议你们买一本图解HTTP，预计你们再慢2-3天也能看完，看完此书做这个任务有很好的帮助，对网络方面的东西也会有点启蒙
  Android-Json方面，使用Google自家的Gson来解析Json数据
  Android-Http方面，使用原生的HttpUrlConnection就可以，不要用Apache的HttpClient，被弃用了；后续需要学习一下Square的OkHttp，这个是现在效率最好的HTTP库；最后，平时常用的有Google的Volley，Square的Retrofit，这些都是基于上面的三个HTTP库封装的，主要做了线程优化，Restful优化等等，当然这些都是后话~
  『使用HttpUrlConnection（需要子线程）和new Thread() 做简单的网络请求』->『使用AsyncTask替换直接new Thread()，并把结果刷新到UI上』
  
  在此阶段需要具备的知识

  关于线程和进程的初步理解，http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html
上面那些看完，就要写一个网络请求了；网络请求需要在子线程中运行，不能在主线程中运行，主要原因会阻塞主线程对UI的处理，Android4.0以上直接会报错。
