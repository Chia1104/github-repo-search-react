import Lottie from 'react-lottie';
import animationData from '../../lottie-json/98642-error-404.json';

const ErrorAnimation = () => {
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
                height={700}
                width={700}/>
    );
}

export default ErrorAnimation;
