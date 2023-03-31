import React from "react";
import ProductEdit from "../Product/ProductEdit";
import WorktopsHeader from "../Header/WorktopsHeader";
import WorktopsProductMenu from "../Others/wtmenubar";
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