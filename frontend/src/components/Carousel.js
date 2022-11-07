import Carousel from "react-material-ui-carousel";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from "@mui/material/IconButton";

export default function MainCarousel() {
    const imageStyle = {
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }

    const images = [
        <img src="https://picsum.photos/500/500?random=1" alt="" style={imageStyle}/>,
        <img src="https://picsum.photos/500/500?random=2" alt="" style={imageStyle}/>,
        <img src="https://picsum.photos/500/500?random=3" alt="" style={imageStyle}/>,
        <img src="https://picsum.photos/500/500?random=4" alt="" style={imageStyle}/>,
        <img src="https://picsum.photos/500/500?random=5" alt="" style={imageStyle}/>
    ]

    return (
        <Carousel
        indicatorContainerProps={
            {
                style:{
                    backgroundColor: 'lightgray',
                }
            }
        }
        sx={{padding:'12px'}}
        fullHeightHover={true}
        navButtonsProps={{
            radius: '100%',
        }}
        NextIcon={<IconButton color="primary" component="label"><ArrowForwardIosIcon/></IconButton>}
        PrevIcon={<IconButton color="primary" component="label"><ArrowBackIosIcon/></IconButton>}
        >
        {images}
    </Carousel>
    );
}