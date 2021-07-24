import { useEffect } from 'react';

export default function NotFoound() {
  useEffect(() => {
    window.location.href = '/';

    return () => {};
  }, []);

  return null;
}
