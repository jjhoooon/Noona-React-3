let initialState = {
    userName: '',
    userPassword: '',
    authenticate: false
}

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "LOGIN_SUCCESS":
            console.log("login success reducer")
            return { ...state, userName: payload.userName, userPassword: payload.userPassword, authenticate: true }
        case "LOGOUT":
            return { ...state, authenticate: false }
        default:
            return { ...state }
    }
}

export default authenticateReducer