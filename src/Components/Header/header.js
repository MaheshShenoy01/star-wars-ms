// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import event from './../../utils/events';
import type { Location, History } from 'react-router-dom';
import './header.scss';
import { logout } from './../../redux/user/actions';
import { BiLogOutCircle } from 'react-icons/bi';
 
type Props = {
  dispatch: (() => {}) => void,
  children: React.Node,
  location: Location,
  history: History,
};

type State = {
  render: boolean,
};

class Header extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      render: false,
    };
  }

  componentWillMount() {
    event.on('pushroute', (routename: string): void => {
      this.props.history.push(routename);
    });

    event.on('logout', (): void => {
      this.props.history.replace('/');
    });
  }

  logout = () => {
    this.props.dispatch(logout());
  };

  componentWillUnmount() {
    event.removeAllListeners();
  }

  render() {
    return (
      <React.Fragment>
        <nav className="header">
          <div className="leftContainer">
          <h1>STAR WARS<sub>PLANET FINDER</sub></h1>
          </div>
          <div className="leftContainer">
            {this.props.location.pathname !== '/' && (
              <button title="Log Out" onClick={this.logout}>
                <span><BiLogOutCircle />Logout</span>
              </button>
            )}
         
          </div>{' '}
        </nav>{' '}
        {this.props.children}
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default withRouter(connect(mapDispatchToProps)(Header));
