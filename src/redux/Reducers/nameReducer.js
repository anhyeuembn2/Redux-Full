
 function nameReducer(state={name:"Trieu"},action){
    console.log("State",state,"Action",action);
    if(action.type==="UPDATE__NAME"){
         const payload={name:action.name}
         return payload;

    }
    return state;
}
export default nameReducer;