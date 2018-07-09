import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUsers } from './services/actions';
import User from './components/User';
import Pagination from './components/Pagination';

class List extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.sinceCurent);
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
  sinceCurent: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    users: state.list.users,
    sinceCurent: state.list.sinceCurent
  };
};


export default connect(mapStateToProps, { getUsers })(List);
