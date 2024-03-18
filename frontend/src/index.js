import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import StudentsScreen from './screens/StudentsScreen';
import FacultyScreen from './screens/FacultyScreen';
import NewsScreen from './screens/NewsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import PositionsScreen from './screens/PositionsScreen';
import EventsScreen from './screens/EventsScreen';
import AlumnisScreen from './screens/AlumnisScreen';

// implementing react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/projects' element={<ProjectsScreen/>}/>
      <Route path='/people/students' element={<StudentsScreen/>}/>
      <Route path='/people/alumni' element={<AlumnisScreen />}/>
      <Route path='/people/faculty' element={<FacultyScreen/>}/>
      <Route path='/news' element={<NewsScreen/>}/>
      <Route path='/positions' element={<PositionsScreen/>} />
      <Route path='/events' element={<EventsScreen/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
