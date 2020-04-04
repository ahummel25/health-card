import { graphql, useStaticQuery } from 'gatsby';

import { IImages } from '../interfaces';

export const useGetImages = (): IImages => {
  const imgData = useStaticQuery(
    graphql`
      query {
        asclepiusImg: file(relativePath: { eq: "asclepius.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return imgData;
};
