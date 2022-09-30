import { ISearchResult } from './SearchResult';

const base: ISearchResult = {
  url: 'https://www.google.com',
  title: 'This is a link to a search result about a product or service',
  text: 'The topic of this link is product or service. Description of the search result. This is the description of the product blah blah blah',
};

// SearchResult allows rapid prototyping of components, with alt versions, etc.
// const alt: ISearchResult = {
//   sampleTextProp: 'Hello Alt World!',
// };

export const mockSearchResultProps = {
  base,
  //   alt,
};
