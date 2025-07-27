// interfaces/index.ts

/**
 * Defines the properties for the Card component.
 * @param title - The title of the card.
 * @param content - The main content of the card.
 */
export interface CardProps {
  title: string;
  content: string;
}

/**
 * Defines the properties for the Button component.
 * @param children - The content to be displayed inside the button.
 * @param onClick - The function to call when the button is clicked.
 * @param size - The size of the button ('small', 'medium', 'large').
 * @param shape - The shape of the button ('rounded-sm', 'rounded-md', 'rounded-full').
 * @param className - Additional CSS classes to apply to the button.
 */
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
}

/**
 * Defines the properties for a single post.
 * @param id - The unique identifier for the post.
 * @param title - The title of the post.
 * @param body - The content of the post.
 * @param userId - The ID of the user who created the post.
 */
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

/**
 * Defines the structure for a user's address.
 */
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

/**
 * Defines the properties for a single user.
 * @param id - The unique identifier for the user.
 * @param name - The name of the user.
 * @param email - The email address of the user.
 * @param address - The address of the user.
 */
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: Address;
}
