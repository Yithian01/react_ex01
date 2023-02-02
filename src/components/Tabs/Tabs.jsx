//상위
import React from 'react';
import ProductData from './../../data/productData.json';
import TabUl from './TabUl';
import { useState } from 'react';   // 현재 데이터값을 버튼을 누를 때마다 바뀌게 하기 위해 
import './tabs.css'

const Tabs = () => {
    const tabData = ProductData;
    const [dataIndex, setDataIndex] = useState(0);  // 초기 0번의 데이터값을 가져오기 위해 
    const handleTab = (e,index)=> { // 이 함수가 호출되면 값이 올라가야한다.
        e.preventDefault(); // eventhandler 이기 때문에 앵커태그를 지워주는 함수 버튼으로 했기 때문에 
        setDataIndex(index);
    }
    // 현재 인덱스가 같은 인덱스를 가지는 정보.
    const dataUl = tabData.filter((item,index)=> index === dataIndex)
    return (
        <div className='tab'>
            <div className='tab-title'>
                {
                    tabData.map((item,index)=><button onClick={(e)=>handleTab(e,index)} className={dataIndex === index ? 'btn active':'btn'} key={item.id}>{item.title}</button>)
                }
            </div>
            <div className='tab-body'>
                   {
                    //하나의 항목에 있는 정보들을 data의 매개변수와 인덱스 값을 TabUl로 보낸다.
                     dataUl.map((data,index)=><TabUl key ={data.id} data={data}/>)
                     
                   }
            </div>
        </div>
    );
};

export default Tabs;