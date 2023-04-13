import React from "react";
import { Icon } from '@iconify/react';
function ProposalListContent() {
    return (
        <>
            <div className="proposal-content">
                <div className="row">
                    <div className="col-12">
                        <div className="bud-viw-prj d-flex justify-content-between">
                            <div>Budget : £ 3000 </div>
                            <div>View Project</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mb-3"><button className="loc-drp">Location <Icon icon="gridicons:dropdown" />
                    </button><button className="rating-drp">Rating <Icon icon="gridicons:dropdown" /></button></div>
                    <div className="col-6 mb-3"><p className="page-prop-list">1-10 Of 25 <Icon icon="material-symbols:chevron-left-rounded" /> <Icon icon="material-symbols:chevron-right-rounded" /></p></div>
                </div>
            </div>
        </>
    )
}
export default ProposalListContent