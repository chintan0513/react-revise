import PromoHeading from "./PromoHeading";

const Promo = () => {

    const data = {
        header: "99% Off Sale!",
        details: "Everything must go!"
    }

    return (
        <div>
            <PromoHeading data={data.header} action={data.details} />
        </div>
    );
}

export default Promo;