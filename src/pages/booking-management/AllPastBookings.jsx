import React, {useState} from 'react'
import FilterSearch from '../../components/FilterSearch'
import BreadCrumb from '../../components/BreadCrumb'
import { Grid } from '@mui/material'
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import TablePagination from '../../components/TablePagination'
import trashimage from '../../assets/images/Rectangle 378.svg'
import TrashDetailsModal from '../../components/TrashDetailsModal'
import TableNameTextGrid from '../../components/TableNameTextGrid'



const AllPastBookings = () => {
    const page = 'all-past-bookings'
    const section = 'booking-management'
    const[isBookNowTabVisible, setIsBookNowTabVisible] = useState(true)
    const[isTrashDetailsModalVisible, setIsTrashDetailsModalVisible] = useState(false)

  return (
    <div className='all-past-bookings-div'>
        <BreadCrumb pageData={'Booking Details'} sectionData={'Booking Management'}/>

        <p className='page-name-bold-text'>All Past Bookings</p>

        <Grid container spacing={1} style={{marginBottom: '40px'}} className='all-past-bookings-cards-div'>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <BlueButtonGainLossCard 
                    name={'Total Request'}
                    number={'60'}
                    status={'gain'}
                    percent={'10'}
                    page={page}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <BlueButtonGainLossCard 
                    name={'Book Now Request'}
                    number={'60'}
                    status={'loss'}
                    percent={'10'}
                    page={page}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <BlueButtonGainLossCard 
                    name={'Book Later Request'}
                    number={'60'}
                    status={'gain'}
                    percent={'10'}
                    page={page}
                />
            </Grid>
        </Grid>

        <div className='listing-button-tab-div'>
            <button className={isBookNowTabVisible ? 'active' : null} onClick={() => setIsBookNowTabVisible(true)}>Book Now</button>
            <button className={!isBookNowTabVisible ? 'active' : null} onClick={() => setIsBookNowTabVisible(false)}>Book Later</button>
        </div>

        <div className='filtersearch-grid-div listing-body-upper-div'>
            <FilterSearch/>
            <button className='all-past-booking-see-all-button see-all-button'>See all</button>
        </div>

        <div className='table-outer-div'>
            <div className='table-inner-div'>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ borderRadius: '10px 0px 0px 10px' }}>Name/Date</TableCell>
                      <TableCell>Trash Type</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Trash Image</TableCell>
                      <TableCell>Book Type</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell style={{ borderRadius: '0px 10px 10px 0px' }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                        <TableCell>
                            <TableNameTextGrid/>
                        </TableCell>
                        <TableCell>Buckets 2</TableCell>
                        <TableCell>
                            300XAF
                        </TableCell>
                        <TableCell><img src={trashimage} alt='Trash' className='trash-pickup-table-trash-image' /></TableCell>
                        <TableCell className='table-booking-type now-booking-type'>Now</TableCell>
                        <TableCell>Montee' Jouvence</TableCell>
                        <TableCell>
                            <button className='view-button' onClick={() => setIsTrashDetailsModalVisible(true)}>View</button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TableNameTextGrid/>
                        </TableCell>
                        <TableCell>Buckets 2</TableCell>
                        <TableCell>
                            300XAF
                        </TableCell>
                        <TableCell><img src={trashimage} alt='Trash' className='trash-pickup-table-trash-image' /></TableCell>
                        <TableCell className='table-booking-type now-booking-type'>Now</TableCell>
                        <TableCell>Montee' Jouvence</TableCell>
                        <TableCell>
                            <button className='view-button' onClick={() => setIsTrashDetailsModalVisible(true)}>View</button>
                        </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            </div>
            <TablePagination/>
        </div>

        <TrashDetailsModal 
            isTrashDetailsModalVisible={isTrashDetailsModalVisible} 
            setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
            ecopointBadgeVisible={true}
            page={page}
        />
    </div>
  )
}

export default AllPastBookings