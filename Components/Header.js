import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const isActive = (pathname) => {
        return router.pathname === pathname ? 'active' : '';
    };

    return (
        <header >
            <div className="head-container" style={{ backgroundColor: isMenuOpen ? '#01004990' : 'transparent', height: "100px" }}>
                <Link href="/"><img src="/imgs/logo.png" width="250px" alt="" /></Link>
                <button className="hamburger" onClick={toggleMenu}>
                    <i className={isMenuOpen ? 'menu fas fa-times' : 'menu fas fa-bars'}></i>
                </button>
                <nav id="navMenu" style={{ left: isMenuOpen ? "50%" : "100vw" }}>
                    <ul>
                        <li><Link href="/" className={isActive('/')}>north beta</Link></li>
                        <li><Link href="/portfolio" className={isActive('/portfolio')}>PORTFOLIO</Link></li>
                        <li><Link href="/careers" className={isActive('/careers')}>CULTURE</Link></li>
                        <li><Link href="/services" className={isActive('/services')}>SERVICES</Link></li>
                        <li><Link href="/contact" className={isActive('/contact')}>CONTACT US</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
