import { useState, useMemo } from "react";

const sortAlphabetically = (data, key, direction) => {
  return data.sort((a, b) => {
    if (a[key] < b[key]) {
      return direction === "ascending" ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return direction === "ascending" ? 1 : -1;
    }
    return 0;
  });
};

const sortNumerically = (data, key, direction) => {
  return data.sort((a, b) => {
    if (direction === "descending") {
      return a[key] - b[key];
    }
    return b[key] - a[key];
  });
};

export default function useSortableData(displayableCountries, config = null) {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedCountries = useMemo(() => {
    const sortableCountries = [...displayableCountries];
    let result;
    if (sortConfig !== null) {
      if (typeof sortableCountries[0][sortConfig.key] === "number") {
        result = sortNumerically(
          sortableCountries,
          sortConfig.key,
          sortConfig.direction
        );
      } else {
        result = sortAlphabetically(
          sortableCountries,
          sortConfig.key,
          sortConfig.direction
        );
      }
    } else {
      result = displayableCountries;
    }
    if (sortConfig) {
      console.log(result.map((item) => item[sortConfig.key]));
    }
    return result;
  }, [displayableCountries, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const result = {
    sortedCountries,
    requestSort,
    sortConfig,
  };

  return result;
}
