import { MenuRounded } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, Box, Button, Container, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import React from "react";

interface Props {
    children: React.ReactElement,
}


function ElevationScroll(props: Props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function DropDown() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                variant="text"
                sx={{
                    color: 'text.secondary',
                }}
            >
                DropDown
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>DropDown</MenuItem>
                <MenuItem onClick={handleClose}>DropDown</MenuItem>
                <MenuItem onClick={handleClose}>DropDown</MenuItem>
                <MenuItem onClick={handleClose}>DropDown</MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll>
                <AppBar sx={{ transition: '500ms', backgroundColor: 'white' }} position="sticky" >
                    <Container maxWidth="xl">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1 }} color="primary" >
                                LOGO
                            </Typography>
                            <Box display={{ xs: 'none', md: 'block' }} >
                                <Button color="inherit" sx={{
                                    color: "text.secondary"
                                }}>
                                    Home
                                </Button>
                                <Button color="inherit" sx={{
                                    color: "text.secondary"
                                }}>
                                    About
                                </Button>
                                <Button color="inherit" sx={{
                                    color: "text.secondary"
                                }}>
                                    Services
                                </Button>
                                <Button color="inherit" sx={{
                                    color: "text.secondary"
                                }}>
                                    Portfolio
                                </Button>
                                <Button color="inherit" sx={{
                                    color: "text.secondary"
                                }}>
                                    Team
                                </Button>
                                <DropDown />
                                <Button color="inherit" sx={{
                                    color: "text.secondary"
                                }}>
                                    Contact
                                </Button>
                            </Box>
                            <Box display={{ xs: "block", md: "none" }}>
                                <IconButton
                                    id="basic-nav-button"
                                    aria-controls={open ? 'basic-nav-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    color="inherit"
                                >
                                    <MenuRounded />
                                </IconButton>
                                <Menu
                                    id="basic-nav-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-nav-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Home</MenuItem>
                                    <MenuItem onClick={handleClose}>About</MenuItem>
                                    <MenuItem onClick={handleClose}>Services</MenuItem>
                                    <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                                    <MenuItem onClick={handleClose}>Team</MenuItem>
                                    <DropDown />
                                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}