import "./Button.css";

const Button = (
    {children = "Click me",
    type,
funcion}
) => {

    return (
        <button
        className={`btn ${type}`}
        onClick={funcion}
        >
            {children}
        </button>
    )
}

export default Button;
