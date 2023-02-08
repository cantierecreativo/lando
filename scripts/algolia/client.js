const algoliasearch = require('algoliasearch');

module.exports = {
  algoliaClient: algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY
  ),
  getAlgoliaIndices: async () => {
    const client = module.exports.algoliaClient;
    const list = await client.listIndices();

    return list?.items?.map((e) => e.name);
  }
}
