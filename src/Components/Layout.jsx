import React, { Component} from "react";
import { Container } from "reactstrap";
import Sidebar from "./Sidebar";
export class Layout extends Component {
  static displayName = Layout.name;
  render() {
    return (
      <div>
        <Sidebar />
        <Container fluid className="maincontainar" id="maincontainar"> 
          <div>
            {this.props.children}
          </div> 
        </Container>
      </div>
    );
  }
}
