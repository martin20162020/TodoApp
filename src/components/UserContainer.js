import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/users/userActions'
import { fetchTodos } from '../redux/usersTodos/userTodosActions';


const UserContainer = ({userData, fetchUsers, userTodos, fetchTodos}) => {
    useEffect(()=>{
        fetchUsers()
    }, [fetchUsers])

    useEffect(()=>{
        fetchTodos()
    }, [fetchTodos])

    const userContainers = userData.users.map((user)=> user)

     const userTodosContainer = userTodos.userTodos.filter((userTodos)=>{
        if (userTodos.id < 9){
            return (userTodos)
        }
     })

    return (
        <div className='todo-container'>
            <h2>See what others are posting</h2>
            <div>
                {userTodosContainer.map((userTodo)=>{
                    return (
                        
                        <div className="todo" key={userTodo.id}>
                            <div className="authorAnditem">
                                {userContainers[userTodo.id] !== undefined ? 
                                    <div>
                                        <li className={`${userTodo.completed ? "todo-item completed": 'todo-item'}`}>{userTodo.title}</li>
                                        <h3 className="author">{`Posted By: ${userContainers[userTodo.id].username}`}</h3>
                                    </div>
                                : 'fetching data...'}
                            </div>
                        </div>
                        )
    })}
            </div>
            

        </div>
        
    )
    }

const mapStateToProps = state =>{ 
    return {
        userData: state.users,
        userTodos: state.userTodos
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers: () =>dispatch(fetchUsers()),
        fetchTodos: ()=>dispatch(fetchTodos())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UserContainer)
