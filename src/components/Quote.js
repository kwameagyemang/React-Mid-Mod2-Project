import React, {useState, useEffect} from "react"
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [auther, setAuthor] = useState("")
  
  const quoteAPI = async () => {
    let arrayofQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayofQuotes = data.data;
      console.log(arrayofQuotes)
    } catch (error){
      console.log(error);
    }

    try{
      setQuote(arrayofQuotes.content);
      setAuthor(arrayofQuotes.author);
    }catch (error){
      console.log(error);
    }
  };



  useEffect(() => {
    quoteAPI();
  }, []);

  return (
     <div className='container'>
       {quote}
       {/* {author} */}
       <button onClick={quoteAPI}>GET QUOTE</button>   
     </div>
   );
 }

 export default Quote;