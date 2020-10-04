import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState([
		{
			id: '1',
			name: 'Dasom',
			company: 'ReDI School',
			theme: 'dark',
			title: 'Front-end Engineer',
			email: 'wondasom93@gmail.com',
			message: 'Go for it',
			fileName: 'dasom',
			fileURL: null
		},
		{
			id: '2',
			name: 'Dasom',
			company: 'ReDI School',
			theme: 'light',
			title: 'Front-end Engineer',
			email: 'wondasom93@gmail.com',
			message: 'Go for it',
			fileName: 'dasom',
			fileURL: null
		},
		{
			id: '3',
			name: 'Dasom',
			company: 'ReDI School',
			theme: 'colorful',
			title: 'Front-end Engineer',
			email: 'wondasom93@gmail.com',
			message: 'Go for it',
			fileName: 'dasom',
			fileURL: null
		}
	]);
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
				<Editor cards={cards}></Editor>
				<Preview cards={cards}></Preview>
			</div>
			<Footer></Footer>
		</section>
	);
};

export default Maker;
