import React, { useState } from "react"

interface ButtonProps {
    mainColor: string,
    color: string,
    textBf: string,
    textAf: string
}

function Button({ mainColor, color, textBf, textAf }: ButtonProps) {
    const [state, setState] = useState(true)

    const btnStyle: React.CSSProperties = {
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

    const clickBtnStyle: React.CSSProperties = {
        ...btnStyle,
        background: mainColor,
        color: color,
        border: '1px solid ' + color,
    }

    const clickedBtnStyle: React.CSSProperties = {
        ...btnStyle,
        background: color,
        color: mainColor,
        border: '1px solid ' + mainColor,
    }

    return (
        <div onClick={() => setState(!state)} style={state ? clickBtnStyle : clickedBtnStyle}>
            {state ? textBf : textAf}
        </div>
    )
}

export default Button