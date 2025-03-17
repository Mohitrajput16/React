import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos.js";
import { Footer } from "./MyComponents/Footer.js";
import About from "./MyComponents/About";
import AddTodo from "./MyComponents/AddTodo.js";

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // Function to delete a todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  // Function to add a new todo
  const addTodo = (title, desc) => {
    console.log("Adding this todo:", title, desc);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  // State for Todos (Load from localStorage)
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route */}
        <Route 
          exact 
          path="/" 
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } 
        />

        {/* About Page Route */}
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import Header from "./MyComponents/Header";
// import { Todos } from "./MyComponents/Todos.js";
// import { Footer } from "./MyComponents/Footer.js";
// import About from "./MyComponents/About";
// import AddTodo from "./MyComponents/AddTodo.js";

// import React, { useState, useEffect } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   const onDelete = (todo) => {
//     setTodos(todos.filter((e) => {
//       return e !== todo;
//     }));
//   }
//   const addTodo = (title, desc) => {
//     console.log("I am adding this todo", title, desc)
//     let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;

//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     }
//     setTodos([...todos, myTodo]);
//     console.log(myTodo);

//   }
//   const [todos, setTodos] = useState(() => {
//     const storedTodos = localStorage.getItem("todos");
//     return storedTodos ? JSON.parse(storedTodos) : [
//       {
//         sno: 1,
//         title: "go to colloge",
//         desc: "dopjdewiofhwe0ifqe0fq0"
//       },
//       {
//         sno: 2,
//         title: "go to market",
//         desc: "dopjdewiofhwe0ifqe0fq0"
//       },
//       {
//         sno: 3,
//         title: "go to pheonix",
//         desc: "dopjdewiofhwe0ifqe0fq0"
//       },
//       {
//         sno: 4,
//         title: "go to mall",
//         desc: "dopjdewiofhwe0ifqe0fq0"
//       }
//     ];
//   });

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <>
//       <Router>
//         <Header />
//           <Switch>
//           <Route exact path="/" render={() => {
//             return (
//               <div>
//                 <AddTodo addTodo={addTodo} />
//                 <Todos todos={todos} onDelete={onDelete} />
//               </div>)
//           }}>
//           </Route>

//           <Route exact path="/about">
//             <About />
//           </Route>

//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   );
// }
// // import logo from './logo.svg';
// import './App.css';
// import Header from "./MyComponents/Header";
// import { Todos } from "./MyComponents/Todos.js";
// import { Footer } from "./MyComponents/Footer.js";
// import About from "./MyComponents/About";
// import AddTodo from "./MyComponents/AddTodo.js";

// import React, { useState, useEffect } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   const onDelete = (todo) => {
//     setTodos(todos.filter((e) => {
//       return e !== todo;
//     }));
//   }
//   const addTodo = (title, desc) => {
//     console.log("I am adding this todo", title, desc)
//     let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;

//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     }
//     setTodos([...todos, myTodo]);
//     console.log(myTodo);

//   }
//   const [todos, setTodos] = useState(() => {
//     const storedTodos = localStorage.getItem("todos");
//     return storedTodos ? JSON.parse(storedTodos) : [
//       {
//         sno: 1,
//         title: "go to colloge",
//         desc: "dopjdewiofhwe0ifqe0fq0"
//       },
//       {
//         sno: 2,
//         title: "go to market",
//         desc: "dopjdewiofhwe0ifqe0fq0"
//       },
//       {
//         sno: 3,
//         title: "go to pheonix",
//         desc: "dopjdewiofhwe0ifqe0fq0"
//       },
//       {
//         sno: 4,
//         title: "go to mall",
//         desc: "dopjdewiofhwe0ifqe0fq0"
//       }
//     ];
//   });

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route exact path="/" element={
//               <>
//                 <AddTodo addTodo={addTodo} />
//                 <Todos todos={todos} onDelete={onDelete} />
//               </>
//           }>
//           </Route>

//           <Route exact path="/about" element={<About />}>
//           </Route>

//         </Routes>
//         <AddTodo addTodo={addTodo} />
//         <Todos todos={todos} onDelete={onDelete} />
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;
