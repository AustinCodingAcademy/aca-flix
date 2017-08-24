import React, { Component } from "react";
import PropTypes from "prop-types";

class ListToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: Boolean(props.movie._id)};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.toggled === true) {
      this.props.removeMyMovie(this.props.movie._id);
      this.setState({ toggled: false });
    } else {
      this.props.saveMyMovie(this.props.movie);
      this.setState({ toggled: true });
    }
  }
  render() {
    return (
      <div onClick={this.handleClick}
        data-toggled={this.state.toggled}
        className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus" />
          <i className="fa fa-fw fa-check" />
        </div>
      </div>
    );
  }
}

ListToggle.propTypes = {
  movie: PropTypes.func.isRequired,
  removeMyMovie: PropTypes.func.isRequired,
  saveMyMovie: PropTypes.func.isRequired,
};

export default ListToggle;
