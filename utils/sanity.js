import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

import blocksToHtml from "@sanity/block-content-to-html";

//Sanity configuration
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",

  useCdn: process.env.NODE_ENV === "production",
};

//Sanity client
export const sanityClient = createClient(config);

//Helper function for generating image url
export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);

export const contentToHtml = (blocks) => blocksToHtml({ blocks });

//Hook for using the current logged in user
// export const useCurrentUser = createCurrentUserHook(config);
