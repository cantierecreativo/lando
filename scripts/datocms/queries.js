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
          _allTitleLocales {
            locale
            value
          }
        }
        room {
          _allTitleLocales {
            locale
            value
          }
        }
        _allSlugLocales {
          locale
          value
        }
      }
    }
  `,
};
