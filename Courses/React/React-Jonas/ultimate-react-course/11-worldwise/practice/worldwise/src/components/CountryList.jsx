import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import { useCities } from "../../context/CitiesContext";

function Country() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the map"></Message>
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i}></CountryItem>
      ))}
    </ul>
  );
}

export default Country;
