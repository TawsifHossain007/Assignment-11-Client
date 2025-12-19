import React from 'react';
import useAxiosSecure from '../../../hooks/useAuth/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminDashboardHome = () => {

    const axiosSecure = useAxiosSecure()
    const {data : issues = []} = useQuery({
        queryKey: ['issue'],
        queryFn: async() => {
            const res = await axiosSecure.get('/issues')
            return res.data
        }
    })

    const {data : users=[] } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const latestUsers = [...users]
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 3);

    const ResolvedIssues = issues.filter(issue => issue.IssueStatus === 'Resolved')
    const PendingIssues = issues.filter(issue => issue.IssueStatus === 'Pending')
    const RejectedIssues = issues.filter(issue => issue.IssueStatus === 'Rejected')
    const latestIssues = [...issues].sort((a,b)=> new Date(b.date) - new Date(a.date)).slice(0,3)
    
    return (
        <div>
            <div>
                <h1>Total Issues: {issues.length}</h1>
                <h1>Resolved Issues: {ResolvedIssues.length}</h1>
                <h1>Pending Issues: {PendingIssues.length}</h1>
                <h1>Rejected Issues: {RejectedIssues.length}</h1>
                <h1>Latest Users: {latestUsers.length}</h1>
                <h1>Latest Issues: {latestIssues.length}</h1>
                
            </div>
        </div>
    );
};

export default AdminDashboardHome;