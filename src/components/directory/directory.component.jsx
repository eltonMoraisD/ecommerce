import { CategoryItem } from "../category-item/category-item.component";
import "./directory.styles.scss";

export const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
