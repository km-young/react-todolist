import {useState} from 'react';
import './App.css';
import Cards from './components/Cards';
import CustomButton from './components/CustomButton';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: '리액트 설치하기', todo: '리액트 설치', isDone: true},
    {id: 2, title: '리액트 실행하기', todo: '리액트 실행', isDone: false},
  ]);
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState('');

  const onSubmitHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      todo: todo,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };
 
  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const onCompleteHandler = (id) => {
    // 완료버튼을 누르면
    // isDone-> true로 변경
    const copyTodos = [...todos];
    // const nodes = [...id.target.parentElement.children];
    const index = todos.findIndex((todo)=>todo.id === id);
    console.log(index)
    copyTodos[index].isDone = true;
    setTodos(copyTodos);
    // 두번째 요소 완료버튼 누름 -> 두번째 라는걸 찾아야 하는데 몇번째인지 어떻게 찾을것인가.. 바꾸고 setStase를 coypuTodos 이용해서 수정.
    // 아이디가 같은애를 찾는 함수
  }

  const onCancelHandler = (id) => {
    // 취소버튼을 누르면
    // isDone-> false로 변경
    const copyTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    copyTodos[index].isDone = false;
    setTodos(copyTodos);
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
            if (todo.isDone == false) {
              return (
                <Cards
                  handleDelete={deleteTodoHandler}
                  handleComplete={onCompleteHandler}
                  handleCancel={onCancelHandler}
                  todo={todo}
                  key={todo.id}
                ></Cards>
              );
            }
          })}
        </div>
      </div>
      <div className='done'>
        <p className='font-30'>Done..!🎉</p>
        <div className='card-box'>
          {todos.map((todo) => {
            if (todo.isDone == true) {
              return (
                <Cards
                  handleDelete={deleteTodoHandler}
                  todo={todo}
                  key={todo.id}
                ></Cards>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
