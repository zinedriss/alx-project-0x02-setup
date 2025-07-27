// components/layout/Header.tsx
import Link from 'next/link';
import styles from './Header.module.css';

/**
 * A reusable header component with navigation links.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/home" className={styles.navLink}>
          Home
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/posts" className={styles.navLink}>
          Posts
        </Link>
      </nav>
    </header>
  );
};

/* You can create a file named 'Header.module.css' in the same directory
  and add the following CSS to style the component.

.header {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #202020;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.navLink {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s;
}

.navLink:hover {
  color: #0070f3;
}

*/

export default Header;
