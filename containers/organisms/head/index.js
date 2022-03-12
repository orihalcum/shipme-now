import Head from 'next/head'
import { FAVICON_LOGO } from '../../../config';

const MainHead = ({ metadata }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="shortcut icon" href={FAVICON_LOGO}></link>
      <meta name="description" content={metadata?.description} />
      <meta name="keywords" content={metadata?.keywords} />
      <title>{metadata?.title}</title>
    </Head>
  )
}

export default MainHead

MainHead.propTypes = {}

MainHead.defaultProps = {
  metadata: {},
}