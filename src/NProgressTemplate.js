import React from 'react';
import PropTypes from 'prop-types';

const barStyles = {
  position: 'fixed',
  zIndex: 1031,
  top: 0,
  left: 0,
  width: '100%',
  height: '2px'
};

const pegStyles = {
  display: 'block',
  position: 'absolute',
  right: '0px',
  width: '100px',
  height: '100%',
  opacity: 1.0,
  WebkitTransform: 'rotate(3deg) translate(0px, -4px)',
  msTransform: 'rotate(3deg) translate(0px, -4px)',
  transform: 'rotate(3deg) translate(0px, -4px)'
};

export const NProgressTemplate = ({ color = '#29d' }) => (
  <div className="bar"
       role="bar"
       style={{ ...barStyles, background: color }}>

    <div className="peg" style={{ ...pegStyles, boxShadow: `0 0 10px ${color}, 0 0 5px ${color}` }} />
  </div>
);

NProgressTemplate.propTypes = {
  color: PropTypes.string
};

NProgressTemplate.displayName = 'NProgressTemplate';
