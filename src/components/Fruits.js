const Fruits = (props) => {
    return (
        <div>
            <p>
                {
                    props.fruits.map(f => {
                        return <p key={f.id}>{f.name}</p>
                    }
                    )
                }
            </p>
        </div>
    );
}

export default Fruits;