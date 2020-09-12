let initState = {
    user:null,
    number:0
}

const globalState = (state=initState,action)=>{
    switch(action.type){
        default:
            return {...state}
    }
}

export default globalState;