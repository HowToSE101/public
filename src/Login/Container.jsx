import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from 'Login/reducer';

export class LoginContainer extends Component {
  render() {
    const {
      submitLogin, changeUsername, changePassword,
      username, password
    } = this.props;

    return (
      <div>
        login page <br/>{username} {password}<br/>
        <input type="text" placeholder="Username"
          onChange={(e) => changeUsername(e.target.value)} />
        <input type="text" placeholder="Password"
          onChange={(e) => changePassword(e.target.value)} />
        <button onClick={() => submitLogin(username, password)}>
          Log in
        </button>
      </div>
    );
  }
}

LoginContainer.propTypes = {
  submitLogin: PropTypes.func,
  changeUsername: PropTypes.func,
  changePassword: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
