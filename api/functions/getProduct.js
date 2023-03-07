const { postToShopify } = require("./postToShopify");

exports.getProduct = async ({ itemHandle }) => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getProduct($handle: String!) {
          productByHandle(handle: $handle) {
            id
            handle
            description
            title
            totalInventory
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
          }
        }
      `,
      variables: {
        handle: itemHandle,
      },
    });

    return shopifyResponse;
  } catch (error) {
    console.log(error);
  }
};
