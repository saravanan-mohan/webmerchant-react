import React, { Component, useState } from "react";
import './MerchantHead.css'

export default function MerchantHead() {
    const [expand, setExpand] = useState(false)
    const navItems = ['Home', 'Product', 'Team', 'Experience', 'Portfolio']

    return (
        <header>
            <section id='headerContainer'>
                <div id='expandBtn' className={expand ? 'expand-button expanded' : 'expand-button'} onClick={() => setExpand(!expand)}></div>
                <h1>Merchant</h1>
            </section>
            <nav id='navContainer' className={ expand ? 'show' : ''}>
                <ul>
                    {
                        navItems.map(function(item) {
                            return(
                                <li>
                                    <a href='#'>{item}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}