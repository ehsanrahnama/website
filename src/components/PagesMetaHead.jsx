import Head from "next/head";

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href="https://ehsanrahnama.github.io/website/favicon.ico"
      />
      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Ehsan Rahnama",
  keywords: "ML developer Ehsan Rahi AI",
  keywords: "ML developer Ehsan Rahi AI Personal Website",
};

export default PagesMetaHead;
