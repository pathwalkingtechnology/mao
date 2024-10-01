import mercadopago from 'mercadopago';

const mp = new mercadopago({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

export default mp;
