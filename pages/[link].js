import { useEffect } from 'react';
import { useRouter } from 'next/router';
import redirects from '../data/redirect';

export default function Redirect() {
  const router = useRouter();
  const { link } = router.query;

  useEffect(() => {
    if (link && typeof link === 'string') {
      const redirectTo = redirects.find(
        ({ permalink }) => permalink == link.toLocaleLowerCase(),
      );

      window.location.href = redirectTo ? redirectTo.destination : '/';
    }

    return () => {};
  }, [link]);

  return null;
}
