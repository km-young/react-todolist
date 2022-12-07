import {useState} from 'react';
import './App.css';
import Cards from './components/Cards';
import CustomButton from './components/CustomButton';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: '리액트 설치하기', todo: '리액트 설치'},
    {id: 2, title: '리액트 실행하기', todo: '리액트 실행'},
  ]);
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState('');

  const onSubmitHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      todo: todo,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id)
    setTodos(newTodoList)
  }

  return (
    <div>
      <div className='top-title'>
        <p className='top-title-p'>My Todo List</p>
        <p className='top-title-p'>React</p>
      </div>
      <div className='add-container'>
        <div>
          <span>제목</span>{' '}
          <input
            value={title}
            id='title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <span>내용</span>{' '}
          <input
            value={todo}
            id='todo'
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button className='add-bt' onClick={onSubmitHandler}>
          추가하기
        </button>
      </div>
      <div className='working'>
        <p className='font-30'>Working..🔥</p>
        <div className='card-box'>
          {todos.map((todo) => {
            return <Cards handleDelete={deleteTodoHandler} todo={todo} key={todo.id}></Cards>;
          })}
        </div>
      </div>
      <div className='done'>
        <p className='font-30'>Done..!🎉</p>
      </div>
    </div>
  );
}

export default App;
