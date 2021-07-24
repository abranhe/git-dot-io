import { useEffect } from 'react';
import redirects from '../data/redirect';

export async function getStaticPaths() {
  return {
    paths: redirects.map(({ permalink: link }) => {
      return {
        params: {
          link,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const link = params.link.toLocaleLowerCase();
  const redirect = redirects.find(({ permalink: p }) => p == link);

  return {
    props: {
      url: redirect ? redirect.destination : null,
    },
  };
}

export default function Redirect({ url }) {
  useEffect(() => {
    if (url) {
      window.location.href = url;
    }

    return () => {};
  }, [url]);

  return null;
}
