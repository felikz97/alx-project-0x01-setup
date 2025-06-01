import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const PostsPage = () => {
  return (
    <>
      <Head>
        <title>Posts | ALX Project</title>
      </Head>
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid gap-4">
          <PostCard title="First Post" description="This is the first post description." />
          <PostCard title="Second Post" description="Here goes another post description." />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
