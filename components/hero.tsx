import { Button, Container, Grid, Toolbar, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselItemProps {
    backgroundImageUri: string;
    children: React.ReactElement[];
}

function CarouselItem(props: CarouselItemProps) {
    const theme = useTheme();
    return (
        <Box
            minHeight="75vh"
            p={2}
            px={{ xs: 5, md: 20 }}
            sx={{
                backgroundImage: `url(${props.backgroundImageUri})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
                display: "flex",
                justifyContent: 'space-evenly',
                flexDirection: "column",
                alignItems: "center",
                position: 'relative',
                '&::before': {
                    backgroundColor: `${theme.palette.primary.dark.replace(/([0-9]\))/, ',0.8)')}`,
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
                '& div': {
                    position: 'relative',
                }
            }}>
            {props.children}
        </Box >
    )
}

export default function Hero() {
    return (
        <React.Fragment>
            <Box>
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showStatus={false}
                    showThumbs={false}
                >
                    <CarouselItem backgroundImageUri="/1.jpg">
                        <Typography variant="h2" component="div" fontWeight={800} color="white" >
                            Welcome to Page
                        </Typography>
                        <Typography variant="h5" component="div" fontWeight={500} color="white" >
                            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                        </Typography>
                        <Button variant="contained" color="primary" >
                            Read more
                        </Button>
                    </CarouselItem>
                    <CarouselItem backgroundImageUri="/2.jpg">
                        <Typography variant="h2" component="div" fontWeight={800} color="white" >
                            Voluptate tempore
                        </Typography>
                        <Typography variant="h5" component="div" fontWeight={500} color="white" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore, provident labore voluptas assumenda atque deserunt amet accusamus maxime, vero doloribus voluptatibus! Rem iste repellat laborum accusamus tempore pariatur alias.
                        </Typography>
                        <Button variant="contained" color="primary" >
                            Read more
                        </Button>
                    </CarouselItem>
                    <CarouselItem backgroundImageUri="/3.jpg">
                        <Typography variant="h2" component="div" fontWeight={800} color="white" >
                            Fugit voluptatem
                        </Typography>
                        <Typography variant="h5" component="div" fontWeight={500} color="white" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem sapiente et quo, porro, dolorem, sequi ex illo eum nam assumenda blanditiis architecto fugiat dolorum similique. Accusantium magnam dolore aliquid!
                        </Typography>
                        <Button variant="contained" color="primary" >
                            Read more
                        </Button>
                    </CarouselItem>
                </Carousel>
            </Box>
        </React.Fragment>
    );
}