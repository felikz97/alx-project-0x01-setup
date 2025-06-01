import React from 'react';

type PostCardProps = {
  title: string;
  description: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PostCard;
