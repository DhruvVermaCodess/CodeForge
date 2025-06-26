import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
        <div>
            <Link to='/admin/dashboard'>Dashboard</Link>
            <Link to='/admin/dashboard'>Dashboard</Link>
            <Link to='/admin/dashboard'>Dashboard</Link>
            <Link to='/admin/dashboard'>Dashboard</Link>
            <Link to='/admin/dashboard'>Dashboard</Link>
            <Link to='/admin/dashboard'>Dashboard</Link>
        </div>

        <main>
            <Outlet />
        </main>
    </>

  )
}

export default AdminLayout