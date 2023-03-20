import React, { createContext, useEffect, useState } from 'react';
import { getCollectionAndDocument } from '../utils/firebase/Firebase.config';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const fetchDataMap = async () => {
      const categoryMap = await getCollectionAndDocument();
      setCategoriesMap(categoryMap);
    };
    fetchDataMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
