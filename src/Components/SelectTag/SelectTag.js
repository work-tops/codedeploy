import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
function SkillsMultiselectDropdown() {
  const data = [
    {
      Skills: 'HTML', id: 1
    },
    {
      Skills: 'CSS', id: 2
    },
    {
      Skills: 'Java', id: 3
    },
    {
      Skills: 'React', id: 4
    },
    {
      Skills: 'BootStrap', id: 5
    },
  ]
  const [skills] = useState(data)
  return (
    <>
    <div className="multi-sel">
      <Multiselect options={skills} displayValue="Skills"/>
    </div>
    </>
  )
}
export default SkillsMultiselectDropdown