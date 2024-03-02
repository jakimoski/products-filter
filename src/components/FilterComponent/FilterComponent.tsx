import { useEffect, useState } from "react";
import { FilterPropsType, ProductType } from "../../types/Types";
import FilterOption from "./FilterOptionComponent";

export default function Filter({
  updateProducts,
  productsList,
}: FilterPropsType) {
  // SET FILTER STATE
  // Set state for current selected filter - default: Show All
  const [filterTerm, setFilterTerm] = useState("Show All");
  // Set state for all category brand filters
  const [brandCategories, setBrandCategories] = useState<string[]>();

  // FUNCTION TO FILTER BY GENDER () =>
  const filterByGender = (event: any) => {
    // #1 - Get gender selection from current filter target
    const gender: string = event.target.innerText.toString();
    // #2 - Update state for  current selected filter
    setFilterTerm(gender);
    // #3 - Filer the product list fir chosen gender
    const filtered = productsList.filter(
      (product: ProductType) =>
        product.gender.toLowerCase() === gender.toLowerCase()
    );
    //#4 - Set state for listProducts that display the items in products wrapper
    updateProducts(filtered);
  };

  // FUNCTION TO FILTER BY BRAND () =>
  const filterByBrand = (event: any) => {
    //#1 - Get brand selection from current filter target
    const brand: string = event.target.innerText.toString();
    //#2 - Update state for  current selected filter
    setFilterTerm(brand);
    //#3 - Filer the product list fir chosen brand
    const filtered = productsList.filter(
      (product: ProductType) =>
        product.brand.toLowerCase() === brand.toLowerCase()
    );
    //#4 - Set state for listProducts that display the items in products wrapper
    updateProducts(filtered);
  };

  //FUNCTION SHOW ALL FILTER
  const removeFilter = () => {
    //#1 - Set state for listProducts that display the items in products wrapper
    updateProducts(productsList);
    //#2 - Update state for  current selected filter
    setFilterTerm("Show All");
  };

  // FUNCTION TO GET NUMBER OF ITEMS PER GENDER
  const filerGenderLength = (name: string) => {
    let newArr;
    if (name === "Show All") {
      newArr = productsList;
    } else {
      newArr = productsList.filter(
        (el: ProductType) => el.gender.toLowerCase() === name.toLowerCase()
      );
    }
    return newArr.length;
  };

  // FUNCTION TO GET NUMBER OF ITEMS PER BRAND
  const filerBrandLength = (name: string) => {
    let newArr = productsList.filter(
      (el: ProductType) => el.brand.toLowerCase() === name.toLowerCase()
    );

    return newArr.length;
  };

  // USE EFFECT UPDATE WHEN PRODUCT LIST CHANGE(PRODUCT LIST LOADS WHEN PAGE FIRST LOADS AND SETS CURRENT BRAND CATEGORY FILTER ITEMS)
  useEffect(() => {
    const BrandCategories = Array.from(
      new Set(productsList.map((el) => el.brand))
    );
    setBrandCategories(BrandCategories);
  }, [productsList]);

  return (
    <div className="filter-wrapper">
      <h3 className="filter-wrapper__title">Filter by:</h3>
      <div className="filter-group">
        {/* SHOW ALL FILTER */}
        <FilterOption
          category="Show All"
          isActive={filterTerm}
          filterProducts={removeFilter}
          filerItemsLength={filerGenderLength}
        />
      </div>
      {/* GENDER FILTER GROUP */}
      <div className="filter-group">
        <h4 className="filter-group__title">Gender</h4>
        <FilterOption
          category="Female"
          isActive={filterTerm}
          filterProducts={filterByGender}
          filerItemsLength={filerGenderLength}
        />
        <FilterOption
          category="Male"
          isActive={filterTerm}
          filterProducts={filterByGender}
          filerItemsLength={filerGenderLength}
        />
      </div>
      {/* BRAND FILTER GROUP */}
      <div className="filter-group">
        <h4 className="filter-group__title">Brand</h4>
        {brandCategories
          ? brandCategories.map((el, idx) => (
              <FilterOption
                key={idx}
                category={el}
                isActive={filterTerm}
                filterProducts={filterByBrand}
                filerItemsLength={filerBrandLength}
              />
            ))
          : null}
      </div>
    </div>
  );
}
