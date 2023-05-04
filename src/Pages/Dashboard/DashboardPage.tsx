import React from 'react'
import NavBar from '../../Components/NavBar.tsx'
import SideMenu from '../../Components/SideMenu.tsx'
import Users from '../../Components/Users.tsx';


const DashboardPage = () => {
    return(
        <div className='dashboard'>
            <NavBar>
                <SideMenu />
            </NavBar>
            <Users />
            
        </div>
    );
}

export default DashboardPage;