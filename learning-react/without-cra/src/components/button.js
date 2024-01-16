export default function Button() {
    const [key, setKey] = React.useState(true);
    return (
        <div onClick={() => setKey(!key)}>
            {key ? "click" : "clicked"}
        </div>
    );
}