import { post } from '@/types/data';
import React from 'react';

const PostItem: React.FC<post.TPost> = (data) => {
  return (
    <div>
      <h2>{data.user_name}</h2>
      <p>{data.user_name}</p>
      {/* Các trường dữ liệu khác của post */}
    </div>
  );
};

export default PostItem;
