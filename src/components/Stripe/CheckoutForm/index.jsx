import { PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles.css'
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";


export default function CheckoutForm({address}) {
      const{cartProducts, clearCart} = useCart();
      const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const {
    state: {dpmCheckerLink},
  } = useLocation()

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
        console.error("Stripe ou Elements com falha, tente novamente mais tarde!");
        return;
    }

    if (!address || !address.street || !address.number || !address.neighborhood || !address.contact) {
        toast.error("Por favor, preencha todos os campos obrigatórios do endereço antes de continuar.");
        return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
    });

    if (error) {
        setMessage(error.message);
        toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
        try {
            const products = cartProducts.map((product) => ({
                id: product.id,
                quantity: product.quantity,
                price: product.price,
            }));

            const { status } = await api.post(
                "/orders",
                { products, address }, // Envia o endereço junto com os produtos
                {
                    validateStatus: () => true,
                }
            );

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
                    clearCart();
                }, 3000);
                clearCart();
                toast.success("Pedido realizado com Sucesso!");
            } else if (status === 409) {
                toast.error("Falha ao realizar o seu Pedido");
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error("Falha no sistema! Tente novamente");
        }
    } else {
        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
    }

    setIsLoading(false);
};


  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
    <div className="container">
      <br id='espaço-forms'></br>
      <form id="payment-form" onSubmit={handleSubmit}>
        <h2 id='text-pagamento'>Efetue o Pagamento</h2>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>

      <div id='dpm-annotation'>
        <p>
        Os métodos de pagamento são exibidos dinamicamente com base na localização do cliente,
        valor do pedido e moeda.&nbsp;
          <a href={dpmCheckerLink} target='_blank' rel='noopener noreferrer' id="dpm-integration-checker">
          Visualizar métodos de pagamento por transação</a>
        </p>
      </div>
    </div>
  );
}