/* import logo from './logo.svg';
import './App.css'; */

//import Counter from './components/counter';
//import MyFood from './components/MyFood';
//import MySelf from './components/MySelf';
//import TaskItem from './components/TaskItem';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
      {/* <MySelf name="Mark Darlington" age={12} gender ="male"/>
      <MySelf name="Chloe Haword" age={35} gender ="female"/>
      <MyFood name="Gari & Beans" origin="Volta region" nickname="Gorbe"/>
      <Counter/> */}
      <TaskManager/>
      {/* <TaskItem/> */}
    </div>
    
  );
}

export default App;
