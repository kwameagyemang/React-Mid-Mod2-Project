import React, {useState, useEffect} from "react"
import axios from 'axios';


const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  
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
       <div > 
       {""}
       <button onClick={quoteAPI} className="button-quote">GET QUOTE</button > 
       </div>

       <div className="quote-container">
       <div className="quote"><h2>{quote}</h2></div>
         <div className="author">{author}</div>
       </div>
       
       
     </div>
   );
 };

 export default Quote