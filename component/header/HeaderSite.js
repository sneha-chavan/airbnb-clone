import Image from 'next/image'
import React from 'react'
import styles from '../header/header.module.css';
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

function HeaderSite() {
    return (
        <header className={styles.header}>
            <div className={styles.header_logo_div} >
                {/* className="relative flex items-center h-10 cursor-pointer" */}
                <Image className={styles.header_logo}
                    src='https://links.papareact.com/qd3'
                    cursor='pointer'
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className={styles.search_div}>
                <input className={styles.search_input} type="text" placeholder="Search your beautiful room here" />
                <SearchIcon className={styles.search_icon} />
                {/* <SearchIcon class="bg-gray-600 border-2 hidden md:inline-flex" /> */}
            </div>


            {/* <div className='items-center justify-end space-x-4'></div> */}
            <div className={styles.header_right_side_div}>
                <p>Become a host</p>
                <GlobeAltIcon className={styles.global_icon} />
                <div className={styles.profile_icon_div}>
                    <MenuIcon className={styles.menu_icon} />
                    <UserCircleIcon className={styles.user_icon} />
                </div>
            </div>
        </header>
    )
}

export default HeaderSite
