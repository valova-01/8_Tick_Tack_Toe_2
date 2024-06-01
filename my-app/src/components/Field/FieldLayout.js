import React from 'react';

import styles from '../../App.module.css';
import { store } from '../../store';

const FieldLayout = ({ onCellClick }) => {
	const { field } = store.getState();
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

export default FieldLayout;
