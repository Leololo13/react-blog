import React from 'react';

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: 'loremowekfowekf',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla id aspernatur fugiat fugit modi similique dolore ea sequi et nobis maxime ipsa accusamus sint possimus cumque ipsam, porro praesentium facere. ',
      img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'loremowekfowekf',
      desc: 'loremoerkweof ',
      img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'loremowekfowekf',
      desc: 'loremoerkweof ',
      img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'loremowekfowekf',
      desc: 'loremoerkweof ',
      img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts u may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
