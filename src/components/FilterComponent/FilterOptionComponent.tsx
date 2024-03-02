import { FilterOptionProps } from "../../types/Types";

export default function FilterOption({
  category,
  filterProducts,
  filerItemsLength,
  isActive,
}: FilterOptionProps) {
  return (
    <div
      className={`filter-group__item ${
        isActive === category ? `active` : undefined
      } `}
    >
      <span
        className="filter-group__item__title"
        style={{ width: "100%" }}
        onClick={filterProducts}
      >
        {category}
      </span>
      <span className="filter-group__item__count">
        {filerItemsLength(category)}
      </span>
    </div>
  );
}
