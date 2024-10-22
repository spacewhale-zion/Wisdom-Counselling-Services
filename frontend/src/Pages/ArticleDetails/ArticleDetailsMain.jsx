import React, { useState } from 'react';

function ArticleDetailsMain({ Data }) {
  const articles = [
    {
      id: 1,
      title: 'Choosing the Right College: A Comprehensive Guide',
      content: `
        Choosing a college can be a daunting task, but with the right information, you can make a choice that fits you best.
        
        ### Introduction
        College is a pivotal moment in any student's life. Choosing the right college involves understanding your preferences, location, and financial ability. This guide will walk you through the necessary steps to make an informed decision.
        
        ### Key Considerations
        - **Academic programs**: Ensure the college offers your preferred program and has a reputation for it.
        - **Location**: Think about whether you want to be close to home or explore a new city.
        - **Campus culture**: Every college has a unique culture. It’s essential to find a place where you feel comfortable.
        
        ### Financial Considerations
        It's crucial to understand the financial implications of attending college. Compare tuition fees, living expenses, and available scholarships.
        
        ### Final Thoughts
        Choosing the right college isn't just about academics—it's also about finding a place where you can thrive socially and personally. Take your time to research and visit campuses before making your decision.
      `,
    },
    {
      id: 2,
      title: 'Top 10 Tips for College Admissions',
      content: `
        ### Getting Started
        The college admissions process can feel overwhelming. Here are the top 10 tips to help you get through it.
        
        - Start early
        - Gather all necessary documents
        - Prepare your personal statement
        - Focus on extracurricular activities
        
        And many more tips to help ensure success in the admissions process!
      `,
    },
    {
      id: 3,
      title: 'How to Prepare for College Life',
      content: `
        ### Pre-College Preparations
        College life can be exciting and nerve-wracking at the same time. Here's how you can prepare for the transition from high school to college.
        
        ### Budgeting
        It's important to set a budget and stick to it. Understand your living expenses and be ready to manage finances.
        
        ### Time Management
        College offers a lot more freedom, but it's crucial to develop good time management skills to balance studies and social activities.
      `,
    },
  ];

  const [activeArticle, setActiveArticle] = useState(articles[0].id);
  const activeContent = articles.find((article) => article.id === activeArticle);

  return (
    <div>
      <div className="article-details">
        <div>
          <div className="hero-sectionArticlDetailMain">
            <div className="hero-content">
              {/* Example: You could add a heading for the doctor's name or article title */}
              <p className="hero-counselors-text1">{Data.doctorName}</p>
              <span className="articleauthor">{Data.articleName}</span>
            </div>
          </div>
        </div>

        <div className="otherArticles">
          <span>Other Articles by {Data.doctorName}</span>
          {articles.map((article) => (
            <p
              key={article.id}
              className={activeArticle === article.id ? 'active' : ''}
              onClick={() => setActiveArticle(article.id)} // Set active article on click
            >
              {article.title}
            </p>
          ))}
        </div>
      </div>

      <div className="article-content">
        {/* Main article content */}
        <h2>{activeContent.title}</h2>
        <div>
          {activeContent.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p> // Render each paragraph
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleDetailsMain;
