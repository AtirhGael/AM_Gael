import * as actions from './actionTypes';

export default function reducer (state = {currentUser: {}, allAutomaticRequests : [], allUnassignedRequests: [], allBookingMgtMetrics: []}, action) {
    switch(action.type) {
        case actions.ALL_AUTOMATIC_REQUESTS:
            return {
                ...state,
                allAutomaticRequests : action.payload.allAutomaticRequests,
            }
        case actions.ALL_UNASSIGNED_REQUESTS:
            return {
                ...state,
                allUnassignedRequests : action.payload.allUnassignedRequests,
            }
        case actions.ALL_BOOKING_MGT_METRICS:
            return {
                ...state,
                allBookingMgtMetrics : action.payload.allBookingMgtMetrics,
            }
        default:
            return state
    } 
}