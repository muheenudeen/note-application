
import React from 'react';
import { useSelector } from 'react-redux';

const Description = () => {
    const title = useSelector((state) => state.Note.title);
    const description = useSelector((state) => state.Note.description);
    const color = useSelector((state) => state.Note.color);

    return (
        <div>
            <p>{description}</p>
            <h1 style={{ color }}>{title}</h1>
        </div>
    );
};

export default Description;
