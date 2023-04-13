import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
function ServiceLocationMultiselect() {
  const data = [
    {
      Locations: 'Chennai', id: 1
    },
    {
      Locations: 'Hyderabad', id: 2
    },
    {
      Locations: 'Banglore', id: 3
    },
    {
      Locations: 'Delhi', id: 4
    },
    {
      Locations: 'Kerla', id: 5
    },
  ]
  const [products] = useState(data)
  return (
    <>
      <div className="multi-sel-service">
        <Multiselect options={products} displayValue="Locations" />
      </div>
    </>
  )
}
export default ServiceLocationMultiselect