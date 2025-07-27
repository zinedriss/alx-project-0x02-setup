// components/common/PostCard.tsx
import { PostProps } from '@/interfaces';
import styles from './PostCard.module.css';

/**
 * A card component to display a single post.
 * @param {PostProps} { title, body, userId } - The props for the component.
 * @returns {JSX.Element} The rendered post card.
 */
const PostCard = ({ title, body, userId }: PostProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      <p className={styles.userId}>User ID: {userId}</p>
    </div>
  );
};

/* You can create a file named 'PostCard.module.css' in the same directory
  and add the following CSS to style the component.

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  background-color: #fff;
}

.title {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: #333;
}

.body {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.userId {
  font-size: 0.875rem;
  color: #777;
  margin-top: 1rem;
  text-align: right;
}

*/

export default PostCard;
