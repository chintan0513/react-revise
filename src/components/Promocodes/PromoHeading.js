const PromoHeading = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
            <h2>{props.details}</h2>
        </div>
    );
}

export default PromoHeading;