import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Deregister any service workers left over from a previous PWA build
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((r) => r.unregister())
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)