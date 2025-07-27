// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="This is the about page" />
      </Head>

      <main>
        <h1>
          This is the About Page
        </h1>
      </main>
    </div>
  );
};

export default AboutPage;