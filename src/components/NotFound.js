import Lottie from 'react-lottie';
import animationData from '../lottie-json/91351-404-error-page-animation-with-sky.json';

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            <Lottie options={defaultOptions}
                height={500}
                width={700}/>
        </>
    );
}

export default NotFound;
