import React from 'react';
import PropTypes from 'prop-types';
import './error-page.css';

function ErrorPage({ message = null }) {
  return (
    <main className="error-page">
      <section className="error-container">
        <h1>Error :(</h1>
        <p>Sorry, we are working hard to resolve it</p>
        {message ? (
          <span>
            Additional information:
            {' '}
            {message}
          </span>
        ) : null}
        <br />
        <button type="button" onClick={() => window.location.reload()}>
          Try again
        </button>
      </section>
    </main>
  );
}

ErrorPage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  message: PropTypes.string,
};

export default ErrorPage;
