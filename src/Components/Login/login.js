// @flow
import React, { PureComponent } from 'react';
import './login.scss';
import Spinner from '../Spinner/spinner';


type State = {
  userName: string,
  password: string,
};

type User = {|
  errorMessage: string,
  isLoggedin: boolean,
  userName: string,
  isLoading: boolean,
|};

type Props = {
  user: User,
  authenticate: (name: string, password: string) => void,
};

export default class Login extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  onChangeUserName = (e: SyntheticEvent<HTMLInputElement>) => {
    const inputElement: HTMLInputElement = e.currentTarget;
    this.setState({ userName: inputElement.value });
  };

  onChangePassword = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ password: e.currentTarget.value });
  };

  onSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.authenticate(this.state.userName, this.state.password);
  };

  render() {
    return (
      <div className="users">
         
      <form className="sw-login" onSubmit={this.onSubmit}>
      <h1>STAR WARS<sub>PLANET FINDER</sub></h1>
        <div className="input-wrapper">
          
          <input
            id="username"
            onChange={this.onChangeUserName}
            type="text"
            className="sw-field"
            value={this.state.userName}
            placeholder="Enter Username"
          />
        </div>
        <div className="input-wrapper">
        
          <input
            id="password"
            className="sw-field"
            onChange={this.onChangePassword}
            type="password"
            value={this.state.password}
            placeholder="Enter Password"
          />
        </div>
        <button onSubmit={this.onSubmit}>
         Login{' '}
          {this.props.user.isLoading ? <Spinner small /> : null}{' '}
        </button>
        <span className="errorMsg">{this.props.user.errorMessage}</span>
      </form>
      </div>
    );
  }
}
