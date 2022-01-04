
import Image from 'next/image';
import styles from './header.module.css';
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3">
            {/* Airbnb Logo */}
            <div className="relative flex my-auto">
                <Image className={styles.header_logo}
                    src='/Airbnb_Logo_Bélo.svg.png'
                    width='150vw'
                    height='70vw'
                    objectFit='contain'
                />
            </div>
        </header >
    );
}

export default Header