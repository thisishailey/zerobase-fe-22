import React, { useState } from "react";

function Button(props) {
    const [state, setState] = useState(true);

    const btnStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px',
        height: '80px',
        margin: '100px auto',
        borderRadius: '14px',
        fontFamily: 'Verdana, sans-serif',
        fontSize: '2rem',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        cursor: 'pointer',
    }

    const clickBtnStyle = {
        ...btnStyle,
        background: props.mainColor,
        color: props.color,
        border: '1px solid ' + props.color,
    }

    const clickedBtnStyle = {
        ...btnStyle,
        background: props.color,
        color: props.mainColor,
        border: '1px solid ' + props.mainColor,
    }

    return (
        <div onClick={() => setState(!state)} style={state ? clickBtnStyle : clickedBtnStyle}>
            {state ? props.textBf : props.textAf}
        </div>
    );
}

export default Button;