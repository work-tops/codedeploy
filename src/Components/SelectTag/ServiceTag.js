import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
function ServiceMultiselectDropdown() {
  const data = [
    {
        Services: 'Kitchen Service', id: 1
    },
    {
        Services: 'Kitchen Service-1', id: 2
    },
    {
        Services: 'Kitchen Service-2', id: 3
    },
    {
        Services: 'Kitchen Service-3', id: 4
    },
    {
        Services: 'Kitchen Service-4', id: 5
    },
  ]
  const [products] = useState(data)
  return (
    <>
    <div className="multi-sel">
      <Multiselect options={products} displayValue="Services"/>
    </div>
    </>
  )
}
export default ServiceMultiselectDropdown