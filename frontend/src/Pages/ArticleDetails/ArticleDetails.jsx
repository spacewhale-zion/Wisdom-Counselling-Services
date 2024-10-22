import React from 'react'
import ArticleDetailHero from './ArticleDetailHero'
import ArticleDetailsMain from './ArticleDetailsMain';

function ArticleDetails() {
    const info = {
        doctorName: 'Dr John Doe', // Corrected typo from 'Dr John Dow' to 'Dr John Doe'
        articleName: 'A Guide to Choosing College'
    };
  return (
    <div>
        <ArticleDetailHero info={info}/>
        <ArticleDetailsMain Data={info}/>
    </div>
  )
}

export default ArticleDetails