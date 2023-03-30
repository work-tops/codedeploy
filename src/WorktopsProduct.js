import React from "react";
import ProductEdit from "./Components/ProductEdit";
import WorktopsHeader from "./Components/WorktopsHeader";
import WorktopsProductMenu from "./Components/wtmenubar";
function WorktopsProducts(){
    return(
    <>
    <WorktopsHeader/>
    <WorktopsProductMenu/>
    <ProductEdit/>
    </>
    )
}
export default WorktopsProducts