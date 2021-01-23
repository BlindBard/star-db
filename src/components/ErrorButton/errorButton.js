import React, { Component } from 'react';

import cn from 'classnames';
import styles from './styles.module.scss';

export default class ErrorButton extends Component {
  state = {
    renderError: false,
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className={cn(styles.errorButton, 'btn', 'btn-danger', 'btn-lg')}
        onClick={() => this.setState({ renderError: true })}
      >
        Throw Error
      </button>
    );
  }
}
