import * as React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import theme from '../config/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={theme.palette.primary.main}
          />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
