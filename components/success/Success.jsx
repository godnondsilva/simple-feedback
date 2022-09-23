import Lottie from 'react-lottie';
import * as animationData from '../../data/success.json';
import styles from '../../styles/Loading.module.css';

const Success = ({ text }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div className={styles.successContainer}>
			<Lottie
				options={defaultOptions}
				className='lottie-animation'
				height={200}
				width={200}
				isStopped={false}
				isPaused={false}
			/>
			<div>{text}</div>
		</div>
	);
};

export default Success;
