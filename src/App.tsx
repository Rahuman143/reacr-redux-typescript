import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from './Store/rootStore';
import { incrementCount, decrementCount } from './Store/Counter/CounterAction';

import HomePage from './Components/HomePage';
interface AppProps {
  increment: () => void;
  decrement: () => void;
}

const mapStateToProps = (state: AppState) => ({
  count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
});

class App extends Component<AppProps, AppState> {
  render(): JSX.Element {
    return <HomePage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);