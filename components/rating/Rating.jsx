import { useState } from 'react';
import styles from '../../styles/Rating.module.css';

const Rating = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const changeRating = (value) => {
		if (!rating || rating !== value) {
			setRating(value);
		} else {
			setRating(0);
		}
	};

	const changeHover = (value) => {
		if (rating === value) {
			setHover(0);
		} else {
			setHover(value);
		}
	};

	return (
		<>
			<label htmlFor='rating'>Rating</label>
			<div className={styles.checkboxContainer}>
				<div
					className={`${styles.checkbox} ${
						rating >= 1 ? styles.ratingBad : ''
					} ${hover >= 1 ? styles.hoverBad : ''}`}
					onMouseEnter={() => changeHover(1)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(1)}
				>
					<span>1</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 2 ? styles.ratingBad : ''
					} ${hover >= 2 ? styles.hoverBad : ''}`}
					onMouseEnter={() => changeHover(2)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(2)}
				>
					<span>2</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 3 ? styles.ratingLow : ''
					} ${hover >= 3 ? styles.hoverLow : ''}`}
					onMouseEnter={() => changeHover(3)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(3)}
				>
					<span>3</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 4 ? styles.ratingLow : ''
					} ${hover >= 4 ? styles.hoverLow : ''}`}
					onMouseEnter={() => changeHover(4)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(4)}
				>
					<span>4</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 5 ? styles.ratingMedium : ''
					} ${hover >= 5 ? styles.hoverMedium : ''}`}
					onMouseEnter={() => changeHover(5)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(5)}
				>
					<span>5</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 6 ? styles.ratingMedium : ''
					} ${hover >= 6 ? styles.hoverMedium : ''}`}
					onMouseEnter={() => changeHover(6)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(6)}
				>
					<span>6</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 7 ? styles.ratingHigh : ''
					} ${hover >= 7 ? styles.hoverHigh : ''}`}
					onMouseEnter={() => changeHover(7)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(7)}
				>
					<span>7</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 8 ? styles.ratingHigh : ''
					} ${hover >= 8 ? styles.hoverHigh : ''}`}
					onMouseEnter={() => changeHover(8)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(8)}
				>
					<span>8</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 9 ? styles.ratingGood : ''
					} ${hover >= 9 ? styles.hoverGood : ''}`}
					onMouseEnter={() => changeHover(9)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(9)}
				>
					<span>9</span>
				</div>
				<div
					className={`${styles.checkbox} ${
						rating >= 10 ? styles.ratingGood : 's'
					} ${hover >= 10 ? styles.hoverGood : ''}`}
					onMouseEnter={() => changeHover(10)}
					onMouseLeave={() => changeHover(0)}
					onClick={() => changeRating(10)}
				>
					<span>10</span>
				</div>
			</div>
		</>
	);
};

export default Rating;
