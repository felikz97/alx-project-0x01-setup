import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const users: UserProps[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

const UsersPage = () => {
  return (
    <>
      <Head>
        <title>Users | ALX Project</title>
      </Head>
      <Header />
      <main>
        <div className="grid gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div> 
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
