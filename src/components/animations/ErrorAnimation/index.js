import Lottie from 'react-lottie-player'
import animationData from './98642-error-404.json';

const ErrorAnimation = () => {
    return (
        <Lottie
            loop
            animationData={animationData}
            play
            className="md:max-w-[700px] md:max-h-[700px] mx-auto"
            style={{ width: '100%', height: '100%' }}
        />
    );
}

export default ErrorAnimation;
