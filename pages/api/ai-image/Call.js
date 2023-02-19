import { Configuration, OpenAIApi } from 'openai';

export async function Call(query) {
  const configuration = new Configuration({
    apiKey: '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',
  });

  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: query,
    n: 2,
    size: '1024x1024',
  });

  // const url = response.data.data[0].url;

  const url = response.data.data[0].url;

  console.log(url);

  return url;
}
