import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const UsersPage = () => {
  return (
    <>
      <Head>
        <title>Users | ALX Project</title>
      </Head>
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p className="text-gray-600">This page will list all the users.</p>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
