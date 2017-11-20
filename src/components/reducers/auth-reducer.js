const initialState = {
    isLoggedUser: false,
    accessToken: null,
}

const loggedUserReducer = (state = initialState, action) => {

    if (action.type === 'SET_LOGGED_USER') {
        let {accessToken } = action.payload;
        console.log(`got access token ${accessToken}`);
        return {...state, isLoggedUser:true, accessToken };
    }
    if(action.type === 'LOGOUT_USER'){
        console.log('log out ...');
        return {...state, isLoggedUser:false, accessToken: null };
    }
    return state
}

export default loggedUserReducer