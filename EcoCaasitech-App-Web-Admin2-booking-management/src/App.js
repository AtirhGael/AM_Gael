import React, { useState } from 'react'
import './components/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgentManagementPage from './pages/agent-management/AgentManagementPage';
import FindAssignAgent from './pages/agent-management/FindAssignAgent';
import AgentListing from './pages/agent-management/AgentListing';
import CohortListing from './pages/agent-management/CohortListing';
import ActiveAgents from './pages/agent-management/ActiveAgents';
import AgentDemographics from './pages/agent-management/AgentDemographics';
import AgentTraining from './pages/agent-management/AgentTraining';
import AgentAllRanking from './pages/agent-management/AgentAllRanking';
import AgentProfile from './pages/agent-management/AgentProfile';
import Layout from './pages/Layout';
import BookingManagement from './pages/booking-management/BookingManagement'
import IncomingRequestListing from './pages/booking-management/IncomingRequestListing';
import Bid from './pages/booking-management/Bid'
import BiddingDashboard from './pages/booking-management/BiddingDashboard';
import BookingDetails from './pages/booking-management/BookingDetails';
import OwnerManagement from './pages/owner-management';
import SubscriptionRanking from './pages/owner-management/subScreens/SubscriptionRanking'
import EcopointRanking from './pages/owner-management/subScreens/EcopointRankings';
import BookingRanking from './pages/owner-management/subScreens/BookingRanking';
import OwnerProfile from './pages/owner-management/subScreens/OwnerProfiles';
import OwnerListings from './pages/owner-management/subScreens/OwnerListings';
import OwnerProf from './pages/owner-management/subScreens/OwnerPofile';
import IndexRequest from './pages/owner-management/subScreens/activeRequests';
import Request from './pages/owner-management/subScreens/Request';



const firebaseConfig = {
  apiKey: "AIzaSyDpICJahCqXOWLK23HqWsvYC6lxb51cHMc",
  authDomain: "ecocaasitech-1d9ef.firebaseapp.com",
  projectId: "ecocaasitech-1d9ef",
  storageBucket: "ecocaasitech-1d9ef.appspot.com",
  messagingSenderId: "134658060108",
  appId: "1:134658060108:web:3c3f43e8e88e062fb129e9"
};
const app = initializeApp(firebaseConfig);

const App = () => {  
  const[page, setPage] = useState('dashboard')
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout page={page} setPage={setPage}/>}>
          <Route index element={<AgentManagementPage setPage={setPage}/>}/> {/* main Dashboard goes here*/}
          <Route path='/agent-management/overview' element={<AgentManagementPage setPage={setPage}/>}/>
          <Route path='/agent-management/find-assign-agent' element={<FindAssignAgent setPage={setPage}/>}/>
          <Route path='/agent-management/agent-listing' element={<AgentListing setPage={setPage}/>}/>
          <Route path='/agent-management/cohort-listing' element={<CohortListing setPage={setPage}/>}/>
          <Route path='/agent-management/active-agents' element={<ActiveAgents/>}/>
          <Route path='/agent-management/agent-demographics' element={<AgentDemographics/>}/>
          <Route path='/agent-management/agent-training' element={<AgentTraining/>}/>
          <Route path='/agent-management/agent-ranking' element={<AgentAllRanking/>}/>
          <Route path='/agent-management/agent-profile' element={<AgentProfile/>}/>
          <Route path='/booking-management/book-now-later' element={<BookingManagement setPage={setPage}/>}/>
          <Route path='/booking-management/incoming-request-listing' element={<IncomingRequestListing setPage={setPage}/>}/>
          <Route path='/booking-management/bid' element={<Bid setPage={setPage}/>}/>
          <Route path='/booking-management/bidding-dashboard' element={<BiddingDashboard/>}/>
          <Route path='/booking-management/booking-details' element={<BookingDetails/>}/>
          <Route path='/owner-management' element={<OwnerManagement/>}/>
          <Route path='/owner-management/sub-ranking' element={<SubscriptionRanking/>}/>
          <Route path='/owner-management/ecopoint-ranking' element={<EcopointRanking/>}/>
          <Route path='/owner-management/booking-ranking' element={<BookingRanking/>}/>
          <Route path='/owner-management/owner-profile' element={<OwnerProf/>}/>
          <Route path='/owner-management/Active-request' element={<IndexRequest/>}/>
          <Route path='owner-listing' element={<OwnerListings />}/>
          <Route path='owner-profile' element={<OwnerProfile/>}/>
          <Route path='active-request' element={<Request/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App