// pages/posts.tsx
import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import styles from '../styles/Posts.module.css';

const PostsPage: NextPage = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Posts Page</h1>
        <p className={styles.description}>
          This is where blog posts will be listed.
        </p>
      </main>
    </div>
  );
};

/*
  You can create a file named 'Posts.module.css' in the 'styles' directory
  and add the following CSS to style the page layout.

.main {
  min-height: 90vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
}

.description {
  text-align: center;
  margin: 2rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

*/

export default PostsPage;
