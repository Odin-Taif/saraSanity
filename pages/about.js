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
              We provide real-time connectivity to enable software
              providers and financial institutions to build integrated
              products for their small business customers.
            </p>
            <p>
              Our API infrastructure is leveraged by clients ranging
              from lenders to corporate card providers and business
              forecasting tools, with use cases including automatic
              reconciliation, business dashboarding, and loan
              decisioning.
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
