import React, { Component } from "react";

import { Menu } from "semantic-ui-react";

class Tours extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <div>
          <h2 className="tour-page-header">Tours in Melbourne</h2>

          <Menu className="tour-page-menu" text>
            <Menu.Menu className="tour-page-menu-container" position="right">
              <Menu.Item header className="tour-page-menu-item">
                Sort By
              </Menu.Item>
              <Menu.Item
                className="tour-page-menu-item"
                name="az"
                active={activeItem === "az"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="tour-page-menu-item"
                name="price"
                active={activeItem === "price"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="tour-page-menu-item"
                name="rating"
                active={activeItem === "rating"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Tours;
