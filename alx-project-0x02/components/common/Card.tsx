// components/common/Card.tsx
import { CardProps } from '../../interfaces';
import styles from './Card.module.css';

/**
 * A reusable card component that displays a title and content.
 * @param {CardProps} { title, content } - The props for the component.
 * @returns {JSX.Element} The rendered card component.
 */
const Card = ({ title, content }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

/* You can create a file named 'Card.module.css' in the same directory 
  and add the following CSS to style the component.

.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card:hover,
.card:focus,
.card:active {
  border-color: #0070f3;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

*/

export default Card;
