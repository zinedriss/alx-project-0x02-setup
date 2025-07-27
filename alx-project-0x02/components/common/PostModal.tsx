// components/common/PostModal.tsx
import { useState } from 'react';
import styles from './PostModal.module.css';

interface PostModalProps {
  onClose: () => void;
  onAddPost: (post: { title: string; content: string }) => void;
}

/**
 * A modal component for creating a new post.
 * It contains a form for title and content input.
 * @param {PostModalProps} { onClose, onAddPost } - Props for handling modal actions.
 * @returns {JSX.Element | null} The rendered modal component.
 */
const PostModal = ({ onClose, onAddPost }: PostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill in both title and content.');
      return;
    }
    onAddPost({ title, content });
    onClose(); // Close modal after submission
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter post content"
              required
            />
          </div>
          <div className={styles.formActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* You can create a file named 'PostModal.module.css' in the same directory 
  and add the following CSS to style the component.

.modalBackdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modalContent {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  z-index: 1001;
}

.modalContent h2 {
  margin-top: 0;
}

.formGroup {
  margin-bottom: 1rem;
}

.formGroup label {
  display: block;
  margin-bottom: 0.5rem;
}

.formGroup input,
.formGroup textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.formActions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.formActions button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.cancelButton {
  background-color: #f0f0f0;
}

.submitButton {
  background-color: #0070f3;
  color: white;
}

*/

export default PostModal;
