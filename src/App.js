import './App.css';
import MovieList from './components/MoveList/MovieList';
import UserList from './components/UserList/UserList';
import { useState } from 'react';   // 미리 만들어져있는 것 훅이라고 한다.
import NewsList from './components/NewsList/NewsList';
import Tabs from './components/Tabs/Tabs'


function App() { 
  const [num,setNum] = useState(0); //  기본값 ,setXxx 초기화
  const [name,setName] = useState('미니');
  const [isOn, setIsOn] = useState(false);
  const plus = ()=>{
    setNum (number => number + 1)   // setNum의 값을 1을 올리고 num에 넣어준다.
  }
  const minus = () => {
    setNum(number=> number-1)
  }

  const changeName = ()=>{
    setName(name === '미니' ? "미키":'미니')
  }
  const showUserList =() => {
    setIsOn(isOn => !isOn)
  }
  return (
    <div className="App">
      <Tabs/>
      <NewsList />
      <div className='count-box'>
        <h2>{num}</h2>
        <button onClick={plus}>1씩 증가</button>
        <button onClick={minus}>1씩 감소</button>
      </div>
      <div className='name-box'>
        <h2>{name}</h2>
        <button onClick={changeName}>바꾼다.</button>
      </div>
      <button onClick={showUserList}>레드 리부트</button>
      <div className={isOn ? 'userListBox on':'userListBox off'}>
        <UserList/> 
      </div>
      <MovieList/>
    </div>
  );
}

export default App;

// state 상태값 useState 컨포넌트 내부에서 상태관리
// props 상위 컴포넌트에서 전달 받은 상태
