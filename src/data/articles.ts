export interface Article {
    id: number;
    title: string;
    date: string;
    author: string;
    summary?: string;
    contentSections: { title: string; text: string; code?: string }[];
    tags: string[];
  }
  
  const articlesData: Article[] = [
    {
      id: 1,
      title: "理解 JavaScript 闭包",
      date: "2030-08-10",
      author: "张三",
      summary: "闭包是JavaScript中最重要的概念之一，本文带你彻底理解闭包原理及应用。",
      contentSections: [
        { title: "什么是闭包？", text: "闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式是在一个函数内部创建另一个函数。" },
        { title: "实际应用场景", text: "闭包常用于模块化、数据私有化、函数柯里化等场景。例如，可以使用闭包创建私有变量：", code: `function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}` }
      ],
      tags: ["JavaScript", "前端"]
    },
    {
      id: 2,
      title: "CSS Grid 入门",
      date: "2030-08-15",
      author: "张三",
      summary: "Grid布局是现代CSS布局神器，本文带你掌握二维布局的核心。",
      contentSections: [
        { title: "什么是Grid布局？", text: "Grid 是二维布局系统，可同时处理行和列。通过将容器定义为网格，可以轻松地将子元素放置到任何你想要的位置。" }
      ],
      tags: ["CSS", "布局"]
    },
    {
        id: 3,
        title: "钩子函数",
        date: "2030-08-15",
        author: "张三",
        contentSections: [
          {
            title: "什么是钩子函数？",
            text: "钩子函数（Hook Function）是一种编程技术，它允许开发者在特定的事件发生时或程序执行到特定阶段时，插入并执行自定义的代码，以此来监控、修改或扩展原有程序或系统的行为。"
          }
        ],
        tags: ["CSS", "布局"]
      },
      {
        id: 4,
        title: "CSS Grid 精通",
        date: "2030-08-15",
        author: "张三",
        contentSections: [
          {
            title: "什么是 CSS Grid？",
            text: "CSS Grid 布局（Grid Layout）是 CSS 中最强大的二维布局系统。与一维的 Flexbox 不同，Grid 允许开发者同时在行和列上控制元素的位置。它引入了网格容器、网格项、网格线等概念，使得构建复杂的网页布局（如整体页面结构或组件内部排列）变得前所未有的简单和直观，彻底告别了传统浮动布局的繁琐。"
          }
        ],
        tags: ["CSS", "布局", "Grid", "前端开发"]
      },
      {
        id: 5,
        title: "深入理解 React Server Components",
        date: "2030-09-20",
        author: "张三",
        contentSections: [
         {
           title: "什么是 React Server Components？",
           text: "React Server Components (RSC) 是一种新的 React 架构模式，它允许开发者构建在服务器和客户端之间无缝协作的应用。其核心思想是将组件的渲染工作放在服务器上完成，然后将轻量级的序列化结果发送给客户端。这不仅能显著减少客户端的 JavaScript 捆绑包大小，提升首次加载性能，还能让组件直接访问后端资源（如数据库），从而简化数据获取逻辑，实现更优的用户体验。"
          }
         ],
          tags: ["React", "前端架构", "性能优化", "服务端渲染"]
      }
  ];
  
  export function getArticles(): Article[] {
    return articlesData;
  }
  
  export function getArticleById(id: number): Article | undefined {
    return articlesData.find(article => article.id === id);
  }