'use client';
import { useState, useEffect } from 'react';
import Profile from '@components/Profile';
import { useParams } from 'next/navigation';
const OtherProfile = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/user/${id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    if (id) fetchPosts();
  }, []);

  return (
    <Profile
      name={posts[0]?.creator.username}
      desc='Welcome to your personalize profile page'
      data={posts}
    />
  );
};

export default OtherProfile;
