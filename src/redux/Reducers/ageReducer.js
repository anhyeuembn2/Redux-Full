function ageReducer(state={age:20},action){
    console.log("State",state,"Action",action);
    if(action.type==="UPDATE__AGE"){
         const payload={age:action.age}
         return payload;

    }
    return state;
}
export default ageReducer;