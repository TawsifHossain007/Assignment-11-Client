import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAuth/useAxiosSecure';

const UserManagement = () => {

    const axiosSecure = useAxiosSecure()
    const {data : users = []} = useQuery({
        queryKey: ["user-management"],
        queryFn: async() => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    return (
        <div className='min-h-screen p-8'>
            <h1 className='font-bold text-4xl'>User Management</h1>

            <div className="overflow-x-auto mt-15">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL No.</th>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=>       <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user?.displayName}</td>
        <td>{user?.role}</td>
        <td>{user?.status}</td>
        <td>
            <button className='btn btn-primary text-black'>Make Admin</button>
            <button className='btn btn-primary text-black mx-2'>Block User</button>
        </td>
      </tr>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserManagement;