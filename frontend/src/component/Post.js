import {React,useState} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ReactTimeAgo from "react-time-ago";
//import ReactHtmlParser from 'react-html-parser';
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from "../features/userSlice.js";

function LastSeen({ date }) {
  return (
    <div>
       <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  )
}
function Post({post}) {
  const[isModalOpen,setIsModalOpen] =useState(false);
  const[answer,setAnswer]=useState("")
  const Close =<CloseIcon/>;
  const user=useSelector(selectUser);

  const handleQuill =(value) =>{
    setAnswer(value);
  }
  //console.log(answer);
  
  const handleSubmit =async() =>{
    console.log("Submit button clicked");
    if(post?._id && answer !==""){
      const config={
        headers:{
          "Content-Type":"application/json"
        }
      } 
      const body={
        answer:answer,
        questionId:post?._id,
        user:user
      }
    
     await axios.post('/api/answers',body,config).then((res) =>{
      console.log(res.data);
      alert('Answer added succcesfully');
      window.location.href ='/';
     }).catch((e)=>{
      console.log(e);
     })
    }
  }
  

  return (
    <div className='post'>
       <div className='post_info'>
        <Avatar src={post?.user?.photo}/>
        <h5>{post?.user?.Username}</h5>
        <small> <LastSeen date={post?.createdAt} /></small>
       </div>
       <div className='post_body'>
           <div className='post_question'>
             <p>{post?.questionName}</p>
             <button onClick={() =>{
              setIsModalOpen(true);
              console.log(post?._id);
             } } className='post_btnAnswer'>Answer</button>
             <Modal
             open={isModalOpen} 
             CloseIcon={Close} 
             onClose={()=>setIsModalOpen(false)}
             closeOnEsc 
             center 
             closeOnOverlayClick={false}
             styles={{
              overlay:{
                height:"auto",
              },
             }}>
              <div className="modal_question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">{post?.user?.userName}</span> on{" "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal_answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal_button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
      </div>
      <div className="post_footer">
        <div className="post_footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>
        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post_footerLeft">
          <ShareOutlinedIcon />
          <MoreHorizOutlinedIcon/>
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post?.allAnswers.length} Answer(s)
      </p>

      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post_answer"
      >
        {post?.allAnswers?.map((_a) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray",
              }}
              className="post-answer-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
                className="post-answered"
              >
                <Avatar src={_a?.user?.photo} />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                  <p>{_a?.user?.userName}</p>
                  <span>
                    <LastSeen date={_a?.createdAt} />
                  </span>
                </div>
              </div>
              <div className="post-answer">{_a?.answer}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Post;