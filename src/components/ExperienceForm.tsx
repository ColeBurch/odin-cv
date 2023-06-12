import * as React from "react";
import { Component } from "react";

type ExperienceFormProps = {
  IDProp: number;
  getExperienceInfo: Function;
};

type ExperienceFormState = {
  position: string;
  company: string;
  city: string;
  beginningYear: number;
  endingYear: number;
};

class ExperienceForm extends Component<
  ExperienceFormProps,
  ExperienceFormState
> {
  constructor(props: ExperienceFormProps) {
    super(props);

    this.state = {
      position: "",
      company: "",
      city: "",
      beginningYear: undefined,
      endingYear: undefined,
    };
  }

  handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      position: event.target.value,
    });
  };

  handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      company: event.target.value,
    });
  };

  handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleBeginningYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      beginningYear: Number(event.target.value),
    });
  };

  handleEndingYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      endingYear: Number(event.target.value),
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    this.props.getExperienceInfo(
      this.props.IDProp,
      this.state.position,
      this.state.company,
      this.state.city,
      this.state.beginningYear,
      this.state.endingYear
    );
    event.preventDefault();
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex flex-col flex-grow box-border gap-3 bg-gray-300"
      >
        <div className="text-xl font-bold text-gray-800">
          Position {this.props.IDProp}
        </div>
        <input
          type="text"
          placeholder="Position"
          value={this.state.position}
          onChange={this.handlePositionChange}
          className="rounded-lg"
        />
        <input
          type="text"
          placeholder="Company"
          value={this.state.company}
          onChange={this.handleCompanyChange}
          className="rounded-lg"
        />
        <input
          type="text"
          placeholder="City"
          value={this.state.city}
          onChange={this.handleCityChange}
          className="rounded-lg"
        />
        <input
          type="number"
          placeholder="From"
          value={this.state.beginningYear}
          onChange={this.handleBeginningYearChange}
          className="rounded-lg"
        />
        <input
          type="number"
          placeholder="To"
          value={this.state.endingYear}
          onChange={this.handleEndingYearChange}
          className="rounded-lg"
        />
        <button type="submit" className="">
          submit
        </button>
      </form>
    );
  }
}

export default ExperienceForm;
