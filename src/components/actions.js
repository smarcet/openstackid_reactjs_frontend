export const doLogin = () => {

    let oauth2ClientId = process.env['OAUTH2_CLIENT_ID'];
    let baseUrl = process.env['IDP_BASE_URL'];
    let scopes = process.env['SCOPES'];
    var authUrl = baseUrl +"/oauth2/auth"+
        "?response_type=token id_token" +
        "&approval_prompt=force"+
        "&scope=" + encodeURI(scopes)+
        "&nonce=12345"+
        "&client_id="  + encodeURI(oauth2ClientId) +
        "&redirect_uri=" + window.location.origin+'/auth/callback';

    window.location = authUrl;
}

export const onUserAuth = (accessToken, idToken) => (dispatch) => {
    dispatch({
        type: 'SET_LOGGED_USER',
        payload: {accessToken, idToken}
    });
}

export const doLogout = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT_USER',
        payload: {}
    });
}



