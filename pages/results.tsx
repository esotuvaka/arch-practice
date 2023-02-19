import Image from 'next/image';
import { Configuration, OpenAIApi } from 'openai';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

type TQuery = {
  query: { search: string; quality: string; images: number };
};

type TResults = {
  imageUrls: { url: string }[];
  input: string;
};

export const getServerSideProps = async ({ query }: TQuery) => {
  let imageUrls = null;

  const input = query.search;
  const images = query.images;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  if (input && input.length > 0) {
    try {
      const response = await openai.createImage({
        prompt: input,
        n: 3,
        size: '512x512',
      });

      const urls = response.data.data;

      imageUrls = urls;
    } catch (error: unknown) {
      console.log('ERROR; UNABLE TO GENERATE');
    }
  } else {
    console.log('UNABLE TO GENERATE');
  }

  return {
    props: {
      imageUrls,
      input,
    },
  };
};

const Results = ({ imageUrls, input }: TResults) => {
  console.log(input);
  return (
    <>
      <section className="flex flex-col pt-12 mt-[10vh] justify-center w-[100vw] items-center gap-y-5">
        {imageUrls ? (
          <div className="p-8 rounded-lg w-4/5 mx-auto grid grid-cols-2">
            <div>
              {imageUrls.map((object, index) => {
                return <ImageSection key={index} imageUrl={object.url} />;
              })}
            </div>
            <aside className="pl-8">
              <h1 className="text-7xl">{input}</h1>
              <p>URLs expire after an hour!</p>
            </aside>
          </div>
        ) : (
          <p>
            Error. Your request was rejected as a result of our safety system.
            Your prompt may contain text that is not allowed, or OpenAI services
            may be down.
          </p>
        )}
      </section>
    </>
  );
};

export default Results;

type TImageSection = {
  imageUrl: string;
};

const ImageSection = ({ imageUrl }: TImageSection) => {
  return (
    <div className="flex justify-center">
      <div className="drop-shadow-2xl ">
        <Image
          src={imageUrl}
          alt="ai-image"
          height="512"
          width="512"
          priority
        />
      </div>
      <div className="flex flex-col ml-4">
        <p>Download</p>
        <p>Remix</p>
        <p>Share</p>
      </div>
    </div>
  );
};

Results.getLayout = (page: any) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
