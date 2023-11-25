import React, { useState } from 'react'
import FilterSearch from '../../components/FilterSearch'
import BreadCrumb from '../../components/BreadCrumb'
import TableLayout from '../../components/TableLayout'
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown'
import ModalLayout from '../../components/ModalLayout'
import endsubscription from '../../assets/images/subscriptn-removebg-preview 1.png'
import SuccessfulModal from '../../components/SuccessfulModal'
import DeleteModal from '../../components/DeleteModal'
import { Radio, FormControlLabel, FormControl, RadioGroup } from '@mui/material';
import CalendarComponent from '../../components/CalendarComponent'
import ImageNameGrid from '../../components/ImageNameGrid'

const UserManagementListing = () => {
    const page = 'user-management-listing'
    const section = 'booking-management'
    const[isEndSubscriptionModalVisible, setIsEndSubscriptionModalVisible] = useState(false)
    const[isSubscriptionDeletedSuccessfulModalVisible, setIsSubscriptionDeletedSuccessfulModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const[isSubscriptionDaysModalVisible, setIsSubscriptionDaysModalVisible] = useState(false)

  return (
    <div>
        <BreadCrumb pageData={'User Management Listing'} sectionData={'Booking Management'}/>

        <div className='filtersearch-grid-div listing-body-upper-div'>
            <FilterSearch/>
            <div>
                <p>Standard Users: 100</p>
                <p>Premium Users: 50</p>
                <p>VIP Users: 50</p>
            </div>
        </div>

        <TableLayout
            headData={['#', 'Image/Name', 'Ecopoint Level', 'Subscription Level', 'Subscription Days Left', 'Total Subscription Days', 'Action']}
            bodyData={[
                [
                    1,
                    <ImageNameGrid name={'Nayah M'}/>,
                    'Entry',
                    <div className='table-green-text-status-div'>VIP</div>,
                    '30 days',
                    '30 days',
                    <ThreeDotsDropdown 
                        page={page} 
                        section={section}
                        setIsEndSubscriptionModalVisible={setIsEndSubscriptionModalVisible}
                        setIsDeleteModalVisible={setIsDeleteModalVisible}
                        setIsSubscriptionDaysModalVisible={setIsSubscriptionDaysModalVisible}
                    />
                ],
                [
                    2,
                    <ImageNameGrid name={'Nayah M'}/>,
                    'Entry',
                    <div className='table-green-text-status-div'>VIP</div>,
                    '30 days',
                    '30 days',
                    <ThreeDotsDropdown 
                        page={page} 
                        section={section}
                        setIsEndSubscriptionModalVisible={setIsEndSubscriptionModalVisible}
                        setIsDeleteModalVisible={setIsDeleteModalVisible}
                        setIsSubscriptionDaysModalVisible={setIsSubscriptionDaysModalVisible}
                    />
                ]
            ]}
            dataObject={{name: 'John'}}
        />

        <ModalLayout
            size={'small'}
            state={isEndSubscriptionModalVisible}
            stateFunction={setIsEndSubscriptionModalVisible}
            content={
                <>
                    <div className='action-modal-div'>
                        <img src={endsubscription} alt='End Subscription Icon' className='end-subscription-image'></img>
                        <p className='delete-agent-paragraph'>End Subscription?</p>
                        <p className='agent-will-be-deleted-paragraph'>Subscription will  end permanently</p>
                    </div>
                    <div className='modal-prompt-div'>
                            <button className='agent-confirm-delete-button modal-prompt-button' onClick={() => {setIsEndSubscriptionModalVisible(false); setIsSubscriptionDeletedSuccessfulModalVisible(true)}}>Delete</button>
                            <button className='agent-cancel-delete-button modal-prompt-button' onClick={() => setIsEndSubscriptionModalVisible(false)}>Cancel</button>
                    </div>
                </>
            }
        />

        <ModalLayout
            size={'medium'}
            state={isSubscriptionDaysModalVisible}
            stateFunction={setIsSubscriptionDaysModalVisible}
            content={
                <>
                    <p className='modal-heading-para'>Nayah's package</p>
                    <div className='subscription-days-user-info-div'>
                        <div className='subscription-days-user-info-left-div'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                >
                                    <FormControlLabel value="" control={<Radio sx={{color: 'rgba(76, 172, 62, 1)', '&.Mui-checked': {color: 'rgba(76, 172, 62, 1)',}, }}/>} label="" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='subscription-days-user-info-right-div'>
                            <p className='subscription-days-level vip'>VIP</p>
                            <p className='subscription-days-price-per-month'>3000 XAF / MONTH</p>
                        </div>
                    </div>
                    <p className='modal-heading-para subscription-days'>Subscription days</p>

                    <CalendarComponent/>
                </>
            }
        />

        <SuccessfulModal
            page={page}
            state={isSubscriptionDeletedSuccessfulModalVisible}
            stateFunction={setIsSubscriptionDeletedSuccessfulModalVisible}
        />

        <DeleteModal 
            isDeleteModalVisible={isDeleteModalVisible} 
            setIsDeleteModalVisible={setIsDeleteModalVisible}
            page={page}
        />

    </div>
  )
}

export default UserManagementListing