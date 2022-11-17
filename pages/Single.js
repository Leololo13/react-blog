import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        {' '}
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            {' '}
            <span>Leo</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <FontAwesomeIcon className="icon2" icon={faPenToSquare} />
            </Link>
            <FontAwesomeIcon className="icon1" icon={faTrash} />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          repudiandae vitae, cum odit recusandae perspiciatis officiis impedit
          veniam architecto, non necessitatibus! Quos eos eveniet magni
          assumenda id, adipisci facilis aut! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt, repudiandae vitae, cum odit
          recusandae perspiciatis officiis impedit veniam architecto, non
          necessitatibus! Quos eos eveniet magni assumenda id, adipisci facilis
          aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, repudiandae vitae, cum odit recusandae perspiciatis officiis
          impedit veniam architecto, non necessitatibus! Quos eos eveniet magni
          assumenda id, adipisci facilis aut!
          <br />
          <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, repudiandae vitae, cum odit recusandae perspiciatis officiis
          impedit veniam architecto, non necessitatibus! Quos eos eveniet magni
          assumenda id, adipisci facilis aut! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt, repudiandae vitae, cum odit
          recusandae perspiciatis officiis impedit veniam architecto, non
          necessitatibus! Quos eos eveniet magni assumenda id, adipisci facilis
          aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, repudiandae vitae, cum odit recusandae perspiciatis officiis
          impedit veniam architecto, non necessitatibus! Quos eos eveniet magni
          assumenda id, adipisci facilis aut!
          <br />
          <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, repudiandae vitae, cum odit recusandae perspiciatis officiis
          impedit veniam architecto, non necessitatibus! Quos eos eveniet magni
          assumenda id, adipisci facilis aut! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt, repudiandae vitae, cum odit
          recusandae perspiciatis officiis impedit veniam architecto, non
          necessitatibus! Quos eos eveniet magni assumenda id, adipisci facilis
          aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, repudiandae vitae, cum odit recusandae perspiciatis officiis
          impedit veniam architecto, non necessitatibus! Quos eos eveniet magni
          assumenda id, adipisci facilis aut!
          <br />
        </p>
      </div>
      <Menu />{' '}
    </div>
  );
};

export default Single;
