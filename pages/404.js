import { useEffect } from 'react';

export default function NotFoound() {
  useEffect(() => {
    const pathname = window.location.pathname.slice(1);

    if (pathname) {
      window.location.href = `/${pathname.split('/')[0]}`;
    }

    return () => {};
  }, []);

  return null;
}
