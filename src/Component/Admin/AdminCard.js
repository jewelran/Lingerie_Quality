import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
function AdminCard(props) {
    const {name, id,designation} = props.admin
    console.log(name , id);
    return (
      
        <Card sx={{ maxWidth:500 }}>
        <CardActionArea className="d-flex">
          <CardMedia
          style={{borderRadius:"10px", marginLeft:"5px"}}
            component="img"
            height="140"
            image="https://www.realmenrealstyle.com/wp-content/uploads/2021/07/5-10.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Facebook
          </Button>
          <Button size="small" color="primary">
          Whatsapp
          </Button>
          <Button size="small" color="primary">
          Linkedin
          </Button>
          <Button size="small" color="primary">
            Instagram
          </Button>
        </CardActions>
      </Card>
        
    )
}

export default AdminCard
