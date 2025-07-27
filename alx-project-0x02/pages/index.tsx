import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Head>
        <title>Welcome Page | ALX Project</title>
        <meta name="description" content="Basic Next.js welcome page for ALX project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content area for the welcome message */}
      <main className="p-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">
          👋 Welcome to Your Next.js App!
        </h1>
        
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          This is a standalone welcome page. You can now start building your application.
        </p>
      </main>
    </div>
  );
};

export default HomePage;