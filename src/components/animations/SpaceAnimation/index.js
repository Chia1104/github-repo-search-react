import Lottie from 'react-lottie-player'
import animationData from './58050-space-astronaut.json';

const SpaceAnimation = () => {
    return (
        <Lottie
            loop
            animationData={animationData}
            play
            className="md:max-w-[500px] md:max-h-[500px] mx-auto"
            style={{ width: '100%', height: '100%' }}
        />
    );
}

export default SpaceAnimation;
