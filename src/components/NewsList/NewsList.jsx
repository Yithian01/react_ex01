import React from 'react';
import './newsList.css'
import news from './../../data/news.json'
import NewsItem from './NewsItem';

const NewsList = () => {
    const newsData = news;
    return (
        <div>
            <ul className='news-list'>
                {
                    newsData.map(news => {
                        return (
                           <NewsItem title={news.title} info={news.info} img={news.imgSrc}
                           key ={news.id} />
                        )
                    })
                }
            </ul>
            
        </div>
    );
};

export default NewsList;



// props 란 propperties
// 상위 컴포넌트에서 하위 컴포넌트로 단방향 데이터 전달
// 하위 컴포넌트에서 전달받은 props 수정할 수  없다(읽기 전용)

