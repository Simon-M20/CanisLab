import "./SpinningText.css";

function SpiningText({ text }) {
    const length = text.length;
    const deg = 360 / length;

    return (
        <section className='spinning-wrapper'>
            <div>
                <p>$20</p>
                <p>month</p>
            </div>
            <div className='spinning-text'>
                <p>
                    {text.split("").map((letter, i) => (
                        <span
                            key={i}
                            style={{
                                transform: `rotate(${deg * i}deg)`,
                            }}>
                            {letter}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}

export default SpiningText;
