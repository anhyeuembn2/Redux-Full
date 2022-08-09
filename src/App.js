
import './App.css';

// get data on store we are use dispatch se duoc truyen len ham reducer no se tra laij 1 
// state moi gui len store
import React,{useState,useEffect} from 'react';
import * as userApi from './api/userApi';

import { store } from './redux/store';
function App() {

  const [state,setState]=useState(()=> store.getState());
  console.log(state);
  useEffect(()=>{
       store.subscribe(()=>{
         const state=store.getState();
         setState(state);
       })
  },[])
  useEffect(()=>{
    
    store.dispatch({type:"FETCH__REQUEST"});
    userApi.getUsers()
    .then((data)=> {
       const action={type:"FETCH__API",payload:data};
       store.dispatch(action);
    })
    .catch((err)=>{
        store.dispatch({type:"FETCH__ERROR",payload:err})
    })
  },[]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
