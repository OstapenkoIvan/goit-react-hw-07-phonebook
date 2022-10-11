import PropTypes from 'prop-types';
import React from 'react';
import c from 'components/Container/Container.module.css';

function Container({ children }) {
  return <div className={c.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
