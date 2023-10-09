import {React,useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Avatar ,Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import {logout,selectUser} from "../features/userSlice";
import {auth} from "../firebase";
import { signOut } from "firebase/auth";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css"
import './Navbar.css';
import axios from'axios'


function Navbar ()  {
  const[isModalOpen,setIsModalOpen] =useState(false);
  const[inputUrl,setInputUrl] =useState("");
  const[question,setQuestion]=useState("");
  const Close =<CloseIcon/>;
  const user=useSelector(selectUser);
  const dispatch =useDispatch();

  

  const handleSubmit =async() => {
    
    if (question !== ""){
      const config ={
        headers:{
          "Content-Type":"application/json",
        },
      }
    const body={
      questionName :question,
      questionUrl:inputUrl,
      user:user,
    };
       await axios.post('/api/questions',body,config).then((res)=>{
        console.log(res.data);
        alert(res.data.message);
        window.location.href ="/";
       }).catch((e)=>{
        console.log(e)
        alert('Error in adding Question ')
       });
    }
  }
  
  const handleLogout=()=>{
    if(window.confirm('Are you sure to logout ?')){
      signOut(auth)
      .then(()=>{
        dispatch(logout())
        console.log("Logged out");
      })
      .catch((e)=>{
        console.log(e);
        alert("Error in adding question");
      });
    }
    
  };

  return (
    <div className='qHeader'>
       <div className="qHeader-content">
        <div className='qHeader_logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/768px-Quora_logo_2015.svg.png?20170609154433" alt="logo"/>
        </div>
        <div className='qHeader_icons'>
           <div className='qHeader_icon'>
             <HomeIcon/>
           </div>
           <div className='qHeader_icon'>
             <FeaturedPlayListOutlinedIcon/>
           </div>
           <div className='qHeader_icon'>
              <NoteAltOutlinedIcon/>
           </div>
           <div className='qHeader_icon'>
              <GroupsOutlinedIcon/>
           </div>
           <div className='qHeader_icon'>
               <NotificationsNoneOutlinedIcon/>
           </div>
        </div>
        <div className='qHeader_input'>
             <SearchOutlinedIcon/>
             <input type="text"  placeholder="Search Quora" />
        </div>
        <div className='qHeader_Rem'>
            <div className='qHeader_avatar'>
               <Avatar onClick={handleLogout} src={user.photo}/>
            </div>
            <LanguageOutlinedIcon/>
            <Button onClick = {() =>setIsModalOpen(true)}>Add Question</Button> 
            <Modal open={isModalOpen} 
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
              <div className="modal_title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal_info">
              <Avatar src={user?.photo} className="avatar" />
              <div className="modal_scope">
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMoreIcon />
              </div>
            </div>
              <div className='modal_field'>
                <input value={question} onChange={(e) =>setQuestion(e.target.value)}  type="text" placeholder="write your question here"/>
              <div styles={{
                display:"flex",
                flexDirection:"column"
              }}>
                <input type='text'
                value={inputUrl}
                onChange ={(e)=>setInputUrl(e.target.value)}
                  style={{
                    width:"49vw",
                  margin:"5px 0",
                  border:"1px solid lightgrey",
                  padding:"10px",
                  outline:"2px solid black"
                }} 
                placeholder='Optional:include a link that gives context'/>
              { inputUrl !=="" &&
                <img style={
                  {
                    height:"40vh",
                    objectFit:"contain"
                  }} 
                src ={inputUrl} alt='displayimage '/>}
              </div>
            </div>
            <div className='modal_buttons'>
              <button className='cancel' onDoubleClick={() =>setIsModalOpen(false)}>Cancel</button>
              
              <button onClick={handleSubmit} type='submit' className='add'>Add Question</button>
            </div>
            </Modal>
        </div>
      </div>
    </div>
  )
}

export default Navbar