// pages/users/index.tsx

import { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { GetStaticProps } from "next";

interface UsersPageProps {
  users: UserData[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    const nextId = userList.length + 1;
    setUserList([ ...userList, { ...newUser, id: nextId } ]);
  };

  const handleEditUser = (editedUser: UserData) => {
    setUserList(prev =>
      prev.map(u => (u.id === editedUser.id ? editedUser : u))
    );
  };

  const openAddModal = () => {
    setSelectedUser(null);
    setModalOpen(true);
  };

  const openEditModal = (u: UserData) => {
    setSelectedUser(u);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={openAddModal}
            className="bg-green-600 px-4 py-2 rounded-full text-white hover:bg-green-700 transition"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userList.map(u => (
            <div key={u.id} className="relative">
              <UserCard user={u} />
              <button
                onClick={() => openEditModal(u)}
                className="absolute top-2 right-2 text-sm text-gray-500 hover:text-gray-800"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          isOpen={isModalOpen}
          user={selectedUser}
          onClose={closeModal}
          onSubmit={selectedUser ? handleEditUser : handleAddUser}
        />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserData[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
