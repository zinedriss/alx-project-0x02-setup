// pages/about.tsx
import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import styles from '../styles/About.module.css';

const AboutPage: NextPage = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is the About Page
        </h1>
        <p className={styles.description}>
          Here are some examples of the reusable Button component:
        </p>
        <div className={styles.buttonContainer}>
          <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked!')}>
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked!')}>
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked!')}>
            Large Button
          </Button>
        </div>
      </main>
    </div>
  );
};

/*
  You can create a file named 'About.module.css' in the 'styles' directory
  and add the following CSS to style the page layout.

.container {
  padding: 0 2rem;
}

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

.buttonContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

*/

export default AboutPage;
