import { FluidObject } from 'gatsby-image';

export interface IButtonForId {
  setMemberId: (memberId: number) => void;
}

export interface IHealthCard {
  memberId: number | null;
}

export interface IImages {
  [key: string]: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}
