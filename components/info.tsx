import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { Email, PhoneAndroid, Twitter, Facebook, WhatsApp, Instagram } from "@mui/icons-material";

interface Props {
    children: ReactElement,
}

function CustomIconButton(props: Props) {
    return (
        <IconButton color="inherit" sx={{
            transition: "500ms",
            '&:hover': {
                color: "primary.main"
            }
        }}>
            {props.children}
        </IconButton>
    )
}

export default function Info() {
    return (
        <React.Fragment>
            <Box sx={{
                paddingY: 1,
            }}>
                <Container maxWidth="xl">
                    <Box
                        flexDirection={{ xs: "column", md: "row" }}
                        display={'flex'}
                        justifyContent="center"
                        alignItems={"center"}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexGrow: 1,
                        }}>
                            <Email fontSize="small" color="primary" />
                            <Typography ml={1} variant="body2">
                                test@green.com.br
                            </Typography>
                            <PhoneAndroid fontSize="small" color="primary" />
                            <Typography ml={1} variant="body2">
                                +55 (35) 988068930
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                        }}>
                            <CustomIconButton>
                                <Twitter />
                            </CustomIconButton>
                            <CustomIconButton>
                                <Facebook />
                            </CustomIconButton>
                            <CustomIconButton>
                                <Instagram />
                            </CustomIconButton>
                            <CustomIconButton>
                                <WhatsApp />
                            </CustomIconButton>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}