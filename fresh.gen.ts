// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { context } from "$live/live.ts";
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/404.tsx";
import * as $1 from "./routes/[...catchall].tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";

import * as $$$0 from "./sections/SEO.tsx";
import * as $$$1 from "./sections/SEOPDP.tsx";
import * as $$$2 from "./sections/SEOPLP.tsx";
import * as $$$3 from "./sections/configOCC.global.tsx";
import * as $$$4 from "./sections/configShopify.global.tsx";
import * as $$$5 from "./sections/configVNDA.global.tsx";
import * as $$$6 from "./sections/configVTEX.global.tsx";
import * as $$$7 from "./sections/configYourViews.tsx";
import * as $$$$0 from "./functions/occProductDetailsPage.ts";
import * as $$$$1 from "./functions/shopifyProductDetailsPage.ts";
import * as $$$$2 from "./functions/shopifyProductList.ts";
import * as $$$$3 from "./functions/shopifyProductListingPage.ts";
import * as $$$$4 from "./functions/vndaProductDetailsPage.ts";
import * as $$$$5 from "./functions/vndaProductList.ts";
import * as $$$$6 from "./functions/vndaProductListingPage.ts";
import * as $$$$7 from "./functions/vtexConfig.ts";
import * as $$$$8 from "./functions/vtexLegacyProductDetailsPage.ts";
import * as $$$$9 from "./functions/vtexLegacyProductList.ts";
import * as $$$$10 from "./functions/vtexLegacyProductListingPage.ts";
import * as $$$$11 from "./functions/vtexLegacyRelatedProductsLoader.ts";
import * as $$$$12 from "./functions/vtexNavbar.ts";
import * as $$$$13 from "./functions/vtexProductDetailsPage.ts";
import * as $$$$14 from "./functions/vtexProductList.ts";
import * as $$$$15 from "./functions/vtexProductListingPage.ts";
import * as $$$$16 from "./functions/vtexSuggestions.ts";
import * as $$$$17 from "$live/functions/EffectSelectPage.ts";
import * as $$$$18 from "$live/functions/MatchDate.ts";
import * as $$$$19 from "$live/functions/MatchEnvironment.ts";
import * as $$$$20 from "$live/functions/MatchRandom.ts";
import * as $$$$21 from "$live/functions/MatchSite.ts";
import * as $$$$22 from "$live/functions/MatchUserAgent.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/404.tsx": $0,
    "./routes/[...catchall].tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {},
  sections: {
    "./sections/SEO.tsx": $$$0,
    "./sections/SEOPDP.tsx": $$$1,
    "./sections/SEOPLP.tsx": $$$2,
    "./sections/configOCC.global.tsx": $$$3,
    "./sections/configShopify.global.tsx": $$$4,
    "./sections/configVNDA.global.tsx": $$$5,
    "./sections/configVTEX.global.tsx": $$$6,
    "./sections/configYourViews.tsx": $$$7,
  },
  functions: {
    "./functions/occProductDetailsPage.ts": $$$$0,
    "./functions/shopifyProductDetailsPage.ts": $$$$1,
    "./functions/shopifyProductList.ts": $$$$2,
    "./functions/shopifyProductListingPage.ts": $$$$3,
    "./functions/vndaProductDetailsPage.ts": $$$$4,
    "./functions/vndaProductList.ts": $$$$5,
    "./functions/vndaProductListingPage.ts": $$$$6,
    "./functions/vtexConfig.ts": $$$$7,
    "./functions/vtexLegacyProductDetailsPage.ts": $$$$8,
    "./functions/vtexLegacyProductList.ts": $$$$9,
    "./functions/vtexLegacyProductListingPage.ts": $$$$10,
    "./functions/vtexLegacyRelatedProductsLoader.ts": $$$$11,
    "./functions/vtexNavbar.ts": $$$$12,
    "./functions/vtexProductDetailsPage.ts": $$$$13,
    "./functions/vtexProductList.ts": $$$$14,
    "./functions/vtexProductListingPage.ts": $$$$15,
    "./functions/vtexSuggestions.ts": $$$$16,
    "$live/functions/EffectSelectPage.ts": $$$$17,
    "$live/functions/MatchDate.ts": $$$$18,
    "$live/functions/MatchEnvironment.ts": $$$$19,
    "$live/functions/MatchRandom.ts": $$$$20,
    "$live/functions/MatchSite.ts": $$$$21,
    "$live/functions/MatchUserAgent.ts": $$$$22,
  },
  schemas: {
    "./sections/SEO.tsx": {
      "inputSchema": {
        "title": " S E O",
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "canonical": {
            "type": [
              "string",
              "null",
            ],
            "title": "Canonical URL",
            "default": "https://example.com",
          },
          "imageUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Image Url",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/SEOPDP.tsx": {
      "inputSchema": {
        "title": " S E O P D P",
        "type": "object",
        "properties": {
          "page": {
            "$id": "bf6c5311c35f44b8ba333ce3c2acd5fed0d8ad8a",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
          "titleTemplate": {
            "type": "string",
            "title": "Title template",
            "description":
              "add a %s whenever you want it to be replaced with the product name",
            "default": "%s | Fashion Store",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Meta tag description",
            "description":
              "If not set, the product description will be used instead",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [
          "page",
          "titleTemplate",
        ],
      },
      "outputSchema": null,
    },
    "./sections/SEOPLP.tsx": {
      "inputSchema": {
        "title": " S E O P L P",
        "type": "object",
        "properties": {
          "page": {
            "$id": "93678a2f6c9ab06d039c9fcd9714055f1a81449f",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Url",
          },
          "imageUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Image Url",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/configOCC.global.tsx": {
      "inputSchema": {
        "title": "Config O C C.global",
        "type": "object",
        "properties": {
          "baseUrl": {
            "type": "string",
            "title": "Base Url",
          },
          "nrpp": {
            "type": [
              "string",
              "null",
            ],
            "title": "Nrpp",
          },
        },
        "required": [
          "baseUrl",
        ],
      },
      "outputSchema": null,
    },
    "./sections/configShopify.global.tsx": {
      "inputSchema": {
        "title": "Config Shopify.global",
        "type": "object",
        "properties": {
          "storeName": {
            "type": "string",
            "title": "Store Name",
            "description": "Shopify store name.",
          },
          "storefrontAccessToken": {
            "type": "string",
            "title": "Storefront Access Token",
            "description": "Shopify storefront access token.",
          },
        },
        "required": [
          "storeName",
          "storefrontAccessToken",
        ],
      },
      "outputSchema": null,
    },
    "./sections/configVNDA.global.tsx": {
      "inputSchema": {
        "title": "Config V N D A.global",
        "type": "object",
        "properties": {
          "domain": {
            "type": "string",
            "title": "Domain",
            "description":
              "Your VNDA domain name. For example, https://mystore.vnda.com.br",
          },
          "authToken": {
            "type": "string",
            "title": "Auth Token",
            "description":
              "The token generated from admin panel. Read here: https://developers.vnda.com.br/docs/chave-de-acesso-e-requisicoes. Do not add any other permissions than catalog.",
          },
          "useSandbox": {
            "type": "boolean",
            "title": "Use Sandbox",
            "description": "Define if sandbox environment should be used",
          },
          "defaultPriceCurrency": {
            "type": "string",
            "title": "Default Price Currency",
            "description": "Default price currency.",
            "default": "USD",
          },
        },
        "required": [
          "domain",
          "authToken",
          "useSandbox",
          "defaultPriceCurrency",
        ],
      },
      "outputSchema": null,
    },
    "./sections/configVTEX.global.tsx": {
      "inputSchema": {
        "title": "Config V T E X.global",
        "type": "object",
        "properties": {
          "account": {
            "type": "string",
            "title": "Account",
            "description":
              "VTEX Account name. For more info, read here: https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC.",
          },
          "defaultLocale": {
            "type": "string",
            "title": "Default Locale",
            "description": "Locale used for VTEX Intelligent Search client.",
          },
          "defaultPriceCurrency": {
            "type": "string",
            "title": "Default Price Currency",
            "description": "Default price currency.",
            "default": "USD",
          },
          "defaultSalesChannel": {
            "type": "string",
            "title": "Default Sales Channel",
            "description":
              "VTEX sales channel. This will be the default sales channel your site. For more info, read here: https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV",
          },
          "defaultRegionId": {
            "type": [
              "string",
              "null",
            ],
            "title": "Default Region Id",
          },
          "defaultHideUnnavailableItems": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Default Hide Unnavailable Items",
          },
        },
        "required": [
          "account",
          "defaultLocale",
          "defaultPriceCurrency",
          "defaultSalesChannel",
        ],
      },
      "outputSchema": null,
    },
    "./sections/configYourViews.tsx": {
      "inputSchema": {
        "title": "Config Your Views",
        "type": "object",
        "properties": {
          "token": {
            "type": "string",
            "title": "Token",
          },
          "appId": {
            "type": "string",
            "title": "App Id",
          },
        },
        "required": [
          "token",
          "appId",
        ],
      },
      "outputSchema": null,
    },
    "./functions/occProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Occ Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bf6c5311c35f44b8ba333ce3c2acd5fed0d8ad8a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Shopify Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bf6c5311c35f44b8ba333ce3c2acd5fed0d8ad8a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductList.ts": {
      "inputSchema": {
        "title": "Shopify Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "search term to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bae848f3957be1cb6ed2c2ac3847787272389ee9",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductListingPage.ts": {
      "inputSchema": {
        "title": "Shopify Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "93678a2f6c9ab06d039c9fcd9714055f1a81449f",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vndaProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vnda Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bf6c5311c35f44b8ba333ce3c2acd5fed0d8ad8a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vndaProductList.ts": {
      "inputSchema": {
        "title": "Vnda Product List",
        "type": "object",
        "properties": {
          "limit": {
            "type": "number",
            "title": "Limit",
            "description": "total number of items to display",
          },
          "term": {
            "type": [
              "string",
              "null",
            ],
            "title": "Term",
            "description": "query to use on search",
          },
          "wildcard": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Wildcard",
            "description": "search for term anywhere",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "newest",
              },
              {
                "type": "string",
                "const": "oldest",
              },
              {
                "type": "string",
                "const": "lowest_price",
              },
              {
                "type": "string",
                "const": "highest_price",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Tags",
            "description": "search for products that have certain tag",
          },
        },
        "required": [
          "limit",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bae848f3957be1cb6ed2c2ac3847787272389ee9",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vndaProductListingPage.ts": {
      "inputSchema": {
        "title": "Vnda Product Listing Page",
        "type": "object",
        "properties": {
          "term": {
            "type": [
              "string",
              "null",
            ],
            "title": "Term",
            "description": "overides the query term",
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Tags",
            "description": "filter products by tag",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "93678a2f6c9ab06d039c9fcd9714055f1a81449f",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexConfig.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Config",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "4a94f4ff0e8e4441f26651aaed22f0df82f38c93",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexLegacyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Legacy Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bf6c5311c35f44b8ba333ce3c2acd5fed0d8ad8a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexLegacyProductList.ts": {
      "inputSchema": {
        "title": "Vtex Legacy Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "const": "price:desc",
              },
              {
                "type": "string",
                "const": "price:asc",
              },
              {
                "type": "string",
                "const": "orders:desc",
              },
              {
                "type": "string",
                "const": "name:desc",
              },
              {
                "type": "string",
                "const": "name:asc",
              },
              {
                "type": "string",
                "const": "release:desc",
              },
              {
                "type": "string",
                "const": "discount:desc",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
          "collection": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Collection",
            "description":
              "Collection ID or (Product Cluster id). For more info: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search .",
            "pattern": "\\d*",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bae848f3957be1cb6ed2c2ac3847787272389ee9",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexLegacyProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Legacy Product Listing Page",
        "type": "object",
        "properties": {
          "term": {
            "type": [
              "string",
              "null",
            ],
            "title": "Term",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
          "ft": {
            "type": [
              "string",
              "null",
            ],
            "title": "Ft",
            "description": "FullText term",
          },
          "fq": {
            "type": [
              "string",
              "null",
            ],
            "title": "Fq",
          },
          "map": {
            "type": [
              "string",
              "null",
            ],
            "title": "Map",
            "description": "map param",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "93678a2f6c9ab06d039c9fcd9714055f1a81449f",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexLegacyRelatedProductsLoader.ts": {
      "inputSchema": {
        "title": "Vtex Legacy Related Products Loader",
        "type": "object",
        "properties": {
          "crossSelling": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "anyOf": [
                  {
                    "type": "string",
                    "const": "whosawalsosaw",
                  },
                  {
                    "type": "string",
                    "const": "whosawalsobought",
                  },
                  {
                    "type": "string",
                    "const": "whoboughtalsobought",
                  },
                  {
                    "type": "string",
                    "const": "showtogether",
                  },
                  {
                    "type": "string",
                    "const": "accessories",
                  },
                  {
                    "type": "string",
                    "const": "similars",
                  },
                  {
                    "type": "string",
                    "const": "suggestions",
                  },
                ],
                "title": "CrossSellingType",
              },
            ],
            "title": "Related Products",
            "description":
              "VTEX Cross Selling API. This loader only works on routes of type /:slug/p",
          },
          "count": {
            "type": [
              "number",
              "null",
            ],
            "title": "Count",
          },
        },
        "required": [],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bae848f3957be1cb6ed2c2ac3847787272389ee9",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexNavbar.ts": {
      "inputSchema": {
        "title": "Vtex Navbar",
        "type": "object",
        "properties": {
          "levels": {
            "type": [
              "number",
              "null",
            ],
            "title": "Levels",
            "description": "Number of levels of categories to be returned",
            "default": "2",
          },
        },
        "required": [],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "0244534df7e3d23a94046f4c6f7086c2b72853b8",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bf6c5311c35f44b8ba333ce3c2acd5fed0d8ad8a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductList.ts": {
      "inputSchema": {
        "title": "Vtex Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "const": "price:desc",
              },
              {
                "type": "string",
                "const": "price:asc",
              },
              {
                "type": "string",
                "const": "orders:desc",
              },
              {
                "type": "string",
                "const": "name:desc",
              },
              {
                "type": "string",
                "const": "name:asc",
              },
              {
                "type": "string",
                "const": "release:desc",
              },
              {
                "type": "string",
                "const": "discount:desc",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
          "collection": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Collection",
            "description":
              "Collection ID or (Product Cluster id). For more info: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search .",
            "pattern": "\\d*",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "bae848f3957be1cb6ed2c2ac3847787272389ee9",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "93678a2f6c9ab06d039c9fcd9714055f1a81449f",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexSuggestions.ts": {
      "inputSchema": {
        "title": "Vtex Suggestions",
        "type": "object",
        "properties": {
          "count": {
            "type": [
              "number",
              "null",
            ],
            "title": "Count",
            "description": "limit the number of searches",
            "default": "4",
          },
        },
        "required": [],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "fa622ecbfb24e1b878a945d22f51f46a3e939525",
          },
        },
        "additionalProperties": true,
      },
    },
    "$live/functions/EffectSelectPage.ts": {
      "inputSchema": {
        "title": " Effect Select Page",
        "type": "object",
        "properties": {
          "pageIds": {
            "type": "array",
            "items": {
              "type": "number",
            },
            "title": "Page Ids",
          },
        },
        "required": [
          "pageIds",
        ],
      },
      "outputSchema": null,
    },
    "$live/functions/MatchDate.ts": {
      "inputSchema": {
        "title": " Match Date",
        "type": "object",
        "properties": {
          "start": {
            "type": [
              "string",
              "null",
            ],
            "title": "Start",
            "format": "date-time",
          },
          "end": {
            "type": [
              "string",
              "null",
            ],
            "title": "End",
            "format": "date-time",
          },
          "session": {
            "type": "boolean",
            "title": "Session",
          },
        },
        "required": [
          "session",
        ],
      },
      "outputSchema": null,
    },
    "$live/functions/MatchEnvironment.ts": {
      "inputSchema": {
        "title": " Match Environment",
        "type": "object",
        "properties": {
          "environment": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "production",
              },
              {
                "type": "string",
                "const": "development",
              },
            ],
            "title": "Environment",
          },
        },
        "required": [
          "environment",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "c995d72dc372b1b50bf9f70943e37fc94e1ccac9",
          },
        },
        "additionalProperties": true,
      },
    },
    "$live/functions/MatchRandom.ts": {
      "inputSchema": {
        "title": " Match Random",
        "type": "object",
        "properties": {
          "traffic": {
            "type": "number",
            "title": "Traffic",
          },
          "session": {
            "type": "boolean",
            "title": "Session",
          },
        },
        "required": [
          "traffic",
          "session",
        ],
      },
      "outputSchema": null,
    },
    "$live/functions/MatchSite.ts": {
      "inputSchema": {
        "title": " Match Site",
        "type": "object",
        "properties": {
          "siteId": {
            "type": "number",
            "title": "Site Id",
          },
        },
        "required": [
          "siteId",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "c995d72dc372b1b50bf9f70943e37fc94e1ccac9",
          },
        },
        "additionalProperties": true,
      },
    },
    "$live/functions/MatchUserAgent.ts": {
      "inputSchema": {
        "title": " Match User Agent",
        "type": "object",
        "properties": {
          "includes": {
            "type": [
              "string",
              "null",
            ],
            "title": "Includes",
          },
          "match": {
            "type": [
              "string",
              "null",
            ],
            "title": "Match",
          },
        },
        "required": [],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "c995d72dc372b1b50bf9f70943e37fc94e1ccac9",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
context.manifest = manifest;

export default manifest;
