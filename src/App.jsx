import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Todos from './components/Todos'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound'

function App() {  
  let initTodos = [];
  if(localStorage.getItem("todos")===null){
    initTodos=[];
  }else{
    initTodos = JSON.parse(localStorage.getItem("todos"))
  }

  const onDeleteTodoItem = (todoObj)=>{
    console.log("I am deleting this todo item ",todoObj," from whole list.")
    // This way doesn't work in react
    // let index = listOfTodos.indexOf(todoObj)
    // console.log("Index of above obj is ",index)
    // listOfTodos.splice(index,1)
    // console.log("Successfully deleted.")

    setTodos(todos.filter((obj)=>{
      return obj!==todoObj
    }))
  }

  // const liveProfileMenu = ()=>{
  //   alert("I'm invoked.")
  //   // Mobile menu toggle
  //   var profileButton = document.getElementById("user-menu-button");
  //   var profileMenu = document.getElementById('menu');
  //   profileButton.addEventListener("click", function () {
  //     if (profileMenu.hasAttribute("hidden")) {
  //       console.log("Already had a hidden tag")
  //       profileMenu.removeAttribute("hidden");
  //       profileButton.setAttribute("aria-expanded", "true");
  //     } else {
  //       profileMenu.setAttribute("hidden", "");
  //       profileButton.setAttribute("aria-expanded", "false");
  //     }
  //   });
  // }

  const insertNewTodo = (name,description)=>{
    // console.log("I'm an informer from App.js . I Received name: ",name," description: ",description)
    let sno = 0;
    if(todos.length === 0){
      sno = 1;
    }else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      name: name,
      Description: description      
    }
    console.log(newTodo)
    setTodos([...todos,newTodo]);
  }

//   const [todos, setTodos] = useState([{
//     sno:1,
//     name:"Wake Up",
//     Description:"Day starts with this activity"
// },{
//     sno:2,
//     name:"Bresh Your Teeth",
//     Description:"It is to clean your mouth and teeth"
// },{
//     sno:3,
//     name:"Bath",
//     Description:"This activity is to do clean our body"
// },{
//   sno:4,
//   name:"Walking",
//   Description:"This is to burn some calories in our body."
// }]);




const [todos, setTodos] = useState(initTodos);
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <>
    <Router>
      {/* <Navbar title="Todos Wala" toggleProfileMenu={liveProfileMenu} /> */}
      <Navbar title="Todos Wala" />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos todos={todos} onDelete={onDeleteTodoItem}/>} />
          <Route path="/addTodo" element={<AddTodo addUserInputTodo={insertNewTodo}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer title="Todos Wala" />
    </Router>
    </>
  )
}

export default App
