import { observable } from "mobx";

let data: string[] = [];
let Cities = observable(data);

export const cityStore = () => {
  const store = {
    get allCities() {
      return Cities;
    },
    setCities(city: string) {
      Cities.push(city);
    },
    query: observable.box(""),
    setQuery(query: string) {
      store.query.set(query.toLowerCase());
    },
    get filteredCities() {
      return Cities.filter(city =>
        city.toLowerCase().includes(store.query.get())
      );
    }
  };
  return store;
};

export type TStore = ReturnType<typeof cityStore>;
