import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";


const UseMemo =()=> {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["New Todo"]);
    // const calculation = expensiveCalculation(count); // 1
    // if any state changes, page will re-render, 
    // and we not added any condition for function so it'll get executed


    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    
    
    const Increment = () => {
        setCount((value) => value + 1);
      
    };
    const Decrement =()=>{
        setCount((value)=>value-1);
        
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
        toast.success("hiii from counter")
    };

    

   
  

    return (
        <div>
            <div>
                <h2>My Todos :</h2>
                {todos.map((todo, index) => {
                    return <p style={{border:'2px solid red',width:"100px", margin:"auto" , marginBottom:"10px" }} key={index}>{todo}</p>;
                })}
                <button style={{ border: '2px solid black' }} onClick={addTodo}>Add Todo</button><br/>
               
                
            </div>
            <hr />
            <div>
                Count: {count}<br/>
                <button onClick={Increment}>+</button><br/>
                <button onClick={Decrement}>-</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Lengthy Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num; // 1000000001
};



export default UseMemo;




