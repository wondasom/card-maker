import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService, cardRepository }) => {
	const historyState = useHistory().state;
	const [cards, setCards] = useState({});
	const [userId, setUserId] = useState(historyState && historyState.id);

	const history = useHistory();
	const onLogout = useCallback(() => {
		authService.logout();
	}, [authService]);

	useEffect(() => {
		if (!userId) {
			return;
		}
		const stopSync = cardRepository.syncCards(userId, (cards) => {
			setCards(cards);
		});
		return () => stopSync();
	}, [userId, cardRepository]);

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				history.push('/');
			}
		});
	}, [userId, history, authService]);

	const createOrUpdateCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
		cardRepository.saveCard(userId, card);
	};

	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
		cardRepository.removeCard(userId, card);
	};

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout}></Header>
			<div className={styles.container}>
				<Editor
					FileInput={FileInput}
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
