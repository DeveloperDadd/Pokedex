import maletrainer from '../assets/maletrainer.png';
import femaletrainer from '../assets/femaletrainer.png';

export default function TrainerImage(props) {
    const gender = props.gender;
    if (gender === "Male") {
        return (
            <img className='trainer-image' src={maletrainer} />
        )
    } else {
        return (
            <img className='trainer-image' src={femaletrainer} />
        )
    }
}