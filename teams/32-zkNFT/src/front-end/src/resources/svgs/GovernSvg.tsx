// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

const GovernSvg = ({ className, fill }) => {
  return (
    <svg
      width="30"
      height="28"
      className={className}
      fill={fill}
      viewBox="0 0 30 28"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.893 0.837138C15.3396 0.520921 14.6602 0.520921 14.1069 0.837138L1.50687 8.03714C0.643736 8.53036 0.343862 9.6299 0.83708 10.493C1.16897 11.0738 1.77541 11.3996 2.39961 11.4003V24C1.4055 24 0.599609 24.8059 0.599609 25.8C0.599609 26.7941 1.4055 27.6 2.39961 27.6H27.5996C28.5937 27.6 29.3996 26.7941 29.3996 25.8C29.3996 24.8059 28.5937 24 27.5996 24V11.4003C28.224 11.3998 28.8308 11.074 29.1628 10.493C29.656 9.6299 29.3561 8.53036 28.493 8.03714L15.893 0.837138ZM7.79961 13.2C6.8055 13.2 5.99961 14.0059 5.99961 15V20.4C5.99961 21.3941 6.8055 22.2 7.79961 22.2C8.79372 22.2 9.59961 21.3941 9.59961 20.4V15C9.59961 14.0059 8.79372 13.2 7.79961 13.2ZM13.1996 15C13.1996 14.0059 14.0055 13.2 14.9996 13.2C15.9937 13.2 16.7996 14.0059 16.7996 15V20.4C16.7996 21.3941 15.9937 22.2 14.9996 22.2C14.0055 22.2 13.1996 21.3941 13.1996 20.4V15ZM22.1996 13.2C21.2055 13.2 20.3996 14.0059 20.3996 15V20.4C20.3996 21.3941 21.2055 22.2 22.1996 22.2C23.1937 22.2 23.9996 21.3941 23.9996 20.4V15C23.9996 14.0059 23.1937 13.2 22.1996 13.2Z"
      />
    </svg>
  );
};

GovernSvg.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

export default GovernSvg;