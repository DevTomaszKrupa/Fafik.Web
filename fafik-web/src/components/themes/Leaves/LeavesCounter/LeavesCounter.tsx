import React from 'react';
import components from './LeavesCounter.styles';

const LeavesCounter = () => {
    const { Counter, Badge } = components;
    return (
        <Counter> do naszego ślubu zostało: <Badge>11</Badge> miesięcy, <Badge>8</Badge> dni.</Counter>);
};

export { LeavesCounter };
