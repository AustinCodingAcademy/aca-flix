import React, { Component } from "react";

class ListToggle extends Component {
  constructor(props) {

    super(props);
    // determine if there is a json server id which means it was saved
    this.state = { toggled: props.movie ? Boolean(props.movie._id) : false};
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
export default ListToggle;
