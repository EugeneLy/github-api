import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { nextPage } from '../services/actions';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handleNextPage() {
    this.props.nextPage(this.props.sinceNext);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={this.handleNextPage}
        >
          NEXT &#10095;
        </button>
      </div>
    );
  }
}

Pagination.propTypes = {
  nextPage: PropTypes.func,
  sinceNext: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    sinceNext: state.list.sinceNext
  };
};

export default connect(mapStateToProps, { nextPage })(Pagination);
