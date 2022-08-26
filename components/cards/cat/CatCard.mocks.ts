import { ICatCard } from './CatCard';

//A file that allows you to generate mock data for a component to test
//how it will render / display

const base: ICatCard = {
  tag: 'Porsche',
  title: 'German engineering',
  body: 'Lorem ipsum dolor sit amet',
  author: 'Alex',
  time: '2h ago',
};

// CatCard allows rapid prototyping of components, with alt versions, etc.
// const alt: ICatCard = {
//   sampleTextProp: 'Hello Alt World!',
// };

export const mockCatCardProps = {
  base,
  //   alt,
};
