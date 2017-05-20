import React, {Component} from "react";
import PropTypes from "prop-types";

export default class NavigationInfo extends Component {
  componentWillMount() {
    if (this.props.onMountNavigation) {
      this.props.onMountNavigation();
    }
  }

  render() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>My list</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    );
  }
}



NavigationInfo.propTypes = {
  onMountNavigation: PropTypes.func.isRequired,

};
