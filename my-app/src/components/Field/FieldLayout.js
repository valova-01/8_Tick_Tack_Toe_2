import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../App.module.css';

const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className="field-layout">
			<div className={styles['field-wrapper']}>
				<div className={styles.field}>
					{field.map((cell, index) => (
						<button key={index} onClick={() => onCellClick(index)}>
							{cell}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
