// pages/home.tsx
import type { NextPage } from 'next';
import Card from '@/components/common/Card';
import styles from '../styles/Home.module.css';

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Home Page
        </h1>

        <p className={styles.description}>
          Here are some reusable cards:
        </p>

        <div className={styles.grid}>
          <Card
            title="Dynamic Card 1"
            content="This card is rendered using our reusable Card component."
          />
          <Card
            title="Another Card"
            content="We can pass different props to create unique cards."
          />
          <Card
            title="Card Three"
            content="This demonstrates the power of component-based architecture."
          />
        </div>
      </main>
    </div>
  );
};

/*
  You can create a file named 'Home.module.css' in the 'styles' directory
  and add the following CSS to style the page layout.

.container {
  padding: 0 2rem;
}

.main {
  min-height: 100vh;
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
