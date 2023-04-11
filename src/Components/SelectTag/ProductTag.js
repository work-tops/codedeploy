import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
function ProductMultiselectDropdown() {
  const data = [
    {
        ProCategories: 'Colour', id: 1
    },
    {
        ProCategories: 'FinshedType', id: 2
    },
    {
        ProCategories: 'Length', id: 3
    },
    {
        ProCategories: 'Width', id: 4
    },
    {
        ProCategories: 'Size', id: 5
    },
  ]
  const [products] = useState(data)
  return (
    <>
    <div  className="multi-sel">
      <Multiselect  options={products} displayValue="ProCategories"/>
    </div>
    </>
  )
}
export default ProductMultiselectDropdown