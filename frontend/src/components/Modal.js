import React, { useState, useReducer } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export default function Popup() {
  const [{ order }] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });

  return <div> </div>;
}
