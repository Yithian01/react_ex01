//중간
import React from 'react';
import TabLi from './TabLi';



const TabUl = ({data}) => {
    const liData = data;
    return (
        <div>
            <h2 className='brand-title'>{liData.brand}</h2>
            <ul className='product-list'>
               {
                    
                    liData.images.map((imgUrl,index)=><TabLi key={index} img={imgUrl}/>)
               }
            </ul>
        </div>
    );
};

export default TabUl;