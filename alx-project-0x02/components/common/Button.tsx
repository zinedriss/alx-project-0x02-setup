// components/common/Button.tsx
import { type ButtonProps } from '@/interfaces';
import styles from './Button.module.css';

/**
 * A reusable button component that can be customized with different sizes and shapes.
 * @param {ButtonProps} { children, onClick, size = 'medium', shape = 'rounded-md', className } - The props for the component.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({ children, onClick, size = 'medium', shape = 'rounded-md', className = '' }: ButtonProps) => {
  // Combine the base button style with dynamic size, shape, and any additional classes
  const buttonClassName = `
    ${styles.button} 
    ${styles[size]} 
    ${styles[shape]} 
    ${className}
  `.trim();

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

/* You can create a file named 'Button.module.css' in the same directory 
  and add the following CSS to style the component.

.button {
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background-color: #0070f3;
  color: white;
}

.button:hover {
  background-color: #005bb5;
}

// Size variants
.small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.large {
  padding: 1rem 2rem;
  font-size: 1.25rem;
}

// Shape variants
.rounded-sm {
  border-radius: 4px;
}

.rounded-md {
  border-radius: 8px;
}

.rounded-full {
  border-radius: 9999px;
}

*/

export default Button;
