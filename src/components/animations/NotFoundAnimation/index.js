import Lottie from 'react-lottie';
import animationData from './91351-404-error-page-animation-with-sky.json';

const NotFoundAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Lottie options={defaultOptions}
                height={500}
                width={700}/>
    );
}

export default NotFoundAnimation;
