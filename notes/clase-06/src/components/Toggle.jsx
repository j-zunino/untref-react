import useToggle from '../hooks/useToggle';

export default function Toggle() {
    const { state, setToggle } = useToggle();

    return <button onClick={setToggle}>{state ? 'ON' : 'OFF'}</button>;
}
