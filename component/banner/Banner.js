import Image from 'next/image'
import React from 'react'
import styles from '../banner/banner.module.css';

function Banner() {
    return (
        <div className={styles.banner}>
            <Image src="https://links.papareact.com/0fm"
                // src="/eye_wallpaper.jpg"
                layout='fill'
                objectFit='cover'
                className='h-[300]'
            />
            <div className={styles.banner_content}>
                <p>Perfect Classy Site! This!</p>
                <button>Click me!</button>
            </div>

        </div>


    )
}
//  className =" sm:text-lg shadow-md font-bold shadow-xl active:scale-90  relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] top-1/2 w-f"
export default Banner
