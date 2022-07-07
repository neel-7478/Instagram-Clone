import React, { useState } from 'react'
import instagram from "../images/Instagram.png";
import house from "../images/house.jpg"
import explore from "../images/explore.png"
import send from "../images/send.png"
import post from "../images/post.png"
import love from "../images/love.png"
import search from "../images/search.png"
import { Avatar } from '@mui/material'
import "./header.css"
import Createpost from "./Createpost"
import "./createpost.css"

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className="container">
                <div className="app_header">
                    <img className='app_headerImage' src={instagram} alt="" />
                </div>
                <div className='header_txt'>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search' />
                </div>
                <div className='icons'>
                    <img src={house} alt="" />
                    <img src={send} alt="" />
                    <img src={post} onClick={() => { setModalOpen(true) }} alt="" />
                    {modalOpen && <Createpost closeModal={setModalOpen} />}
                    <img src={explore} alt="" />
                    <img src={love} alt="" style={{ height: "30px" }} />
                </div>
                <div className="badge">
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGluJTIwc2FyZWV8ZW58MHx8MHx8&w=1000&q=80"
                        sx={{ width: 34, height: 34 }}
                    />
                </div>
            </div>
        </>
    )
}

export default Header
