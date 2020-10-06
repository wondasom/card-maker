import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
	<footer className={styles.footer}>
		<p className={styles.title}>Code Your Dream</p>
	</footer>
));

export default Footer;
