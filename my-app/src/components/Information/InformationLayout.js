import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../App.module.css';

const InformationLayout = ({ status }) => {
	return (
		<div className="information-layout">
			<div className={styles.information}>{status}</div>
		</div>
	);
};

InformationLayout.propTypes = {
	status: PropTypes.node,
};

export default InformationLayout;
