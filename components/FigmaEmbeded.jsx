import Head from 'next/head';

const FigmaEmbed = () => (
    <>
      <Head>
        <style>{`
          .figma-embed {
            border: 1px solid rgba(0, 0, 0, 0.1);
            width: 800px;
            height: 450px;
          }
        `}</style>
      </Head>
      <iframe
        className="figma-embed"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMkwIIofd9l10kT10dVXprA%2FArtket%3Fpage-id%3D234%253A5408%26type%3Ddesign%26node-id%3D322-8440%26viewport%3D-1050%252C102%252C0.4%26scaling%3Dscale-down%26starting-point-node-id%3D322%253A8401"
        allowFullScreen
      ></iframe>
    </>
  );
  
  export default FigmaEmbed;