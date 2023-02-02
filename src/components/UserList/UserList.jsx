import React from 'react';
import userData from './../../data/userData.json'
import './userList.css'

const UserList = () => {
    const users = userData;
    return (
        <div>
            <ul className='user-lists'>
                {
                    users.map(user => {
                        return (
                            <li key={user.id} className="user-list">
                            <img src={user.photo} alt={user.username} />
                            <span className='user-name'>{user.username}</span>
                            {user.online?  <span className='online on'>접속 중</span> : <span className='online off'>오프라인</span> }
                            

                           {/* {user.online&&<span className='online on'>접속 중</span>}{/* 참일 때만 보이게 하고 싶을 때 */}
                             </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default UserList;