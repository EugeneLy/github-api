import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getUser } from './services/actions';
import { dateFormat } from '../services/dateFormat';

class About extends Component {
  constructor(props) {
    super(props);
    this.login = this.props.match.params.login;
  }

  componentDidMount() {
    this.props.getUser(this.login);
  }

  render() {
    const {
      name, followers, following,
      created_at, company, email,
      location, blog, bio, avatar_url
    } = this.props.user;

    return (
      <div>
        <Link to="/" className="btn btn-outline-primary btn-block">
          &#10094; Back
        </Link>
        <div className="card">
          <img className="card-img-top" src={avatar_url} alt={name} />
          <div className="card-body">
            <h5 className="card-title">
              {name}
            </h5>
            <p className="card-text">
              {bio}
            </p>
            <p className="card-text">
              {email ? 'Email: ' : ''}
              {email}
            </p>
            <p className="card-text">
              {created_at ? 'Created: ' : ''}
              {dateFormat(created_at)}
            </p>
            <p className="card-text">
              {company ? 'Location: ' : ''}
              {location}
            </p>
            <p className="card-text">
              {company ? 'Company: ' : ''}
              {company}
            </p>
            <p className="card-text">
              {followers ? 'Followers: ' : ''}
              {followers}
            </p>
            <p className="card-text">
              {following ? 'Following: ' : ''}
              {following}
            </p>
            <a href={blog} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit blog
            </a>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = (state) => {
  return {
    user: state.about.user
  };
};

export default connect(mapStateToProps, { getUser })(About);
