import React, { useState } from 'react'
import { Page } from '../types/types'
import styles from './menu-entry.module.scss';

type Props = {
    page: Page,
    clickedMenu: string,
    handleMenuItemClick: Function
}

function MenuEntry({page, clickedMenu, handleMenuItemClick}: Props) {

  return (
    <div className={`${styles.menuEntry} ${clickedMenu == page.url ? styles.clicked : ''}`} onClick={(event) => handleMenuItemClick(page)} key={page.url}>
        {/* Replacing spaces with &nbsp; to prevent text collapse during on-click animation */}
        {/* 'dangerouslySetInnerHTML' must be used otherwise &nbsp; is rendered as text and not HTML */}
        <span dangerouslySetInnerHTML={{__html: page.name.replace(/\s/g, "&nbsp;")}}></span>
    </div>
  )
}

export default MenuEntry