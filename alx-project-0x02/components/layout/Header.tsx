// components/layout/Header.tsx
import Link from 'next/link';
import styles from './Header.module.css'; // Assuming you might use CSS modules for styling

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Basic styling example if you create Header.module.css
/*
.header {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.navList {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navItem a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.navItem a:hover {
  text-decoration: underline;
}
*/


export default Header;
