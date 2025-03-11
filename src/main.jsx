import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import "./style/Sidebar.css";

createRoot(document.getElementById('root')).render(
    <MainLayout />
  
)
