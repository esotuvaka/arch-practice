import { ISearch } from './Search';

const base: ISearch = {
  sampleTextProp: 'Hello World!',
};

// Search allows rapid prototyping of components, with alt versions, etc.
// const alt: ISearch = {
//   sampleTextProp: 'Hello Alt World!',
// };

export const mockSearchProps = {
  base,
  //   alt,
};
