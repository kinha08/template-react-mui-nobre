import { Box, Card, CardContent, CardHeader, Container, Grid, SvgIconTypeMap, Typography } from "@mui/material";
import React from "react";
import { Laptop, Backpack, CalendarToday } from '@mui/icons-material';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import style from "../styles/FeaturedServices.module.css";

interface CardProps {
    title: string;
    text: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
}

function CardFeaturedServices(props: CardProps) {
    return (
        <Card elevation={0} >
            <CardContent>
                <props.icon fontSize="large" sx={{ fontSize: "4.5rem" }} color="primary" />
                <Typography variant="h5" fontWeight={700}>
                    {props.title}
                </Typography>
                <Typography variant="body2" component="div">
                    {props.text}
                </Typography>
            </CardContent>
        </Card>
    );
}


export default function FeaturedServices() {
    return (
        <React.Fragment>
            <Container maxWidth="xl" className={style.container} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <CardFeaturedServices
                            title="Blanditiis facere"
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facere expedita doloribus impedit optio alias veniam rem tenetur aperiam aliquid quasi in, pariatur explicabo mollitia exercitationem iusto rerum deleniti! Quos."
                            icon={Laptop}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <CardFeaturedServices
                            title="Blanditiis facere"
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facere expedita doloribus impedit optio alias veniam rem tenetur aperiam aliquid quasi in, pariatur explicabo mollitia exercitationem iusto rerum deleniti! Quos."
                            icon={Backpack}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <CardFeaturedServices
                            title="Blanditiis facere"
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facere expedita doloribus impedit optio alias veniam rem tenetur aperiam aliquid quasi in, pariatur explicabo mollitia exercitationem iusto rerum deleniti! Quos."
                            icon={CalendarToday}
                        />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}