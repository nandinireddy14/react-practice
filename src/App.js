// import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css'

import {Home} from './components/Home'
import { Course } from './components/Course';
import { AllCourses } from './components/AllCourses';
import { AddCourse } from './components/AddCourse';
function App() {

  // const btnHandle=()=>{
  //   toast("This is my first message")
  // };

  // const btnHandle=()=>{
  //   toast.error("Done",{position:'bottom-center'});
  // }

  const btnHandle=()=>{
    toast.success("Done",{position:'bottom-center'});
  }

  return (
  <div className="App">
  {/* <ToastContainer/>
  <h1>This is bootstrap Components</h1>
     <Button color="primary">First React Button</Button>
     <Button color="warning">First React Button</Button>
     <Button color="warning" outline>First React Button</Button>
  <h1>This is bootstrap Components</h1>
  <Button color="warning" outline onClick={btnHandle}>First React Button</Button> */}


            <ToastContainer/>
      <Home/>
      {/* {/* <Course/> */}
      {/* <Course course={{title:"Django Course",description:"This is just testing"}}/>
      <Course course={{title:"Java Course",description:"This is just testing"}}/> */}
      {/* <AllCourses/> */}
      {/* <AddCourse/> */}
    
</div>
  );
}

export default App;
