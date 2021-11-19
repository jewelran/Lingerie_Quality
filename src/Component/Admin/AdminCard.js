import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function AdminCard(props) {
    const {name, id,designation} = props.admin
    console.log(name , id);
    return (
      
        <div style={{boxShadow:"5px 5px 20px grey"}} className=" mb-5 w-25 rounded">
            <div className=" d-flex justify-content-around">
                <div className="d-flex col-md-4  justify-content-center align-items-center">
                    <img style={{width: "80px" , height:"80px"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="img" />
                </div>
                <div className=" col-md-8 text-dark fw-1 ">
                    <h5>name:{name}</h5>
                    <p>{designation}</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default AdminCard
