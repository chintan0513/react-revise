function Intro1(props) {
    return (
        <div className="blog-post-intro" style={{ background: "#f1f1f1", borderRadius: "10px", border: "1px solid #707070", margin: "10px 0" }}>
            <h2>{props.h2}</h2>
            <div>
                <p>{props.p}</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro1;