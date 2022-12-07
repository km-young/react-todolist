import React from 'react';
import CustomButton from './CustomButton';
import '../App.css'

export default function Cards(props) {
  return (
    <div className='card-container'>
      <p className='card-title'>{props.todo.title}</p>
      <p className='card-todo'>{props.todo.todo}</p>
      <div className='card-buttons'>
        <button className='card-del-bt' onClick={()=>{props.handleDelete(props.todo.id)}}>삭제하기</button>
        <button className='card-clear-bt'>완료</button>
      </div>
    </div>
  );
}