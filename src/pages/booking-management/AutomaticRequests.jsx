import React, {useState} from 'react'
import './styles.css'
import BreadCrumb from '../../components/BreadCrumb'
import FilterSearch from '../../components/FilterSearch'
import GreenCheckbox from '../../components/GreenCheckbox';
import TrashDetailsModal from '../../components/TrashDetailsModal';
import TableNameTextGrid from '../../components/TableNameTextGrid';
import formatDate from '../../hooks/formatDate'
import { connect } from 'react-redux';
import TableLayout from '../../components/TableLayout';



const AutomaticRequests = ({allAutomaticRequests}) => {
    const page = 'listing/automatic-requests'
    const section = 'booking-management'
    const[isTrashDetailsModalVisible, setIsTrashDetailsModalVisible] = useState(false)

  return (
    <div className='automatic-requests-div'>
        <BreadCrumb pageData={'Listing'} sectionData={'Booking Management'}/>

        <p className='page-name-bold-text'>Automatic Request</p>

        <div className='filtersearch-grid-div listing-body-upper-div'>
            <FilterSearch/>
            <p>Total automatic request: {allAutomaticRequests.totalAutomaticRequest}</p>
        </div>

        <TableLayout
          headData={['', '#', 'Name/Date', 'Trash Type', 'Amount', 'Book Type', 'Location', 'Action']}
          bodyData={
            Object.keys(allAutomaticRequests).length > 0 ?
              allAutomaticRequests.data.map((object, index) => [
                <GreenCheckbox/>,
                (index + 1),
                <TableNameTextGrid name={object.ownerInfos.first_name} date={formatDate(object.booking_start_at)}/>,
                <>{object.trash_items.quantity} {object.trash_items.category}{(object.trash_items.quantity > 1) ? 's' : null}</>,
                <div className='table-amount-div'>{object.final_price} XF</div>,
                <div className={`table-booking-type ${(object.booking_type === "now") ? 'now-booking-type' : null}`}>{object.booking_type}</div>,
                <div className='table-location'>{object.locationInfos.address.name}</div>,
                <button className='view-button' onClick={() => setIsTrashDetailsModalVisible(true)}>View</button>
              ]) :
              []
          }
          dataObject={allAutomaticRequests}
        />

        <TrashDetailsModal 
            isTrashDetailsModalVisible={isTrashDetailsModalVisible} 
            setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
            ecopointBadgeVisible={true}
            page={page}
        />
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      allAutomaticRequests: state.allAutomaticRequests
    }
  }

export default connect(mapStateToProps)(AutomaticRequests)