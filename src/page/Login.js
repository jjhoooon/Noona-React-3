import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = ({ setAuthentication, userName, setUsername, userPassword, setUserPassword }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('username : ', userName, ' password : ', userPassword)
        // setAuthentication(true) -> middleware 사용.
        dispatch(authenticateAction.login(userName, userPassword))
        navigate('/')
        alert("로그인 되었습니다.")
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">사용자 이름:</label>
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호:</label>
                    <input
                        type="password"
                        id="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='login-form-button' type="submit">로그인</button>
            </form>
        </div>
    )
}

export default Login