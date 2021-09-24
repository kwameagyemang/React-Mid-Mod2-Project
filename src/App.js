import TodoList from './components/TodoList';
import Header from './components/Header';
import './App.css';
import Quote from './components/Quote';


const App = () => {


  return (
     <div className='container'>
       <Header />
       <TodoList />
       <div className="quote">
       <Quote />
       </div>     
     </div>
   );
 }

 export default App;