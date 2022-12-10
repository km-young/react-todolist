import React from 'react';
import CustomButton from './CustomButton';
import '../App.css';

export default function Cards(props) {
  return (
    <div className='card-container'>
      <p className='card-title'>{props.todo.title}</p>
      <p className='card-todo'>{props.todo.todo}</p>
      <div className='card-buttons'>
        <button
          className='card-del-bt'
          onClick={() => {
            props.handleDelete(props.todo.id);
          }}
        >
          삭제하기
        </button>
        {/* props.todo.isDone ? ㅇㅇ:{ props.handleComplete(props.todo.id); } */}
        <button
          className='card-clear-bt'
          onClick={() => {
            return props.todo.isDone
              ? props.handleCancel(props.todo.id)
              : props.handleComplete(props.todo.id);
          }}
        >
          {props.todo.isDone ? '취소' : '완료'}
          {/* e.target.textcontetn = '취소' 면 cancelㅇ */}
        </button>
      </div>
    </div>
  );
}
