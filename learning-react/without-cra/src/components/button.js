import React from "react";

export default function Button() {
    const [key, setKey] = React.useState(true);

    const btnStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px',
        height: '80px',
        margin: '200px auto',
        borderRadius: '14px',
        fontFamily: 'Verdana, sans-serif',
        fontSize: '2rem',
        userSelect: 'none',
        webkitUserSelect: 'none',
        cursor: 'pointer',
    }

    const clickBtnStyle = {
        ...btnStyle,
        background: '#86B6F6',
        color: '#EEF5FF',
    }

    const clickedBtnStyle = {
        ...btnStyle,
        background: '#EEF5FF',
        color: '#86B6F6',
        border: '1px solid #86B6F6',
    }

    return (
        <div onClick={() => setKey(!key)} style={key ? clickBtnStyle : clickedBtnStyle}>
            {key ? "click" : "clicked!"}
        </div>
    );
}