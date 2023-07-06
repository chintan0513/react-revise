import PromoHeading from "./PromoHeading";
import { useState } from "react";

const Promo = () => {

    const [massage, setMassage] = useState("");

    const handleChange = (e) => {
        setMassage(e.target.value);
    }

    const data = {
        header: "99% Off Sale!",
        details: "Everything must go!"
    }

    return (
        <div>
            <input onChange={handleChange} value={massage} />
            <p>You Typed: {massage}</p>
            <PromoHeading header={data.header} details={data.details} />
        </div>
    );
}

export default Promo;