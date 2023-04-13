import React from 'react'
import Header from '../Header/Header'
import Menubar from '../Menubar/Menubar'
import Footer from '../Footer/Footer'
import ProposalPost from '../Post/ProposalPost'
import ProposalListContent from '../Others/ProposalListContent'
function ProposalList() {
    return (
        <div className='row'>
            <div className='col-12 prj-det-header'>
                <Header />
            </div>
            <div className='col-12'>
                <Menubar />
            </div>
            <div className='col-12'>
                <ProposalPost />
            </div>
            <div className='col-12'>
                <ProposalListContent />
            </div>
            <div className='col-12'>
            <Footer />
            </div>
            
        </div>
    )
}
export default ProposalList