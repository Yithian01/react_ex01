import React from 'react';

const NameComponent = () => {
   const name = "신짱구"
   const style ={
     color:'green',
     backgroundColor :'#ccc'
    }
    return (
        <>
            <h1 style={style}>{name}</h1>
            <h2 className='title2' >jinyoung</h2>

        </>
    );
};

export default NameComponent;

/*

jsx 
1. 여는태그 닫는태그 <h1> </h1>
   단독태그 < /> <img />
2. jsx 에서 자바스크립트 사용시 {} 
3. class = className 여기서는 className으로 사용
4. 인라인으로 css 작성 시 style = {{color:#aaa}}
5. 주석도 {}안에 넣는다. 


*/