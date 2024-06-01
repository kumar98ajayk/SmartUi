import React, { Component} from "react";
import { Container } from "reactstrap";
import Sidebar from "./Sidebar";
export class Layout extends Component {
  static displayName = Layout.name;
  render() {
    return (
      <div>
        <Sidebar />
        <Container className="container-fluid"> 
          <div>
            {this.props.children}
          </div>
        </Container>
      </div>
    );
  }
}
