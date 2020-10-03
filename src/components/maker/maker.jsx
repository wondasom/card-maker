import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				history.push('/');
			}
		});
	});
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout}></Header>
			<div className={styles.container}>
				<Editor></Editor>
				<Preview></Preview>
			</div>
			<Footer></Footer>
		</section>
	);
};

export default Maker;
