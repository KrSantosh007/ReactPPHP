import React from 'react'
import Logo from '../../assets/images/jmj.png'
import { Link } from 'react-router-dom'
import  Button  from '@mui/material/Button'
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
    return (
        <>
            <div className='sidebar fixed top-0 left-0 z-[100] w-[15%]'>
                <Link to={'/'}>
                    <div className='logoWrapper py-3 px-5'>
                        <img src={Logo} className='w-100' />
                    </div>
                </Link>

                <div className='sidebarTabs'>
                    <Button className='w-100'><span className='icon mr-3 w-[30px] h-[30px] flex items-center justify-center rounded-md'><DashboardIcon/></span>Dashboard</Button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
