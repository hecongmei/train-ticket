import React, {
  createContext,
  Component,
  lazy,
  Suspense,
  PureComponent,
  memo,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
} from 'react'
import './App.css'

let idSeq = Date.now()

const TodoItem = memo(function TodoItem(props) {
  const {
    todo: { id, text, complete },
    toggleTodo,
    removeTodo
  } = props

  const onChange = () => {
    toggleTodo(id)
  }
  const onRemove = () => {
    removeTodo(id)
  }

  return (
    <li className="todo-item">
      <input type="checkbox" onChange={onChange} checked={complete} />
      <label className={complete ? 'complete' : ''}>{text}</label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  )
})

// 列表区
const Todos = memo(function Todos(props) {
  const { todos, toggleTodo, removeTodo } = props
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        )
      })}
    </ul>
  )
})

// 输入区
const Control = memo(function Control(props) {
  const { addTodo } = props
  const inputRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    const newText = inputRef.current.value.trim()
    if (newText.length === 0) {
      return
    }
    addTodo({
      id: ++idSeq,
      text: newText,
      complete: false
    })
    inputRef.current.value = ''
  }

  return (
    <div className="control">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="new-todo"
          placeholder="What need to be done?"
        />
      </form>
    </div>
  )
})

const LS_KEY = '_$-todos_'
function TodoList() {
  const [todos, setTodos] = useState([])
  console.log(todos, '---')

  const addTodo = useCallback(todo => {
    setTodos(todos => [...todos, todo])
  }, [])

  const removeTodo = useCallback(id => {
    setTodos(todos =>
      todos.filter(todo => {
        return todo.id !== id
      })
    )
  }, [])

  const toggleTodo = useCallback(id => {
    setTodos(todos =>
      todos.map(todo => {
        return todo.id === id
          ? {
              ...todo,
              complete: !todo.complete
            }
          : todo
      })
    )
  }, [])

  useEffect(() => {
    localStorage.getItem(LS_KEY || [])
    setTodos(todos)
  }, [])
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo-list">
      <Control addTodo={addTodo} />
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos} />
    </div>
  )
}

export default TodoList
