import { Container, Typography, Box, Grid } from "@mui/material";
import style from '../styles/About.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <Container maxWidth="xl" className={style.container} >
            <Typography variant="h3" textAlign={'center'} textTransform={"capitalize"}
                sx={{
                    '&::after': {
                        content: '""',
                        width: '40px',
                        height: '3px',
                        backgroundColor: 'primary.main',
                        position: 'absolute',
                        bottom: 0,
                        left: 'calc(50% - 20px)',
                    }
                }}
            >
                About Us
            </Typography>
            <Box mt={1} >
                <Typography variant="subtitle1" textAlign={'center'} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere corporis maxime nulla laudantium explicabo dolorem nihil quaerat iste odio possimus, dolore sunt labore reiciendis optio quia alias neque soluta?
                </Typography>
            </Box>
            <Grid container spacing={3} mt={2} alignItems={'center'}>
                <Grid item xs={12} md={6} >
                    <Typography variant="h4" mb={4} >
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant="body1" mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eveniet cum omnis nemo hic aspernatur expedita ipsa ex explicabo magnam. Officiis ipsa rerum corporis eaque, sit veritatis nemo cupiditate quos quidem soluta quaerat omnis ullam doloribus porro iste enim consequuntur fuga accusantium blanditiis quasi recusandae. Suscipit nostrum asperiores velit. Quisquam.
                    </Typography>
                    <Typography variant="body1" mb={2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sit vitae minus sunt enim corporis!
                    </Typography>
                    <Typography variant="body1" mb={2}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quam! Numquam nulla molestias nobis deleniti voluptatem eius beatae totam ad?
                    </Typography>
                    <Typography variant="body1" mb={2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos est maiores ipsam voluptates quae. Adipisci voluptatibus at, a non accusantium, dolores reiciendis corrupti culpa ab iusto maiores, dolorum consequatur dolorem!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image src="/about.jpg" alt="about" width="1024" height="768" layout="responsive" />
                </Grid>
            </Grid>
        </Container >
    )
}