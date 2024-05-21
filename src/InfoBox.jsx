import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import "./InfoBox.css"

export default function InfoBox({ info }) {

    let img ="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600"
    let hot="https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg";
    let cold="https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=600";
    let rain="https://th.bing.com/th/id/OIP.AVJXCd_GAKMrrk39l5OxTgHaEo?rs=1&pid=ImgDetMain";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?rain:info.temp>20?hot:cold}
                        title="green iguana"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5"  component="div">
                            {info.city} {info.humidity>80?<BeachAccessIcon/>:info.temp>20?<WbSunnyIcon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}%</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>The Weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
            <br /><br />
        </div>
    )
}
