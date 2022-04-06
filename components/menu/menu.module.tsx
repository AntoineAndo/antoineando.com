import React, { useEffect, useState } from 'react'
import MenuEntry from '../menu-entry/menu-entry.module'
import { Page } from '../types/types'

type Props = {
    pages: Page[],
    handleMenuItemClick: Function,
    currentPage: Page
}

function Menu({pages, handleMenuItemClick, currentPage}: Props) {

    const [clickedMenu, setClickedMenu] = useState("")

    //Set the selected menu on initialisation
    useEffect(()=>{
        setClickedMenu(currentPage.url);
    }, [])

    function _handleMenuItemClick(page: Page) {
        setClickedMenu(page.url);
        handleMenuItemClick(page)
    }

    return (
        <nav>
            {pages.map((page : Page) =>
                <MenuEntry
                    page={page}
                    clickedMenu={clickedMenu}
                    handleMenuItemClick={_handleMenuItemClick}
                    key={page.name}/>
            )}
        </nav>
    )
}

export default Menu