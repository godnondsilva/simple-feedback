import Rating from '../rating/Rating';
import { useState } from 'react';
import {
	validateName,
	validateEmail,
	validateRating,
	validateMessage,
} from '../../utils/validation';

import { toast } from 'react-hot-toast';
import styles from '../../styles/Form.module.css';

const Form = ({ setCurrentView, setLoading }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [rating, setRating] = useState(0);
	const [message, setMessage] = useState('');

	const submit = (e) => {
		e.preventDefault();
		if (!validateName(name))
			return toast.error('Please enter a name between 2 and 30 characters');
		if (!validateEmail(email))
			return toast.error('Please enter a valid email address');
		if (!validateRating(rating)) return toast.error('Please enter a rating');
		if (!validateMessage(message))
			return toast.error('Please enter a message between 2 and 80 characters');
		setLoading(true);
		fetch('/api/submit', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, rating, message }),
		})
			.then((dat) => {
				console.log('dat', dat);
				setLoading(false);
				setCurrentView(2);
			})
			.catch((err) => {
				console.log('err', err);
				setLoading(false);
				setCurrentView(3);
			});
	};

	const handleMessageChange = (e) => {
		if (e.target.value.length > 80) return;
		setMessage(e.target.value);
	};

	return (
		<>
			<p>Fill this form and tell us how you liked this application!</p>
			<form className={styles.form} onSubmit={submit} noValidate>
				<div className={styles.formGroup}>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						name='name'
						placeholder='Enter your name'
					/>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						name='email'
						placeholder='Enter your email'
					/>
				</div>

				<div className={styles.formGroup}>
					<Rating rating={rating} setRating={setRating} />
				</div>

				<div className={styles.formGroup}>
					<label htmlFor='message'>Message</label>
					<textarea
						value={message}
						onChange={handleMessageChange}
						name='message'
						className={styles.message}
						placeholder='Enter your feedback message'
					></textarea>
					<span className={styles.messageLength}>{message.length}/80</span>
				</div>

				<div className={styles.submitButtonContainer}>
					<button className={styles.submitButton} type='submit'>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default Form;
