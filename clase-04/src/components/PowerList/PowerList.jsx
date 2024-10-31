import styled from 'styled-components';

const PowersList = styled.ul`
    list-style: none;
    font-size: 14px;
    margin: 0;
    padding: 0;
    text-align: center;
`;

const PowerList = ({ list }) => {
    const powerList = Object.keys(list);

    return (
        <PowersList>
            {powerList.map((power) => (
                <li key={power}>{list[power]}</li>
            ))}
        </PowersList>
    );
};

export default PowerList;
