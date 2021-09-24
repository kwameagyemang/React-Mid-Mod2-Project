import TodoList from './components/TodoList';
import Header from './components/Header';
import './App.css';
import Quote from './components/Quote';


const App = () => {


  return (
     <div className='app'>
       <div>
       <Header />
       <TodoList />
       </div>
       <Quote /> 
     </div>
   );
 }

 export default App;