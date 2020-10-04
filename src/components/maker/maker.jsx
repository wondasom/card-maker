import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState({
		'1': {
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
		'2': {
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
		'3': {
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
	});

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

	const createOrUpdateCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
	};
	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
	};
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout}></Header>
			<div className={styles.container}>
				<Editor
					cards={cards}
					addCard={createOrUpdateCard}
					updateCard={createOrUpdateCard}
					deleteCard={deleteCard}
				></Editor>
				<Preview cards={cards}></Preview>
			</div>
			<Footer></Footer>
		</section>
	);
};

export default Maker;
