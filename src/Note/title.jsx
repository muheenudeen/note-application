import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setDescription, setColor } from './noteSlice';

const Title = () => {
    const title = useSelector((state) => state.Note.title);
    const description = useSelector((state) => state.Note.description);
    const color = useSelector((state) => state.Note.color);

    const [editingTitle, setEditingTitle] = useState(false);
    const [editingDescription, setEditingDescription] = useState(false);

    const dispatch = useDispatch();

    return (
        <div>
            <h1 style={{ color }}>
                {editingTitle ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => dispatch(setTitle(e.target.value))}
                        onBlur={() => setEditingTitle(false)}
                        autoFocus
                    />
                ) : (
                    title
                )}
                <button onClick={() => setEditingTitle(true)}>Edit</button>
                <button onClick={() => dispatch(setTitle(''))}>Remove</button>
            </h1>
            <p>
                {editingDescription ? (
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => dispatch(setDescription(e.target.value))}
                        onBlur={() => setEditingDescription(false)}
                        autoFocus
                    />
                ) : (
                    description
                )}
                <button onClick={() => setEditingDescription(true)}>Edit</button>
                <button onClick={() => dispatch(setDescription(''))}>Remove</button>
            </p>
            <button onClick={() => dispatch(setColor('blue'))}>
                Change Color
            </button>
        </div>
    );
};

export default Title;
