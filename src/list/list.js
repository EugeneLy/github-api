import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUsers } from './services/actions';
import User from './components/User';
import Pagination from './components/Pagination';

class List extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.sinceNext);
  }

  static renderUsers(users) {
    return users.map((user) => {
      return <User key={user.id} user={user} />;
    });
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <ul className="list-group">
          {this.constructor.renderUsers(users)}
        </ul>
        <Pagination />
      </div>
    );
  }
}

List.propTypes = {
  getUsers: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
  sinceNext: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    users: state.list.users,
    sinceNext: state.list.sinceNext
  };
};


export default connect(mapStateToProps, { getUsers })(List);
