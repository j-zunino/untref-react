import { useState } from 'react';
import Class from './components/Class';
import Function from './components/Function';
import styled from 'styled-components';

function App() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    const Container = styled.div`
        display: flex;
        padding: 0;
        gap: 50px;
        margin: 0 auto;
        max-width: max-content;
    `;

    return (
        <Container>
            <Class count={count} increase={increase} decrease={decrease} />
            <Function count={count} increase={increase} decrease={decrease} />
        </Container>
    );
}
export default App;
