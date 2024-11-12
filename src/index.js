import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//import Library from './sample_js/Library';
//import ConfirmDialog  from './sample_js/ConfirmDialog';
//import Timer from './sampleElement/Timer' ;
//import PostList from './sampleElement/PostList' ;
//import NotificationList from './sample_state/NotificationList';
//import Counter from './sample_state/Counter' ;
//import Accomodated from './sample_hook/Accomodated';
//import Capacity from './sample_hook/Capacity';
//import ButtonEvent from './sample_event/ButtonEvent';
//import UserHome from './sample_condition/UserHome' ;
//import LandingPage from './sample_condition/LandingPage';
//import NumberList from './sample_array/NumberList';

//import ModelForm from './sample_form/ModelForm';
//import TodoForm from './sample_form/TodoForm';
//import TodoList  from './sample_form/TodoList';
//import TodoListPanel from './sample_form/TodoListPanel';
//import Calculator from './shared/Calculator';
import Header from './layout/Header';
import Footer from './layout/Footer';
import DarkOrLight from './sample_context/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>               
    <Header/> 
    <DarkOrLight   />
    <Footer/>
  </React.StrictMode>
) ;
// StrictMode 는 한 번만 실행해달라는 거

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
