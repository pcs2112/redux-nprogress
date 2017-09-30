import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderToString } from 'react-dom/server';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { getDisplayName, isDOMAvailable } from './utils';
import { NProgressTemplate } from './NProgressTemplate';

export const withNProgress = (WrappedComponent = NProgressTemplate, stateName) => {
  class WithNProgress extends Component {
    static propTypes = {
      nprogress: PropTypes.object,
      color: PropTypes.string.isRequired,
      increment: PropTypes.number.isRequired
    };

    componentWillMount() {
      if (isDOMAvailable()) {
        const { nprogress, color } = this.props;
        const template = renderToString(
          <WrappedComponent color={color}/>
        );

        NProgress.configure({
          ...nprogress, template
        });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (isDOMAvailable()) {
        const { increment } = nextProps;

        if (increment === 0) {
          NProgress.done();
        } else {
          NProgress.inc();
        }
      }
    }

    componentWillUnmount() {
      if (isDOMAvailable()) {
        NProgress.done();
        NProgress.remove();
      }
    }

    render() {
      return null;
    }
  }

  WithNProgress.displayName = `WithNProgress(${getDisplayName(WrappedComponent)})`;

  return connect(
    (state) => ({
      increment: state[stateName].increment
    }),
    null
  )(WithNProgress);
};
