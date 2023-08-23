
import Router from 'next/router';
import { useEffect, useState } from 'react';

export const usePageLoading = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const routeEventStart = () => {
        console.log(1)
      setIsPageLoading(true);
    };
    const routeEventEnd = () => {
        console.log(2)
      setIsPageLoading(false);
    };

    Router.events.on('routeChangeStart', routeEventStart);
    Router.events.on('routeChangeComplete', routeEventEnd);
    Router.events.on('routeChangeError', routeEventEnd);
    return () => {
      Router.events.off('routeChangeStart', routeEventStart);
      Router.events.off('routeChangeComplete', routeEventEnd);
      Router.events.off('routeChangeError', routeEventEnd);
    };
  }, [Router]);

  return { isPageLoading };
};