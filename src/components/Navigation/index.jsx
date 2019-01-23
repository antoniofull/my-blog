import React from 'react'

const Navigation = ({ items }) => (
    <nav className='site-nav' role='navigation' aria-label='Main Site Navigation'>
        <ul className='nav-list'>
            {items && items.map(navItem => (
                <li className='nav-list__item' key={navItem.id}>
                    <a className='nav-list__link' href={navItem.link}>{navItem.text}</a>
                </li>
            ))}
        </ul>
    </nav>
);

export default Navigation;