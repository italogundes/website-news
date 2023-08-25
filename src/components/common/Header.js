import Image from 'next/image';
import styles from './css/Header.module.css';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
import menuMobile from '../../../public/icon-menu.svg';
import closeMenuMobile from '../../../public/icon-menu-close.svg';
import { useEffect, useState } from 'react';

const Header = ({ activeClassMobile }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    activeClassMobile(activeMenu);
  }, [activeMenu, activeClassMobile]);

  return (
    <header className={`${styles.header}`}>
      <Image src={logo} alt="Logo Site" />
      {activeMenu ? (
        <Image
          src={closeMenuMobile}
          alt="Close Menu"
          className={styles.menuMobile}
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
        />
      ) : (
        <Image
          src={menuMobile}
          alt="Menu hamburguer"
          className={styles.menuMobile}
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
        />
      )}
      <nav className={styles.navLinks}>
        <Link href="#">Home</Link>
        <Link href="#">New</Link>
        <Link href="#">Popular</Link>
        <Link href="#">Trending</Link>
        <Link href="#">Categories</Link>
      </nav>
    </header>
  );
};

export default Header;
