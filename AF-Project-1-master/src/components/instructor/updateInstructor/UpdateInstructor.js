import React, { Component } from "react";
import axios from "axios";

export default class UpdateInstructor extends Component {
  constructor(props) {
    super(props);
    this.onChangeiName = this.onChangeiName.bind(this);
    this.onChangeiEmail = this.onChangeiEmail.bind(this);
    this.onChangeiContact = this.onChangeiContact.bind(this);
    this.onChangeiUsername = this.onChangeiUsername.bind(this);
    this.onChangeiPassword = this.onChangeiPassword.bind(this);
    this.onChangeiRePassword = this.onChangeiRePassword.bind(this);
    this.onChangeiAddress = this.onChangeiAddress.bind(this);
    this.onChangeiMessage = this.onChangeiMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      iName: "",
      iEmail: "",
      iContact: "",
      iUsername: "",
      iPassword: "",
      iRePassword: "",
      iAddress: "",
      iMessage: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/instructor/edit/" + this.props.match.params.id
      )
      .then(response => {
        this.setState({
          iName: response.data.iName,
          iEmail: response.data.iEmail,
          iContact: response.data.iContact,
          iAddress: response.data.iAddress,
          iUsername: response.data.iUsername,
          iPassword: response.data.iPassword,
          iRePassword: response.data.iRePassword
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeiName(e) {
    this.setState({
      iName: e.target.value
    });
  }

  onChangeiEmail(e) {
    this.setState({
      iEmail: e.target.value
    });
  }

  onChangeiContact(e) {
    this.setState({
      iContact: e.target.value
    });
  }

  onChangeiUsername(e) {
    this.setState({
      iUsername: e.target.value
    });
  }

  onChangeiPassword(e) {
    this.setState({
      iPassword: e.target.value
    });
  }

  onChangeiRePassword(e) {
    this.setState({
      iRePassword: e.target.value
    });
  }

  onChangeiAddress(e) {
    this.setState({
      iAddress: e.target.value
    });
  }

  onChangeiMessage(e) {
    this.setState({
      iMessage: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      iName: this.state.iName,
      iEmail: this.state.iEmail,
      iContact: this.state.iContact,
      iUsername: this.state.iUsername,
      iPassword: this.state.iPassword,
      iRePassword: this.state.iRePassword,
      iAddress: this.state.iAddress,
      iMessage: this.state.iMessage
    };
    axios
      .post(
        "http://localhost:3000/admin/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    //this.props.history.push("/index");
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Update instructor details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Instructor Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.iName}
              onChange={this.onChangeiName}
            />
          </div>
          <div className="form-group">
            <label>Instructor Email: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.iEmail}
              onChange={this.onChangeiEmail}
            />
          </div>
          <div className="form-group">
            <label>Instructor Contact Number: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.iContact}
              onChange={this.onChangeiContact}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.iAddress}
              onChange={this.onChangeiAddress}
            />
          </div>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.iUsername}
              onChange={this.onChangeiUsername}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.iPassword}
              onChange={this.onChangeiPassword}
            />
          </div>
          <div className="form-group">
            <label>Re-enter Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.iRePassword}
              onChange={this.onChangeiRePassword}
            />
          </div>
          <div className="form-group">
            <label>Message: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.iMessage}
              onChange={this.onChangeiMessage}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add admin"
              className="btn btn-primary"
            />
          </div>
          &nbsp;&nbsp;
          <div className="form-group">
            <input
              type="submit"
              value="Show all admins"
              className="btn btn-primary"
              onClick={this.onUpdate}
            />
          </div>
        </form>
      </div>
    );
  }
}
