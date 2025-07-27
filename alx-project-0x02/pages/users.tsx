// pages/users.tsx
import type { NextPage, GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import styles from '../styles/Users.module.css';

interface UsersPageProps {
  users: UserProps[];
}

/**
 * The Users page component.
 * It receives the users as props from getStaticProps and renders them using UserCard.
 * @param {UsersPageProps} { users } - The props containing the users data.
 * @returns {JSX.Element} The rendered users page.
 */
const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Users List</h1>
        <div className={styles.grid}>
          {users.map(user => (
            <UserCard key={user.id} id={user.id} name={user.name} email={user.email} address={user.address} />
          ))}
        </div>
      </main>
    </div>
  );
};

/**
 * This function, getStaticProps, fetches data at build time.
 * It runs on the server-side and ensures the user data is available when the page is rendered.
 * @returns {Promise<{ props: UsersPageProps }>} An object containing the props for the page.
 */
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users: UserProps[] = await response.json();

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

/*
  You can create a file named 'Users.module.css' in the 'styles' directory
  and add the following CSS to style the page layout.

.main {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
*/

export default UsersPage;
