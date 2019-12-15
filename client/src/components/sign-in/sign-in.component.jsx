import React from 'react';
import { connect } from 'react-redux';

import { emailSigninStart, googleSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { startEmailSignIn } = this.props;
    const { email, password } = this.state;

    startEmailSignIn({ email, password });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { startGoogleSignIn } = this.props;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="buttons">
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={startGoogleSignIn} isGoogleSignIn>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startGoogleSignIn: () => dispatch(googleSignInStart()),
  startEmailSignIn: emailAndPassword => dispatch(emailSigninStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
