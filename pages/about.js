import Container from "@components/container";
import Layout from "@components/layout";
import { authorsquery, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import GetImage from "@utils/getImage";
import Image from "next/image";
import Link from "next/link";
import qrlogo from "../public/myQR.png";

export default function About({ authors, siteconfig }) {
  return (
    <Layout {...siteconfig}>
      <Container>
        <div className="text-center">
          <p className="text-lg">Sara Khaiat</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
          {authors.slice(0, 3).map(author => (
            <div
              key={author._id}
              className="relative max-w-[70%] overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
              <Image
                {...GetImage(author.image)}
                alt={author.name || " "}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 320px) 100vw, 320px"
              />
            </div>
          ))}
          <div className="mx-auto prose text-center dark:prose-invert mt-14">
            <p>
              Sara Khayat is a feminist graphic designer, illustrator,
              and visual artist from Syria. She was born in Damascus
              and studied graphic design at the International
              University for Science and Technology (IUST Syria),
              Khayat’s work is focused on women’s, LGBTQI+, and
              refugee rights, using illustration and graphic design to
              support a wide range of social justice causes, including
              challenging gender stereotypes and gender-based
              violence. Sara has worked for and with a variety of
              organisations across Turkey, Lebanon, and Europe. Since
              the beginning of the Syrian Civil War in 2011, Khayat
              has worked on documenting human rights violations by all
              parties involved in the conflict and the oral histories
              of women detained by the Syrian regime. Due to the focus
              and the nature of her work, Sara Khayat was forced to
              flee Syria for Turkey in 2015. At the beginning of 2023,
              Sara arrived in Sweden and became the ICORN resident in
              Gävle City of Refuge. She is the third ICORN resident
              Gävle has hosted.
            </p>
            <p>
              <Link href="/contact">Get in touch</Link>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
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
