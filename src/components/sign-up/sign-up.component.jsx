import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const defaultState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

class SignUp extends React.Component {
  state = defaultState;

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, password, confirmPassword, email } = this.state;

    if (password !== confirmPassword) {
      console.log('passwords dont match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState(defaultState);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className='sign-up'>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={this.state.displayName}
            onChange={this.handleChange}
            label='Display name'
            required>
          </FormInput>
          <FormInput
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            label='Email'
            required>
          </FormInput>
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='Password'
            required>
          </FormInput>
          <FormInput
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label='Confirm password'
            required>
          </FormInput>

          <CustomButton type='submit'>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
