import * as React from "react";
import { Component } from "react";

type PersonalInfoFormProps = {
  getPersonalInfo: Function;
};

type PersonalInfoFormState = {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  email: string;
};

class PersonalInfoForm extends Component<
  PersonalInfoFormProps,
  PersonalInfoFormState
> {
  constructor(props: PersonalInfoFormProps) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: undefined,
      email: "",
    };
  }

  handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      address: event.target.value,
    });
  };

  handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      phoneNumber: Number(event.target.value),
    });
  };

  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    this.props.getPersonalInfo(
      this.state.firstName,
      this.state.lastName,
      this.state.address,
      this.state.phoneNumber,
      this.state.email
    );
    event.preventDefault();
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex flex-col flex-grow box-border w-1/2 p-4 gap-3 bg-gray-300"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Personal Information
        </h2>
        <input
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleFirstNameChange}
          className="rounded-lg"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
          className="rounded-lg"
        />
        <input
          type="text"
          placeholder="Address"
          value={this.state.address}
          onChange={this.handleAddressChange}
          className="rounded-lg"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={this.state.phoneNumber}
          onChange={this.handlePhoneNumberChange}
          className="rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          className="rounded-lg"
        />
        <button type="submit" className="bg-white rounded-lg">
          Submit Personal Info
        </button>
      </form>
    );
  }
}

export default PersonalInfoForm;
