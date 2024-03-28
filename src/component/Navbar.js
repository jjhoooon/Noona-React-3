import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
// /* <FontAwesomeIcon icon={faRightToBracket} size='2x' /> */
const Navbar = () => {
    const menuList = ['MAN', 'WOMAN', 'ESSENTIALS', 'LOOKBOOK', 'MAGAZINE', 'STOCKIST', 'BOARD', 'ARCHIVING']

    return (
        <div>
            <div>
                <div className='login-button'>
                    <div className='login-title'>Login</div>
                    <FontAwesomeIcon icon={faUser} size='2x' />
                </div>
            </div>
            <div className='nav-section'>
                <img
                    width='200px'
                    src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjhfNzQg%2FMDAxNjgyNjUxNzU5ODk3.NaNad57Oa4uAN59BAuzkf5T6-TkvuCtD6YuXahV9uxwg.5tZgjdLGgbHenkTwY93iOeIR3RuntUPGhsVVMe_aQxEg.PNG.ownmyway_ib%2F%25BC%25BC%25C5%25CD.png&type=a340'></img>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='input-search' type='text' />
                </div>
            </div>
        </div>
    )
}

export default Navbar