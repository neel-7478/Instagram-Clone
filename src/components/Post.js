import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Avatar from '@mui/material/Avatar'
import rita from "../images/ritabhari.jpg"
import like from "../images/like_logo.png"
import comment from "../images/comment_logo.png"
import send from "../images/send.png"

// import save from "../images/save_logo.png"
import "./post.css"
const Post = () => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
      const url = "http://localhost:5000/"
      const config = {
        headers: {
          "Content-Type": "image/jpeg",
        }
      }
      axios.get(url, config).then((response) => {
        setDocs(response.data);
      });
  
    }, [])
    return (
        <>
            <div className="post_container">
                <div className="post_header">
                    <Avatar
                        alt="Remy Sharp"
                        src={rita}
                        sx={{ width: 56, height: 56 }}
                    />
                    <h3 className='post_header_txt'>Ritabhari</h3>
                </div>
                {/* <img className='content' src={imageUrl} alt="" /> */}
                {
                    docs.map((item)=>{
                        return(
                            <img src={`http://localhost:5000/file/${item.filename}`} alt="pics" className='content' key={item._id}/>
                        )
                    })
                }
                <img className='like_logo' src={like} alt="" />
                <img className='comment_logo' src={comment} alt="" />
                <img className='send_logo' src={send} alt="" />
                {/* <img className='save_logo' src={save} alt="" /> */}
            </div>
        </>
    )
}

export default Post
