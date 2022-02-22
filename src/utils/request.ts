import { ContinentProps } from "../types";

export const getContinent = async (slug: string): Promise<ContinentProps> => {
  var continent = {} as ContinentProps;

  switch (slug) {
    case "europe":
      continent.name = "Europa";

      continent.details = {
        description:
          "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
        image: "/assets/continent/europe/continent.png",
        countries: "50",
        languages: "60",
        cities: "27",
      };

      continent.countries = [
        {
          city: "Londres",
          country: "Reino Unido",
          image: "/assets/continent/europe/cities/london.png",
          flag: "/assets/continent/europe/countries/united-kingdom.png",
        },
        {
          city: "Paris",
          country: "França",
          image: "/assets/continent/europe/cities/paris.png",
          flag: "/assets/continent/europe/countries/france.png",
        },
        {
          city: "Roma",
          country: "Itália",
          image: "/assets/continent/europe/cities/rome.png",
          flag: "/assets/continent/europe/countries/italy.png",
        },
        {
          city: "Praga",
          country: "República Tcheca",
          image: "/assets/continent/europe/cities/praga.png",
          flag: "/assets/continent/europe/countries/czech-republic.png",
        },
        {
          city: "Amsterdã",
          country: "Holanda",
          image: "/assets/continent/europe/cities/amsterdam.png",
          flag: "/assets/continent/europe/countries/netherlands.png",
        },
      ];
      break;
    case "asia":
      continent.name = "Ásia";

      continent.details = {
        description:
          "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
        image: "/assets/continent/asia/continent.png",
        countries: "50",
        languages: "72",
        cities: "27",
      };

      continent.countries = [
        {
          city: "Xangai",
          country: "China",
          image: "/assets/continent/asia/cities/shanghai.png",
          flag: "/assets/continent/asia/countries/china.png",
        },
        {
          city: "Mumbai",
          country: "Índia",
          image: "/assets/continent/asia/cities/bombay.png",
          flag: "/assets/continent/asia/countries/india.png",
        },
        {
          city: "Karachi",
          country: "Paquistão",
          image: "/assets/continent/asia/cities/carachi.png",
          flag: "/assets/continent/asia/countries/pakistan.png",
        },
        {
          city: "Seul",
          country: "Coreia do Sul",
          image: "/assets/continent/asia/cities/seoul.png",
          flag: "/assets/continent/asia/countries/south-korea.png",
        },
        {
          city: "Tóquio",
          country: "Japão",
          image: "/assets/continent/asia/cities/tokyo.png",
          flag: "/assets/continent/asia/countries/japan.png",
        },
      ];
      break;
    default:
      console.warn("Requisição não encontrada!");
  }

  return continent;
};
