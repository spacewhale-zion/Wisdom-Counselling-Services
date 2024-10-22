import React from 'react';
import {  Link } from 'react-router-dom';
import './ArticleDetail.css';

function ArticleDetailHero({info}) {


  return (
    <div className="hero-sectionArticle">
      <div className="hero-content">
        <p className="hero-counselors-text1">100% Satifaction</p>
        <p className='article-path'>
          {/* Dynamic breadcrumb navigation */}
          <Link to="/">Dr. {info.doctorName}</Link> &gt; <Link to="/articles">Article</Link> &gt; <span>{info.articleName}</span>
        </p>
      </div>
    </div>
  );
}

export default ArticleDetailHero;
