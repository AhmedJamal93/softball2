import React from 'react';
import './ArticleCard.css';

function ArticleCard({image, title}) {
    return (
        <div className="articleCard">
            <div className="articleCard__img">
                <img src={image} alt=""/>
            </div>
            <div className="articleCard__title">
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default ArticleCard
