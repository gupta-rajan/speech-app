import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux';
import store from './store';
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
import ResearchScreen from './screens/ResearchScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import GalleryScreen from './screens/GalleryScreen';
import FileUpload from './screens/FileUpload';
import DemoScreen from './screens/DemoScreen';
import MachineTranslation from './screens/MachineTranslation';

import AdminRoute from './components/AdminRoute';
import EventListScreen from './screens/admin/EventListScreen';
import FacultyListScreen from './screens/admin/FacultyListScreen';
import StudentListScreen from './screens/admin/StudentListScreen';
import ResearchListScreen from './screens/admin/ResearchListScreen';
import ProjectListScreen from './screens/admin/ProjectListScreen';
import PositionListScreen from './screens/admin/PositionListScreen';
import UserListScreen from './screens/admin/UserListScreen';
// import PositionListScreen from './screens/admin/PositionListScreen';
import FacultyEditScreen from './screens/admin/FacultyEditScreen';
import StudentEditScreen from './screens/admin/StudentEditScreen';
import ResearchEditScreen from './screens/admin/ResearchEditScreen';
import EventEditScreen from './screens/admin/EventEditScreen';
import ProjectEditScreen from './screens/admin/ProjectEditScreen';
import PositionEditScreen from './screens/admin/PositionEditScreen';
import UserEditScreen from './screens/admin/UserEditScreen';

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
      <Route path='/research/:id' element={<ResearchScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/gallery' element={<GalleryScreen/>}/>
      <Route path='/demo' element={<DemoScreen/>}/>
      <Route path='/demo/fsd' element={<FileUpload />}/>
      <Route path='/demo/mt' element={<MachineTranslation/>}/>

      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/eventList' element={<EventListScreen/>}/>
        <Route path='/admin/facultyList' element={<FacultyListScreen/>}/>
        <Route path='/admin/studentList' element={<StudentListScreen/>}/>
        <Route path='/admin/researchList' element={<ResearchListScreen/>}/>
        <Route path='/admin/projectList' element={<ProjectListScreen/>}/>
        <Route path='/admin/positionList' element={<PositionListScreen/>}/>
        <Route path='/admin/userList' element={<UserListScreen/>}/>

        <Route path='/admin/faculty/:id/edit' element={<FacultyEditScreen/>}/>
        <Route path='/admin/student/:id/edit' element={<StudentEditScreen/>}/>
        <Route path='/admin/research/:id/edit' element={<ResearchEditScreen/>}/>
        <Route path='/admin/event/:id/edit' element={<EventEditScreen/>}/>
        <Route path='/admin/project/:id/edit' element={<ProjectEditScreen/>}/>
        <Route path='/admin/position/:id/edit' element={<PositionEditScreen/>}/>
        <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}/>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();