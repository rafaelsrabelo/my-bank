import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {});

export const priceFOrmatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})