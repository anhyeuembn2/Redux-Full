
import './App.css';
import {createStore,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// get data on store we are use dispatch se duoc truyen len ham reducer no se tra laij 1 
// state moi gui len store
import React,{useState,useEffect} from 'react'
function App() {
  function nameReducer(state={name:"Trieu"},action){
      console.log("State",state,"Action",action);
      if(action.type==="UPDATE__NAME"){
           const payload={name:action.name}
           return payload;

      }
      return state;
  }
  function ageReducer(state={age:20},action){
    console.log("State",state,"Action",action);
    if(action.type==="UPDATE__AGE"){
         const payload={age:action.age}
         return payload;

    }
    return state;
}
  const compose=composeWithDevTools();
  
  const root=combineReducers({
     nameReducer,
     ageReducer
  })
  
  const store=createStore(root,compose);
  const handleUpdateName=()=>{
      const action={type:"UPDATE__NAME",name:"Nguyen Hai Trieu"};
      
      store.dispatch(action);
      
  }
  const handleUpdateAge=()=>{
     const action={type:"UPDATE__AGE",age:22};
     store.dispatch(action);
  }
  const [state,setState]=useState(()=> store.getState());
  console.log(state)
  useEffect(()=>{
        store.subscribe(()=>{
           console.log(`re-render`);
           console.log(store.getState());
           const state=store.getState();
           setState(state)
        })
  },[])
  return (
    <div className="App">
       <h2>{state.name}</h2>
     <button onClick={handleUpdateName}>Update Name</button>
     <button onClick={handleUpdateAge}>Update Age</button>
    </div>
  );
}

export default App;
