import React from 'react';
import CategoryItem from '../category-item/CategoryItem';
import './directory-menu.scss';

const DirectoryMenu = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
