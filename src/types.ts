interface CountryProps {
  city: string;
  country: string;
  image: string;
  flag: string;
}

export interface ContinentProps {
  name: string;
  details: {
    description: string;
    image: string;
    countries: string;
    languages: string;
    cities: string;
  };
  countries: CountryProps[];
}
