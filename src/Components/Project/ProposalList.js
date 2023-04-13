import React from 'react'
import Header from '../Header/Header'
import JobDetails from '../Job/JobDetails'
import Menubar from '../Menubar/Menubar'
import Footer from '../Footer/Footer'
import ProposalPost from '../Others/ProposalPost'
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