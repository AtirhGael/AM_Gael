import React, {useState} from 'react'
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
import OwnerManagement from './pages/Owner-management';



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
  const[page, setPage] = useState('agent-management')
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout page={page} setPage={setPage}/>}>
          <Route index element={<AgentManagementPage setPage={setPage}/>}/>
          <Route path='find-assign-agent' element={<FindAssignAgent setPage={setPage}/>}/>
          <Route path='agent-listing' element={<AgentListing setPage={setPage}/>}/>
          <Route path='cohort-listing' element={<CohortListing setPage={setPage}/>}/>
          <Route path='active-agents' element={<ActiveAgents/>}/>
          <Route path='agent-demographics' element={<AgentDemographics/>}/>
          <Route path='agent-training' element={<AgentTraining/>}/>
          <Route path='agent-ranking' element={<AgentAllRanking/>}/>
          <Route path='agent-profile' element={<AgentProfile/>}/>
          <Route path='owner-management' element={<OwnerManagement/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App