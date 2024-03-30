import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch, faSignOut, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ authentication, setAuthentication, userName }) => {
    const menuList = ['MAN', 'WOMAN', 'ESSENTIALS', 'LOOKBOOK', 'MAGAZINE', 'STOCKIST', 'BOARD', 'ARCHIVING']

    const navigate = useNavigate()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const goToLoginpage = () => {
        navigate('/login')
    }

    const goToProductall = () => {
        navigate('/')
    }

    const getLogout = () => {
        setAuthentication(false)
        alert("로그아웃 되었습니다.")
    }

    const getSearch = (event) => {
        if (event.key === "Enter") {
            //입력한 검색어를 읽어와서
            let keyword = event.target.value

            //url을 바꿔준다
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <div className='navbar-area'>
            <div className='login-section'>
                {authentication == true ?
                    <div>
                        <div className='login-button' onClick={getLogout}>
                            <div className='login-username'>{userName} 으로 접송중</div>
                            <div className='login-title'>Logout</div>
                            <FontAwesomeIcon icon={faSignOut} size='2x' />
                        </div>
                    </div>
                    :
                    <div className='login-button' onClick={goToLoginpage}>
                        <div className='login-title'>Login</div>
                        <FontAwesomeIcon icon={faUser} size='2x' />
                    </div>
                }
            </div>
            <div className='nav-section'>
                <img
                    className='brand-image'
                    onClick={goToProductall}
                    width='200px'
                    src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjhfNzQg%2FMDAxNjgyNjUxNzU5ODk3.NaNad57Oa4uAN59BAuzkf5T6-TkvuCtD6YuXahV9uxwg.5tZgjdLGgbHenkTwY93iOeIR3RuntUPGhsVVMe_aQxEg.PNG.ownmyway_ib%2F%25BC%25BC%25C5%25CD.png&type=a340'></img>
            </div>
            <div className='menu-area'>
                <div className='menu-button-box'>
                    <FontAwesomeIcon className="menu-toggle-button" onClick={toggleMenu} icon={faBars} />
                </div>
                <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
                    <div>
                        <FontAwesomeIcon className="menu-toggle-button" onClick={toggleMenu} icon={faXmark} />
                    </div>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input onKeyPress={(event) => getSearch(event)} className='input-search' type='text' />
                </div>
            </div>
        </div>
    )
}

export default Navbar