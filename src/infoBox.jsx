import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import "./SearchBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INI_URL =
    "https://media.istockphoto.com/id/140469297/photo/sandstorm-driving.jpg?s=612x612&w=is&k=20&c=Rv7w7KUlNlts7CyI_QRg_jpcS4hSD7aweOJNT_xDSK8=";
  const HOT_URL =
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg=";
  const COLD_URL =
    "https://media.istockphoto.com/id/494811470/photo/winter-background-snowy-landscape-with-warning-sign.jpg?s=612x612&w=0&k=20&c=xIU8FYQXOjiSY7XLgShgI9Tlf1KJvY9LfTalFj2n1xg=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=is&k=20&c=GMlTyTFSxiKCiWyDI-NjFFN0RX6Z5yzRbdR3ThuJEyA=";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="p">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p> Temperature : {info.temp} &deg;C</p>
              <p> Humidity : {info.humidity}</p>
              <p> Min Temp : {info.minTemp}&deg;C</p>
              <p> Max Temp : {info.maxTemp}&deg;C</p>
              <p>
                The weather can be describe as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
