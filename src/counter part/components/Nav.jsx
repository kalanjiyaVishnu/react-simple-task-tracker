import React, { Component } from "react";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              WebSiteName
            </a>
            <span className={this.getClass()}>{this.props.Counters}</span>
          </div>
        </div>
      </nav>
    );
  }
  getClass() {
    let clas = "badge bg-";
    const length = this.props.Counters;
    clas += length > 0 ? "dark" : "warning";
    return clas;
  }
}

export default Nav;
