import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>关于我 | 我的技术博客</title>
        <meta name="description" content="全栈工程师张三，分享前端工程化与性能优化心得。" />
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>关于我</h1>
        <div className={styles.aboutContent}>
          <p>👋 你好，我是张三，一名追求极致代码体验的全栈开发者。</p>
          <p>在多年的技术打磨中，我专注于通过工程化手段解决复杂问题，目前主要精力投入在前端性能优化与 React 生态的研究上。</p>
          <p>这个博客记录我的学习心得、实战技巧，希望能帮助到同样热爱前端的你。</p>
          {/* <p>📧 联系我：zhang.san@example.com</p> */}
        </div>
        <div>
          <p> 技术视野：我持续关注 Web 领域的新技术，如 WebAssembly、Server Components 等，致力于探索前端技术的边界。我相信，优秀的工程师应该具备广阔的技术视野，能够在不同的技术栈之间灵活切换，找到最适合当前项目的解决方案。</p>
        </div>
        <div>
          <p> 开源精神：我是一名坚定的开源支持者，不仅在日常工作中使用大量开源项目，也积极参与社区贡献。我认为开源不仅是一种技术协作方式，更是一种分享与互助的文化。通过开源，我们可以与全球开发者共同学习、共同成长。</p>
        </div>
        <div><p> 终身学习：在这个技术快速迭代的时代，保持学习的热情至关重要。我习惯每周抽出时间阅读技术书籍、浏览技术博客，也会定期参加技术会议和线上分享。学习不仅是获取新知识，更是培养解决问题的思维方式。</p></div>
        <div>
          <p> 职业追求：我希望通过自己的努力，能够构建出既美观又实用的产品，为用户带来良好的体验。同时，我也期待能够带领团队，培养更多优秀的工程师，共同推动技术的发展与进步。</p>
        </div>
        <p>📧 联系我：zhang.san@example.com</p>
      </div>
    </>
  );
};

export default AboutPage;


