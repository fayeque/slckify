export const initialState = {
    user:{
        displayName:"Fayeque",
        photoURL:"https://i.imgur.com/CzQCc6G.png"
    }
}

export const actionTypes={
    SET_USER:"SET_USER"
}

const reducer = (state,action) => {

    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user:action.user
            }
        default:
            return state
    }
}

export default reducer;