const initstate = {user:{userid:'user00', userpw:'p2',username:'홍길동'}}
function memberReducer(state = initstate, action){
    console.log('reducer...',state,action)
    const {type, payload} = action
    if(type === 'SUCCESS_LOGIN'){
        return {user: payload}
    }
    return state
}

export default memberReducer