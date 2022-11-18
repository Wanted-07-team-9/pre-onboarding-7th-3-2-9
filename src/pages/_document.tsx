import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheet = new ServerStyleSheet();

  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
// MyDocument.getInitialProps = async ctx => {
//   const sheet = new ServerStyleSheet();
//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   const originalRenderPage = ctx.renderPage;
//   try {
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: App => props => sheet.collectStyles(<App emotionCache={cache} {...props} />),
//       });

//     const initialProps = await Document.getInitialProps(ctx);
//     const emotionStyles = extractCriticalToChunks(initialProps.html);
//     const emotionStyleTags = emotionStyles.styles.map(style => (
//       <style
//         data-emotion={`${style.key} ${style.ids.join(' ')}`}
//         key={style.key}
//         // eslint-disable-next-line react/no-danger
//         dangerouslySetInnerHTML={{ __html: style.css }}
//       />
//     ));

//     return {
//       ...initialProps,
//       styles: (
//         <>
//           {initialProps.styles}
//           {emotionStyleTags}
//           {sheet.getStyleElement()}
//         </>
//       ),
//     };
//   } finally {
//     sheet.seal();
//   }
// };
