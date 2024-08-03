// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <div>
//             <nav className="navbar">
//                 <div className="navbar-icons">
//                     <div className="icon user-icon" onClick={toggleSidebar}>
//                         <i className="fas fa-user"></i>
//                     </div>
//                     <div className="icon notification-icon">
//                         <i className="fas fa-bell"></i>
//                     </div>
//                 </div>
//             </nav>
//             <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//                 <button className="close-btn" onClick={toggleSidebar}>&times;</button>
//                 <div className="user-info">
//                     <div className="profile-icon">
//                         <i className="fas fa-user"></i>
//                     </div>
//                     <h2>Akshaya Suresh</h2>
//                     <p>You are logged in as:</p>
//                 </div>
//                 <button className="sidebar-btn">Logout</button>
//                 <button className="sidebar-btn">Update Registration details</button>
//                 <div className="logo-container">
//                     <img src="https://res.cloudinary.com/dx9i4cezk/image/upload/v1706765912/agh-logo1_cuz9ns.png" alt="Company Logo" className="company-logo" />
//                 </div>
//                 <footer className="sidebar-footer">
//                     <p>Altitude Guru Hem 2024. All rights reserved.</p>
//                 </footer>
//             </div>
//         </div>
//     );
// };

// export default App;
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-icons">
                    <div className="icon user-icon" onClick={toggleSidebar}>
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="icon notification-icon">
                        <i className="fas fa-bell"></i>
                    </div>
                </div>
            </nav>
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                <div className="user-info">
                    <div className="profile-icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <h2>Akshaya Suresh</h2>
                    <p>You are logged in as:</p>
                </div>
                <button className="sidebar-btn">Logout</button>
                <button className="sidebar-btn">Update Registration details</button>
                <div className="logo-container">
                    <img src="https://res.cloudinary.com/dx9i4cezk/image/upload/v1706765912/agh-logo1_cuz9ns.png" alt="Company Logo" className="company-logo" />
                </div>
                <footer className="sidebar-footer">
                    <p>Altitude Guru Hem 2024. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;