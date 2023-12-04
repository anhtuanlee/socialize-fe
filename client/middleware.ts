import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    defaultLocale: 'en',
    locales: ['en'],
    // domains: [
    //     {
    //         domain: 'http://portfolio-anhtuanlee.vercel.app',
    //         defaultLocale: 'en',
    //         // Optionally restrict the locales managed by this domain. If this
    //         // domain receives requests for another locale (e.g. us.example.com/fr),
    //         // then the middleware will redirect to a domain that supports it.
    //         locales: ['vi', 'en'],
    //     },
    // ],
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
