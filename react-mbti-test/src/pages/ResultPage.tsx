interface ResultProps {
    result: string;
}

export default function Result({ result }: ResultProps) {
    return (
        <section className="resultPage">
            <h2>{result}</h2>
        </section>
    );
}
