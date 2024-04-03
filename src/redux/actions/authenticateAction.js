function login(userName, userPassword) {
    return async (dispatch, getState) => {
        console.log("login success actions")
        dispatch({ type: "LOGIN_SUCCESS", payload: { userName, userPassword } })
    }
}

export const authenticateAction = { login }