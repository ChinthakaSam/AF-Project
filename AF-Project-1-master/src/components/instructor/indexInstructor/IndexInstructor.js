import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class IndexInstructor extends Component {
  constructor(props) {
    super(props);
    this.state = { instructor: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/instructor")
      .then(response => {
        this.setState({ instructor: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.instructor.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Instructors List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact number</th>
              <th>Address</th>
              <th>Username</th>
              <th>Password</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
