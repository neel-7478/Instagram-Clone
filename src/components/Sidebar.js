import React from 'react'
import { Avatar } from '@mui/material'
import "./sidebar.css"

const Sidebar = ({avatarUrl,suggestedName,followerName}) => {
    return (
        <div>
            <div className="side_badge">
                <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGluJTIwc2FyZWV8ZW58MHx8MHx8&w=1000&q=80"
                    sx={{ width: 80, height: 90 }}
                />
                <h3 className='side_txt'>john_doe</h3>
                <h4 className='side_user'>John Doe</h4>
            </div>
            <div className="side_button">
                <span>Switch</span>
            </div>
            <div className="suggestions">
                <span>Suggestions For You</span>
                <span className='see'>See All</span>
            </div>
            <div className="follow">
                <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width: 45, height: 45 }}
                />
            </div>
            <span className='follow_name'>{suggestedName}</span>
            <span className='follow_button'>Follow</span>
            <span className='followed_by'>Followed by {followerName}</span>
        </div>
    )
}

export default Sidebar
