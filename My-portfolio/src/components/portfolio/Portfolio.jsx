import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Website1 from '../../assets/website1.png'
import { Button, CardActionArea, CardActions } from '@mui/material';

const Portfolio = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card  sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          image={Website1}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography  >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className='btn' href='https://react-project-1ec2b.web.app/' size="small" >
          Demo
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Portfolio
