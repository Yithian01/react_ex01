import React from 'react';
// 이 형식을 돌려 쓴다. 상위에서 하위로 받아서 쓴다.  새로운 정보를 받아서 여기로 보내 사용한다.
const NewsItem = ({title, key , img, info}) => {    //  구조분해 할당으로 받은 key값과 같은 이름으로 받아준다.
    return (                                       // 아닐 시 props로 받고 props.XXX이런식으로 쓴다<div className=""></div>
        <li className='news-item' key={key}>
            <div className='item-img'>
                <img src={img} alt="" />
            </div>
            <div className='item-infobox'>
                <span className='info-title'>{title}</span>
                <span className='info-company'>{info}</span>
            </div>
        </li>
    );
};

export default NewsItem;