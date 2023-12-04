/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ protocol: "https", hostname: "**" }],
        domains: ["https://portfolio-anhtuanlee.vercel.app/"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        prependData: `@import "~src/styles/_variables.scss";
    @import "~src/styles/_mixins.scss";
    @import "~src/styles/_types.scss";
  `,
    },
}

module.exports = nextConfig
