// components/common/UserCard.tsx
import { type UserProps } from '@/interfaces';
import styles from './UserCard.module.css';

/**
 * A card component to display user details.
 * @param {UserProps} { name, email, address } - The props for the component.
 * @returns {JSX.Element} The rendered user card.
 */
const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.email}>{email}</p>
      <div className={styles.address}>
        <strong>Address:</strong>
        <p>{`${address.street}, ${address.suite}`}</p>
        <p>{`${address.city}, ${address.zipcode}`}</p>
      </div>
    </div>
  );
};

/* You can create a file named 'UserCard.module.css' in the same directory
  and add the following CSS to style the component.

.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  background-color: #f9f9f9;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.name {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.email {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.address {
  font-size: 0.9rem;
  color: #555;
}

.address p {
  margin: 0.25rem 0;
}

*/

export default UserCard;
