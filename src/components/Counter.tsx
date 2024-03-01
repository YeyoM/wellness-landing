import { useSpring, animated } from 'react-spring';
import { CounterI } from '../vite-env';

const Counter = ({ n, className }: CounterI) => {

    const { number } = useSpring({
        from: {number: 0},
        number: n,
        delay: 200,
        config: {
            mass: 1,
            tension: 20,
            frinction: 20
        }
    });

    return className ? (
			<animated.h3 className={className}>{number.to((n) => n.toFixed(0))}</animated.h3>
		) : (
			<animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
		);

}

export default Counter;