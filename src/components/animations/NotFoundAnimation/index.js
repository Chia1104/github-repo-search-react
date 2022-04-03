import Lottie from 'react-lottie-player'
import animationData from './91351-404-error-page-animation-with-sky.json';

const NotFoundAnimation = () => {
    return (
        <Lottie
            loop
            animationData={animationData}
            play
            className="md:max-w-[500px] md:max-h-[700px] mx-auto"
            style={{ width: '100%', height: '100%' }}
        />
    );
}

export default NotFoundAnimation;
