import React from 'react';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';

export const Field = ({ field, onCellClick }) => {
	return <FieldLayout field={field} onCellClick={onCellClick} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onCellClick: PropTypes.func,
};
