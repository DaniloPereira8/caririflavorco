import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51QZb1oPvn3afNPa47UoDYxprJTrXmA6qlyYXoRE7Dr9Ita87Y5jJ9esMIysPCMsEaqNHUOfR95onpLqxiw3SerpC0092CwlFpz'
);

export default stripePromise