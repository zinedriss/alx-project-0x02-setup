// pages/home.tsx
import { useState } from 'react';
import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import styles from '../styles/Home.module.css';
import { type CardProps } from '@/interfaces';

const HomePage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: 'Initial Post',
      content: 'This is the first post loaded by default.',
    },
  ]);

  const handleAddPost = (post: CardProps) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Home Page</h1>

        <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>
          Create New Post
        </button>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />
      )}
    </div>
  );
};

/*
  You can create a file named 'Home.module.css' in the 'styles' directory
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
  margin-bottom: 2rem;
}

.addButton {
  background-color: #0070f3;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: background-color 0.2s;
}

.addButton:hover {
  background-color: #005bb5;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
}

*/

export default HomePage;
