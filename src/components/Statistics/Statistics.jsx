export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <div>
        <div>
                <p>good:  { good}</p>
                <p>neutral:  { neutral}</p>
                <p>bad:  { bad}</p>
            </div>
            <p>total:  { total}</p>
            <p>Positive feedback: { percentage}%</p>
        </div>
    );
}