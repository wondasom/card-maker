import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogout }) => (
	<header className={styles.header}>
		{onLogout && (
			<>
				<button className={styles.logout} onClick={onLogout}>
					Logout
				</button>
				<a
					href='https://github.com/wondasom/card-maker'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.github}
				>
					Go to Github
				</a>
			</>
		)}

		<img className={styles.logo} src='/images/logo.png' alt='logo'></img>
		<h1 className={styles.title}>Business Card Maker</h1>
	</header>
));

export default Header;
