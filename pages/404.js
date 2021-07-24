import { useEffect } from 'react';

export default function NotFoound() {
  useEffect(() => {
    const [_, path] = window.location.pathname.split('/');
    window.location.href = path;

    return () => {};
  }, []);

  return null;
}
