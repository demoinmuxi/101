module.exports = {
  base: "/101/",
  title: "木犀 101",
  description: "木犀沉淀的互联网学习入门指南",
  themeConfig: {
    nav: [
      { text: "前端", link: "/fe/" },
      { text: "安卓", link: "/android/" },
      { text: "后端", link: "/be/" },
      { text: "产品", link: "/product/" },
      { text: "设计", link: "/design/" },
      { text: "计算机基础", link: "/cs/" },
      { text: "软技能", link: "/soft/" },
      { text: "求职", link: "/job/" },
    ],
    // displayAllHeaders: true, // 默认值：false
    sidebar: {
      "/fe/": [
        {
          title: "前端",
          collapsable: false,
          children: ["", "freshmen_fall", "project", "freshmen_spring", "sophomore_fall"]
        }
      ],
      "/cs/": [
        {
          title: "计算机基础",
          collapsable: false,
          children: ["", "prepare", "culture", "freshmen_fall", "freshmen_spring", "c_study", "linux_study", "computer_study" ]
        }
      ],
      "/be/": [
        {
          title: "后端",
          collapsable: false,
          children: ["", "freshmen_fall", "freshmen_spring", "sophomore_fall"]
        }
      ],
      "/android/": [
        {
          title: "安卓",
          collapsable: false,
          children: ["", "freshmen_fall", "appendix_java_quiz", "appendix_reference", "appendix_tech_direction"]
        }
      ],
      "/product/": [
        {
          title: "产品",
          collapsable: false,
          children: ["", "freshmen_fall"]
        }
      ]
    }
  }
};
