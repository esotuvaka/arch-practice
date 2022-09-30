// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../lib/search/database.json';
import { ISearchData } from '../../lib/search/types';

interface IApiSearchRequest extends NextApiRequest {
  body: { searchTerm?: string };
}

export type IApiSearchResponseData = ISearchData[];

export default function handler(
  req: IApiSearchRequest,
  res: NextApiResponse<IApiSearchResponseData>
) {
  const {
    body: { searchTerm },
  } = req;

  if (req.method === 'POST' && searchTerm && searchTerm.length > 0) {
    // Create a regex to make case insensitive match from user's search
    const searchPattern = new RegExp(searchTerm, 'i');

    const filteredResults = database.filter((result) => {
      return (
        //Check user's search term for match with either title or text of db entry
        searchPattern.test(result.title) || searchPattern.test(result.text)
      );
    });
    res.status(200).json(filteredResults);
  } else {
    res.status(400).json([]);
  }
}
