import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App.scss';
import UserProfile from './containers/UserProfile';

const App = () => (
  <UserProfile />
);

export default hot(module)(App);
