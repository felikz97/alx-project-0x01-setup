import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
      <p className="text-gray-700 mb-1">@{user.username}</p>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">{user.phone}</p>
      <p className="text-sm text-blue-600 hover:underline">
        <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
          {user.website}
        </a>
      </p>
      <div className="mt-2 text-sm text-gray-500">
        <p>
          <span className="font-medium">Company:</span> {user.company.name}
        </p>
        <p>
          <span className="font-medium">Address:</span> {user.address.city}, {user.address.street}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
