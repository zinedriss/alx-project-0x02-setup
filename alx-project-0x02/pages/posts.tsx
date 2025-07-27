// pages/posts.tsx
import type { NextPage, GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';
import styles from '../styles/Posts.module.css';

// Define the props for the page, which will include the array of posts.
interface PostsPageProps {
  posts: PostProps[];
}

/**
 * The Posts page component.
 * It receives the posts as props from getStaticProps and renders them.
 * @param {PostsPageProps} { posts } - The props containing the posts data.
 * @returns {JSX.Element} The rendered posts page.
 */
const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>All Posts</h1>
        {posts && posts.length > 0 ? (
          <div className={styles.grid}>
            {posts.map((post) => (
              <PostCard key={post.id} id={post.id} title={post.title} body={post.body} userId={post.userId} />
            ))}
          </div>
        ) : (
          <p>No posts available.</p>
        )}
      </main>
    </div>
  );
};

/**
 * Fetches data at build time using getStaticProps.
 * This function runs on the server and fetches the posts from the API.
 * The fetched data is then passed as props to the PostsPage component.
 * @returns {Promise<GetStaticPropsResult<PostsPageProps>>} An object containing the props for the page.
 */
export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts from API');
    }
    const posts: PostProps[] = await response.json();

    // Pass the posts data to the page component as props
    return {
      props: {
        posts,
      },
      // Optional: enable Incremental Static Regeneration by setting a revalidation time in seconds
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    // In case of an error, return an empty array for posts
    return {
      props: {
        posts: [],
      },
    };
  }
};

/*
  You can create a file named 'Posts.module.css' in the 'styles' directory
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
  flex-direction: column;
  align-items: center;
  width: 100%;
}
*/

export default PostsPage;
