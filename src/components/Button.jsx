import React from "react";

class Button extends React.PureComponent {
    render() {
        const { bgColor, color, size, text, borderRadius } = this.props;

        return (
            <button type='button' style={{ backgroundColor: bgColor, color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
                {text}
            </button>
        )
    }
}

export default Button
