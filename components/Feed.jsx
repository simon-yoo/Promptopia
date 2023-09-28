'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      const filteredData = data?.filter(
        (item) =>
          item.tag.toLowerCase().includes(searchText.toLowerCase()) ||
          item.creator.username
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          item.prompt.toLowerCase().includes(searchText.toLowerCase())
      );
      setPosts(filteredData);
    };
    fetchPosts();
  }, [searchText]);

  const handleTagClick = (input) => {
    setSearchText(input);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
