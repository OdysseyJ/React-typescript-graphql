import React from "react";
import { useObserver } from "mobx-react-lite";
import { storeContext } from "./context";
import { useRootData } from "./useStoreData";

const Search = () => {
  const { query, setQuery, setCities } = useRootData(store => ({
    query: store.query.get(),
    setQuery: store.setQuery,
    setCities: store.setCities
  }));
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={() => setCities("하이")}>시티변경</button>
    </div>
  );
};

export default Search;
