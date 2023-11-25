import store from './store';
import { allUnassignedRequests, allBookingMgtMetrics, allAutomaticRequests } from './actions';
import axiosServices from '../services/axiosServices';

store.subscribe(() => {
    console.log(store.getState())
})
export async function loadAllUnassignedRequests() {
    const unassignedRequestsData = await axiosServices.fetchUnassignedRequests();
    store.dispatch(allUnassignedRequests(unassignedRequestsData))
}
export async function loadAllBookingMgtMetrics() {
    const bookingMgtData = await axiosServices.fetchBookingMgtMetrics();
    store.dispatch(allBookingMgtMetrics(bookingMgtData))
}
export async function loadAllAutomaticRequests() {
    const automaticRequestsData = await axiosServices.fetchAutomaticRequests();
    store.dispatch(allAutomaticRequests(automaticRequestsData))
}