function login(userName, userPassword) {
    return async (dispatch, getState) => {
        console.log("login success actions")
        dispatch({ type: "LOGIN_SUCCESS", payload: { userName, userPassword } })
    }
}

function logout() {
    return (dispatch, getState) => {
        console.log("logout actions")
        dispatch({ type: "LOGOUT" })
    }
}

export const authenticateAction = { login, logout }