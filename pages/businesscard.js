import Container from "@components/container";
import { authorsquery, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import GetImage from "@utils/getImage";
import Image from "next/image";
import { SociaMediaLinkVertical } from "../components/socialmedia";

export default function Businesscard({ authors, siteconfig }) {
  return (
    <Container>
      <div className="text-center">
        {authors.slice(0, 3).map(author => (
          <div
            key={author._id}
            className="relative max-w-[20%] overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
            <Image
              {...GetImage(author.image)}
              alt={author.name || " "}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
            />
          </div>
        ))}
        <p className="text-lg">Sara Khaiat</p>
        <hr className="my-6 border-blueGray-300" />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-2 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        <div className="mx-auto prose text-center dark:prose-invert mt-14">
          <SociaMediaLinkVertical />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //console.log(params);
  const authors = await getClient(preview).fetch(authorsquery);
  const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      authors: authors,
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}
