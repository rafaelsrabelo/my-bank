import { parseISO, isAfter } from 'date-fns';

const date = '2018-04-01 18:00:00';
const parsedDate = parseISO(date);

export const past = isAfter(parsedDate, new Date()); // true