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
