import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';

const CategoryNested = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const isLoading = useSelector((state) => state.categories.isLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoryNested;
