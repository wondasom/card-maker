import React from 'react';
import styles from './editor.module.css';

import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
	<section className={styles.editor}>
		<h1 className={styles.title}>Card Maker</h1>
		{Object.keys(cards).map((key) => (
			<CardEditForm
				FileInput={FileInput}
				key={key}
				card={cards[key]}
				updateCard={updateCard}
				deleteCard={deleteCard}
			></CardEditForm>
		))}
		<CardAddForm FileInput={FileInput} onAdd={addCard}></CardAddForm>
	</section>
);

export default Editor;
