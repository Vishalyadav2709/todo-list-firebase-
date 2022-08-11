import {  Button } from '@mui/material'
import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Todo Let's Assign Task To Ourself</h1>
      <div className="card1">
 
 
<img src={'https://image.cnbcfm.com/api/v1/image/106574283-1591894891653coursera-notext.png?v=1591906737&w=929&h=523'} alt={"Book"} />
     
     
      <Button sx={{ mt: "auto", color:"black" }}>
        Always Learn
      </Button>
      
    </div>
    <div className="card2">
 
 
<img src={'https://image.cnbcfm.com/api/v1/image/106885417-1621444601674-UDACITY-NOTEXT.png?v=1621444661&w=720&h=405'} alt={"Book"} />
     
     
      <Button sx={{ mt: "auto", color:"black"  }}>
     Management
      </Button>

     
      
    </div>
    <div className="card3">
 
 
<img src={'https://cdn.theatlantic.com/thumbor/tr8Fs4-_ja0FEirk5Df00uw4K5o=/0x38:2000x1163/1600x900/media/img/mt/2018/01/theatlantic_02_lead/original.png'} alt={"Book"} />
     
     
      <Button sx={{ mt: "auto", color:"black"  }}>
      Hardwork
      </Button>
      
    </div>
    <Link to='/signin' style={{padding:'10px' , fontSize:'20px' ,
    display:'flex',
    justifyContent:'center',
    marginTop:'50px',
    border:'bold',
    boxShadow:'0px 0px 10px 5px'
  
  }}>Sign in To Add Todo's</Link>
    </div>
  )
}

export default Home