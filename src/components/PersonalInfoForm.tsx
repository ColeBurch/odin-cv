import * as React from "react";
import { Component } from "react";

type PersonalInfoFormProps = {};

type PersonalInfoFormState = {
  name: string;
};

class PersonalInfoForm extends Component<
  PersonalInfoFormProps,
  PersonalInfoFormState
> {
  constructor(props: PersonalInfoFormProps) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(`${this.state.name}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PersonalInfoForm;
