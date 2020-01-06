import React from "react";
import { storeContext } from "./context";
import { useObserver } from "mobx-react-lite";
import { useRootData } from "./useStoreData";

type CityViewProps = {
  cities: string[];
};

export const CityView = ({ cities }: CityViewProps) => {
  return (
    <ul>
      {cities.map(city => (
        <li>{city}</li>
      ))}
    </ul>
  );
};

export const CityList = () => {
  const cities = useRootData(store => store.filteredCities);

  return <CityView cities={cities}></CityView>;
};

export default CityList;
