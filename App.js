import "./App.css";

import {useEffect, useState} from 'react';

function App() {
 let [num,setNum]=useState("");
   let x;
   let i;
   
   const onChangeHandler=(e)=>{
        x = e.target.value;
        setNum(x);
   }

  const  validateNum = ()=>{
    let arr=[];
    if(!num) return ""
     else if(num<=0){
      return "enter a  positive value";
    }
   
    else{
      
      for(i=0;i<=2;i++){
        
        if(i==0){
          //array method
          arr.push(+num+2)
        }
        else{
          //array method
          arr.push(+arr[i-1]+2)
        }
      }
      return arr.join();
        
      }
         
      }
      
    
 
  
    
  


   

  return (
    <div className="App">
     <h3>Hello sir</h3>
     <h3>This is your project created with Javascript Library React</h3>
     <input type='number' placeholder="enter a number" value={num} onChange={onChangeHandler}></input>
     {
      <h4 className="displayevenodd">{validateNum() }</h4>
       
       }
    </div>
  );
      }
      



  

export default App;
