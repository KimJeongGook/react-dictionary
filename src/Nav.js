import React from 'react'
import Button from './Button'
import './Nav.css'

function Nav({menus}) {
    const navigate = (url) => {
        window.location.href = url
    }
    return(
        <div className="nav-container">
            {menus.map(menu => {
                return(
                    <Button size="small" handleClick={()=> navigate(menu.siteUrl)}>
                        {menu.sitetitle}</Button>
                )
            })}
{/*         <Button handleClick={()=> navigate('https://google.com')}>구글</Button>
            <Button handleClick={()=> navigate('https://naver.com')}>네이버</Button>
            <Button handleClick={()=> navigate('https://KimJeongGook.github.io/dictionary-front')}>사전 검색 서비스</Button> */}
        </div>
    )
}

export default Nav;