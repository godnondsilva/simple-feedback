import Lottie from 'react-lottie';
import * as animationData from '../../data/failed.json';
import styles from '../../styles/Failed.module.css';

const Failed = ({ text }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div className={styles.failedContainer}>
			<Lottie
				options={defaultOptions}
				className='lottie-animation'
				height={250}
				width={250}
				isStopped={false}
				isPaused={false}
			/>
			<div>{text}</div>
		</div>
	);
};

export default Failed;
