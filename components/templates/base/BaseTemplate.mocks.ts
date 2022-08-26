import { IBaseTemplate } from './BaseTemplate';

const base: IBaseTemplate = {
  sampleTextProp: 'Hello World!',
};

// BaseTemplate allows rapid prototyping of components, with alt versions, etc.
// const alt: IBaseTemplate = {
//   sampleTextProp: 'Hello Alt World!',
// };

export const mockBaseTemplateProps = {
  base,
  //   alt,
};
