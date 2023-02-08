const { GraphQLClient } = require("graphql-request");
const { siteLocales, localizedAssets } = require("./queries");

module.exports = {
  request: async ({ query, variables }) => {
    const endpoint = "https://graphql.datocms.com/";

    const client = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_API_KEY}`,
      },
    });

    return client.request(query, variables);
  },
  getDatoLocales: async () => {
    const request = module.exports.request;
    const data = await request({ query: siteLocales });

    return data;
  },
  getDatoLocalizedAssets: async () => {
    const request = module.exports.request;
    const data = await request({ query: localizedAssets });

    return data;
  },
};
