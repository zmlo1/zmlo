import { getTotal } from '@zmlo/utils';

const array = [{ num: '0.1' }, { num: 0.2 }, { num: 0.1 }];

function bootstrap() {
  console.log(+getTotal(array, 'num'));
}

bootstrap();
