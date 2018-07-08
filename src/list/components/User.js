import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to={`/about/${login}`} className="link-about" />
      <img
        className="user-photo"
        src={avatar_url}
        alt={login}
      />
      {login}
      <a href={html_url} target="_blank" rel="noopener noreferrer" className="badge badge-primary badge-pill">
        GitHub profile
      </a>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.any)
};

export default User;
