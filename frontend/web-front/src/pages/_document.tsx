import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'
import theme from '../styles/theme'

class StaticAppDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

export default StaticAppDocument;

StaticAppDocument.getInitialProps = async (ctx: DocumentContext) => {
  const styledComponentSheets = new StyledComponentSheets();
  const materialUiServerStyleSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentSheets.collectStyles(materialUiServerStyleSheets.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentSheets.getStyleElement()}
          {materialUiServerStyleSheets.getStyleElement()}
        </>
      ),
    };
  } finally {
    styledComponentSheets.seal();
  }
};