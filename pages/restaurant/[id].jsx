/* eslint-disable @next/next/no-img-element */
import { getRestaurant } from "../../services/getRestaurant";

export default function PageRestaurant({ restaurant }) {
  const {
    description,
    name,
    logo,
    telephone,
    price_range,
    payment_methods,
    website,
    opening_hours
  } = restaurant

  return (
    <div>
      <img src={logo} alt={name} />
      <h1>{name}</h1>
      <p>{telephone}</p>
      <p>{website}</p>
      <h2>Descrição</h2>
      <p>{description}</p>
      <h2>Faixa de preço</h2>
      <p>{price_range}</p>
      <h2>Horário de Funcionamento</h2>
      <p>{opening_hours}</p>
      <h2>Formas de pagamento</h2>
      <p>{payment_methods}</p>
    </div>
  )
}


export const getServerSideProps = async (context) => {
  const restaurant = await getRestaurant(context.params.id);

  return {
    props: {
      restaurant,
    },
  };
};