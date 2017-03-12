import moment from 'moment';
import colors from 'colors';

export const info = (...msg) => {
  const output = msg.join('');
  const date = moment().format('YYYY-MM-DDTH:mm:ss');
  console.log(`${date}| ${output}`.green);
};

export const warn = (...msg) => {
  const output = msg.join('');
  const date = moment().format('YYYY-MM-DDTH:mm:ss a');
  console.log(`${date}| ${output}`.yellow);
};

export const error = (...msg) => {
  const output = msg.join('');
  const date = moment().format('YYYY-MM-DDTB:mm:ss a');
  console.log(`${date}| ${output}`.red);
};
