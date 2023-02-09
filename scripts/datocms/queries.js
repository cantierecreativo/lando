const { gql } = require("graphql-request");

module.exports = {
  siteLocales: gql`
    query {
      _site {
        locales
      }
    }
  `,
  localizedAssets: gql`
    query {
      allArtworks(first: "100") {
        id
        _locales
        _allTitleLocales {
          locale
          value
        }
        typology {
          title
        }
        room {
          title
        }
        _allSlugLocales {
          locale
          value
        }
      }
    }
  `,
};
