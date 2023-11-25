import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import FilterSearch from '../../components/FilterSearch'
import './styles.css'
import { Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@mui/material';
import GreenCheckbox from '../../components/GreenCheckbox';
import TablePagination from '../../components/TablePagination';
import ImageNameDateId from '../../components/ImageNameDateId';
import placeholderuserimage from '../../assets/images/placeholder.svg'
import greenarrowforward from '../../assets/icons/green-arrow_forward.svg'
import ButtonDropdown from '../../components/ButtonDropdown'


const BiddingDashboard = () => {
    const page = 'bidding-dashboard'
    const section = 'booking-management'
  return (
    <div className='bidding-dashboard-div'>
        <BreadCrumb pageData={'Bidding Dashboard'} sectionData={'Booking Management'}/>

        <p className='page-name-bold-text'>Past Bidding</p>

        <FilterSearch/>

        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <div className='table-outer-div'>
                    <div className='table-inner-div'>
                        <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell style={{ borderRadius: '10px 0px 0px 10px' }}></TableCell>
                            <TableCell>#</TableCell>
                            <TableCell>Name/Date</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Trash Quantity</TableCell>
                            <TableCell>Status</TableCell>    
                            <TableCell style={{ borderRadius: '0px 10px 10px 0px' }}>Bid Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <GreenCheckbox/>
                                </TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>
                                    <ImageNameDateId/>
                                </TableCell>
                                <TableCell>Jouvence</TableCell>
                                <TableCell>2 buckets</TableCell>
                                <TableCell>
                                    <span className='bidding-dashboard-table-status approved-table-status'>Approved</span>
                                </TableCell>
                                <TableCell>500 XAf</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <GreenCheckbox/>
                                </TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>
                                    <ImageNameDateId/>
                                </TableCell>
                                <TableCell>Jouvence</TableCell>
                                <TableCell>2 buckets</TableCell>
                                <TableCell>
                                    <span className='bidding-dashboard-table-status pending-table-status'>Pending</span>
                                </TableCell>
                                <TableCell>500 XAf</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <GreenCheckbox/>
                                </TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>
                                    <ImageNameDateId/>
                                </TableCell>
                                <TableCell>Jouvence</TableCell>
                                <TableCell>2 buckets</TableCell>
                                <TableCell>
                                    <span className='bidding-dashboard-table-status cancelled-table-status'>Pending</span>
                                </TableCell>
                                <TableCell>500 XAf</TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </div>
                    <TablePagination/>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <div className='bidding-dashboard-side-div'>
                    <div className='bidding-dashboard-bid-upper-grid-div'>
                        <p>Incoming Bidding</p>
                        <ButtonDropdown page={`${page}/incoming-bidding`}/>
                    </div>
                    <div className='incoming-bidding-each-agent-div'>
                        <p>1</p>
                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                        <p className='incoming-bidding-each-agent-info-paragraph'><span>Nayah</span> placed 500frs on your bid</p>
                        <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
                    </div>
                    <div className='incoming-bidding-each-agent-div'>
                        <p>2</p>
                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                        <p className='incoming-bidding-each-agent-info-paragraph'><span>Nayah</span> placed 500frs on your bid</p>
                        <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
                    </div>
                    <div className='incoming-bidding-each-agent-div'>
                        <p>3</p>
                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                        <p className='incoming-bidding-each-agent-info-paragraph'><span>Nayah</span> placed 500frs on your bid</p>
                        <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
                    </div>
                </div>

                <div className='bidding-dashboard-side-div owners-bid-side-div'>
                    <div className='bidding-dashboard-bid-upper-grid-div'>
                        <p>Owners bid</p>
                        <ButtonDropdown page={`${page}/owners-bid`}/>
                    </div>
                    <div className='bidding-dashboard-bid-lower-grid-div'>
                        <div className='bidding-dashboard-bid-lower-inner-grid-div'>
                            <p className='bidding-dashboard-bid-index-number-paragraph'>1</p>
                            <ImageNameDateId/>
                        </div>
                        <p className='bidding-dashboard-bid-amount-parapgraph'>500 XAF</p>
                    </div>
                    <div className='bidding-dashboard-bid-lower-grid-div'>
                        <div className='bidding-dashboard-bid-lower-inner-grid-div'>
                            <p className='bidding-dashboard-bid-index-number-paragraph'>2</p>
                            <ImageNameDateId/>
                        </div>
                        <p className='bidding-dashboard-bid-amount-parapgraph'>500 XAF</p>
                    </div>
                    <div className='bidding-dashboard-bid-lower-grid-div'>
                        <div className='bidding-dashboard-bid-lower-inner-grid-div'>
                            <p className='bidding-dashboard-bid-index-number-paragraph'>3</p>
                            <ImageNameDateId/>
                        </div>
                        <p className='bidding-dashboard-bid-amount-parapgraph'>500 XAF</p>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default BiddingDashboard