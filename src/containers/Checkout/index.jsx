import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import stripePromise from '../../Config/stripeConfig';
import { useState } from 'react';
import AddressForm from './AddressForm';
import { CheckoutForm } from '../../components';

export function Checkout() {
    const {
        state: { clientSecret },
    } = useLocation();

    const [address, setAddress] = useState(null);

    if (!clientSecret) {
        return <div>Erro, volte e tente novamente</div>;
    }

    const handleAddressSubmit = (addressData) => {
        setAddress(addressData); // Salva o endereço no estado
        console.log('Endereço salvo:', addressData);
    };

    return (
        <>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <AddressForm onSubmit={handleAddressSubmit} />
                <CheckoutForm address={address} />
            </Elements>
        </>
    );
}
