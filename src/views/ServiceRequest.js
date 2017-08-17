import React, { Component } from 'react';
import RaisedButton from '../components/MaterializeRaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom';
import DatePicker from 'material-ui/DatePicker';
import '../styles/inputFile.css';

const PORT = process.env.UPLOADS_PORT || 9000;
const HOST = process.env.UPLOADS_HOST || window.location.host.split(':')[0];
const UPLOAD_URL = `http://${HOST}:${PORT}/uploads`;

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class ServiceRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileInput: null,
      name: '',
      email: '',
      phone: '',
      department: '',
      projectDescription: '',
      projectGoal: '',
      projectBudget: '',
      keyMessage: '',
      primaryTargetAudience: '',
      secondaryTargetAudience: '',
      comments: '',
      projectContact: '',
    };
  }
  handleInputChange = this.handleInputChange.bind(this);

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    // console.log(this.state);
  }
  handleFilePath = event => {
    const files = Array.from(event.target.files);
    if (files.length === 0) {
      this.setState({ fileInput: null });
    } else {
      const fileNames = files.map(file => file.name).join(', ');
      this.setState({ fileInput: fileNames });
    }
  };
  handleFormData = () => {
    const data = new FormData();
    for (const [key, val] of Object.entries(this.state)) data.append(key, val);
    for (const file of this.uploadInput.files) data.append('file', file);
    fetch(UPLOAD_URL, { method: 'post', body: data }).then(response => {});
  };

  render() {
    const fileValue = this.state.fileInput || 'Select a file to upload';
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2>Please use this form to request services.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Name"
              onChange={this.handleInputChange}
              name="name"
              value={this.state.name}
              type="text"
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Email"
              onChange={this.handleInputChange}
              name="email"
              value={this.state.email}
              type="email"
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Phone"
              onChange={this.handleInputChange}
              name="phone"
              type="number"
              value={this.state.phone}
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Department"
              onChange={this.handleInputChange}
              name="department"
              value={this.state.department}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Project Description"
              onChange={this.handleInputChange}
              name="projectDescription"
              value={this.state.projectDescription}
              multiLine={true}
              rows={2}
            />
            <TextField
              floatingLabelText="Project Goal"
              onChange={this.handleInputChange}
              name="projectGoal"
              value={this.state.projectGoal}
              multiLine={true}
              rows={2}
            />
            <TextField
              floatingLabelText="Project Budget"
              onChange={this.handleInputChange}
              name="projectBudget"
              value={this.state.projectBudget}
              type="number"
            />
            <TextField
              floatingLabelText="Key Message"
              onChange={this.handleInputChange}
              name="keyMessage"
              value={this.state.keyMessage}
              multiLine={true}
              rows={2}
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Primary Target Audience"
              onChange={this.handleInputChange}
              name="primaryTargetAudience"
              value={this.state.primaryTargetAudience}
              multiLine={true}
              rows={2}
            />
            <TextField
              floatingLabelText="Secondary Target Audience"
              onChange={this.handleInputChange}
              name="secondaryTargetAudience"
              value={this.state.secondaryTargetAudience}
              multiLine={true}
              rows={2}
            />
            <TextField
              floatingLabelText="Project Contact"
              onChange={this.handleInputChange}
              name="projectContact"
              value={this.state.projectContact}
              type="text"
              multiLine={true}
              rows={2}
            />
            <TextField
              floatingLabelText="Comments"
              onChange={this.handleInputChange}
              name="comments"
              value={this.state.comments}
              type="text"
              multiLine={true}
              rows={2}
            />
          </div>
        </div>
        <div className="col s12">
          <DatePicker hintText="Desire Completion Date" />
        </div>
        <div className="col s12 m6">
          <div className="file-field input-field">
            <div className="btn">
              <span>Upload Files</span>
              <input
                id="upload"
                name="upload[]"
                ref={input => {
                  this.uploadInput = input;
                }}
                type="file"
                multiple
                onChange={this.handleFilePath}
              />
            </div>
            <div className="file-path-wrapper">
              <input value={fileValue} className="file-path validate" type="text" readOnly />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <Checkbox label="Social Media Ad" style={styles.checkbox} />
            <Checkbox label="Television Ad" style={styles.checkbox} />
            <Checkbox label="Video" style={styles.checkbox} />
            <Checkbox label="Writing" style={styles.checkbox} />
            <Checkbox label="Other" style={styles.checkbox} />
            <Checkbox label="Website" style={styles.checkbox} />
            <Checkbox label="Not sure what I need" style={styles.checkbox} />
          </div>
          <div className="col s12 m6">
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
        </div>
        <RaisedButton onClick={this.handleFormData} label="Submit" primary={true} />
        <br />
        <div id="planning-guide-checkbox">
          <Checkbox
            label={
              <span>
                I have read the{' '}
                <Link to="/planning-guide" target="_blank" style={{ fontWeight: 500 }}>
                  Planning Guide
                </Link>
              </span>
            }
            style={styles.checkbox}
            inputStyle={{ width: '35px' }}
          />
        </div>
      </div>
    );
  }
}

export default ServiceRequest;
