/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { IoIosArrowBack } from 'react-icons/io';
import { getRestaurant } from "../../services/getRestaurant";
import { BtnBack, ContainerImg, HeaderInternal, InfoContainer, PageInternal, SectionText } from "../../styles/pageRestaurant/style";

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
  const router = useRouter();

  return (
    <PageInternal>
      <Head>
        <title>{name}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={name} />
        <meta
          property='og:description'
          content={description}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderInternal>
        <BtnBack onClick={() => router.push('/')}><IoIosArrowBack />Voltar</BtnBack>
        <span>
          <ContainerImg>
            <img src={logo} alt={name} />
          </ContainerImg>
          <div>
            <h1>{name}</h1>
            <p>{telephone}</p>
            <p>{website}</p>
          </div>
        </span>
      </HeaderInternal>

      <InfoContainer>
        <span>
          <SectionText>
            <h2>Descrição</h2>
            <p>{description}</p>
          </SectionText>

          <SectionText>
            <h2>Faixa de preço</h2>
            <p>{price_range}</p>
          </SectionText>
        </span>

        <div>
          <SectionText>
            <h2>Horário de Funcionamento</h2>
            <p>{opening_hours}</p>
          </SectionText>

          <SectionText>
            <h2>Formas de pagamento</h2>
            <p>{payment_methods}</p>
          </SectionText>
        </div>
      </InfoContainer>
    </PageInternal>
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