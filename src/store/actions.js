import * as actions from './actionTypes'

export function allAutomaticRequests(allAutomaticRequests) {
    return {
        type: actions.ALL_AUTOMATIC_REQUESTS,
        payload: {
            allAutomaticRequests: allAutomaticRequests
        }
    }
}
export function allUnassignedRequests(allUnassignedRequests) {
    return {
        type: actions.ALL_UNASSIGNED_REQUESTS,
        payload: {
            allUnassignedRequests: allUnassignedRequests
        }
    }
}
export function allBookingMgtMetrics(allBookingMgtMetrics) {
    return {
        type: actions.ALL_BOOKING_MGT_METRICS,
        payload: {
            allBookingMgtMetrics: allBookingMgtMetrics
        }
    }
}