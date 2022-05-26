import React from 'react';
import PropTypes from 'prop-types';
import { API_UNITY } from '../../constants';
import './style.css';

function UnityControls({ unity, setUnity }) {
  return (
    <section className="unit-control">
      <button
        onClick={() => setUnity(API_UNITY.metric)}
        disabled={unity === API_UNITY.metric}
        type="button"
      >
        ºC
      </button>
      <button
        onClick={() => setUnity(API_UNITY.imperial)}
        disabled={unity === API_UNITY.imperial}
        type="button"
      >
        ºF
      </button>
    </section>
  );
}

UnityControls.propTypes = {
  unity: PropTypes.string.isRequired,
  setUnity: PropTypes.func.isRequired,
};

export default UnityControls;
