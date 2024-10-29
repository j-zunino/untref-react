import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Roboto';
    text-align: center;
    margin: 0 auto;
    padding: 0;
`;

const Display = styled.div`
    background: #4b4b4b;
    position: relative;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    z-index: 2;

    border: 3px solid #242424;
    border-radius: 100%;
    padding: 10px 10px;
    width: 50px;
    height: 50px;
    margin: 0 auto;

    top: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    z-index: 1;

    border: none;
    border-radius: 50%;
    padding: 10px 10px;
    margin: 20px;
    width: 40px;
    height: 40px;
    transition: transform 0.1s ease-out;

    &:hover {
        transform: translate(0, -3px);
        box-shadow: 0px 5px 15px #141414;
    }
    &:active {
        transform: translate(0, 0px);
    }
`;

class Class extends Component {
    render() {
        const { count, increase, decrease } = this.props;
        return (
            <Container>
                <h2>Class Count</h2>
                <Display>{count}</Display>
                <Button style={{ background: '#9b0000' }} onClick={decrease}>
                    -
                </Button>
                <Button style={{ background: '#009b00' }} onClick={increase}>
                    +
                </Button>
            </Container>
        );
    }
}

export default Class;
