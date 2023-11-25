import axios from 'axios'



const baseURL = process.env.REACT_APP_BASE_URL
const token = process.env.TOKEN

const fetchBookingMgtMetrics = () => {
    return axios.get(`${baseURL}/v1/admin/2/booking_mgt/metrics`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error(error);
        throw error;
    })
}

const fetchAutomaticRequests = () => {
    return axios.get(`${baseURL}/v1/admin/2/booking_mgt/automatic_metrics`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error(error);
        throw error;
    })
    
}

const fetchUnassignedRequests = () => {
    return axios.get(`${baseURL}/v1/admin/2/booking_mgt/unassigned_requests`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error(error);
        throw error;
    })
}

const allOwners =()=>{
    return axios.get(baseURL+'/v1/admin/2/owner_mgt/owners/all',
    { headers: {
        Authorization: `Token ${token}`,
        "Content-Type":"application/json"
          },
        },
    )
}
 const UserById =(user_id)=>{
    return axios.get(baseURL+`/v1/admin/2/owner_mgt/owners/${user_id}`,
    { headers: {
        Authorization: `Token ${token}`,
        "Content-Type":"application/json"
          },
        },
    )
}
 const madeByApopularOwner =()=>{
    return axios.get(baseURL+'/v1/admin/2/owner_mgt/owners/bookings/03zCqD8OzMPOjobOAmODXUEfFGa2',
    { headers: {
        Authorization: `Token ${token}`,
        "Content-Type":"application/json"
          },
        },
    )
}
 const rankByEcopoint =()=>{
    return axios.get(baseURL+'/v1/admin/2/owner_mgt/top_ecopoints',
    { headers: {
        Authorization: `Token ${token}`,
        "Content-Type":"application/json"
          },
        },
    )
}



export default {
    fetchAutomaticRequests,
    fetchBookingMgtMetrics,
    fetchUnassignedRequests,

    allOwners,
    UserById,
    madeByApopularOwner,
    rankByEcopoint

}