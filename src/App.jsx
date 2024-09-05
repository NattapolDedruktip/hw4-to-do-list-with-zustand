import InputText from "./components/InputText"
import NavBarToDoList from "./components/NavBarToDoList"
import TodoList from "./components/TodoList"
import usePackStore from "./store/PackStore"
import { ToastContainer, toast } from 'react-toastify';




function App() {
  // const {arr} = usePackStore((state)=> {
  //    arr : state.arr
  // })

  return (
    <>
      <ToastContainer/>
      <NavBarToDoList/>
      <InputText/>
      <TodoList/>
    </>
    
  )
}

export default App
