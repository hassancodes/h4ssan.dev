function App(){
  return <>
  <p>h4ssan.dev</p>
  </>
}


export default App;

// import { useState } from 'react';

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   const addTodo = () => {
//     if (!input) return;
//     setTodos([...todos, input]);
//     setInput('');
//   };

//   return (
//     <>
//       <input value={input} onChange={e => setInput(e.target.value)} />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((t, i) => <li key={i}>{t}</li>)}
//       </ul>
//     </>
//   );
// }


// export default TodoApp;