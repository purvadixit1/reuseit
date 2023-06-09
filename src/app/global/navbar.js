import React from 'react';
import { Link } from 'react-router-dom';

// redux store
import { useSelector, useDispatch } from 'react-redux';
import { setTabValue } from '../../redux/features/navbarSlice';
import { selectIsLoggedIn } from '../../redux/features/authSlice';

// components from MUI
import {
    Box,
    Container,
    Button,
    Avatar,
    Tooltip,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Paper,
    BottomNavigation,
    BottomNavigationAction,
} from '@mui/material';

// icons from MUI 
import {
    HomeRounded as HomeIcon,
    ProductionQuantityLimitsRounded as ProductIcon,
    ContactsRounded as ContactIcon,
    InfoRounded as AboutIcon,
    ChatOutlined as ChatIcon,
    AccountCircleOutlined as ProfileIcon,
    SettingsOutlined as SettingIcon,
    StorefrontOutlined as SellIcon,
    DarkModeOutlined as DarkIcon,
    LogoutRounded as LogoutIcon,
} from '@mui/icons-material';

const pages = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Products', path: '/products', icon: ProductIcon },
    { name: 'Contact', path: '/contact', icon: ContactIcon },
    { name: 'About', path: '/about', icon: AboutIcon },
];

const settings = [
    { name: 'Profile', path: '/', icon: ProfileIcon },
    { name: 'Sell', path: '/', icon: SellIcon },
    { name: 'Account', path: '/', icon: SettingIcon },
    { name: 'Dark Mode', path: '/', icon: DarkIcon },
    { name: 'Logout', path: '/', icon: LogoutIcon },
];

const NavLink = ({ page, index, tabValue, handleTabChange }) => (
    <Button
        variant="text"
        component={Link}
        to={page.path}
        onClick={() => handleTabChange(index)}
        sx={{
            textTransform: 'none',
            color: tabValue === index ? 'primary.main' : 'black',
        }}
    >
        {page.name}
    </Button>
);

const Navbar = () => {
    const dispatch = useDispatch();
    const tabValue = useSelector((state) => state.navbar.value);

    const handleTabChange = React.useCallback(
        (newValue) => {
            dispatch(setTabValue(newValue));
        },
        [dispatch]
    );

    const isLoggedIn = useSelector(selectIsLoggedIn);

    // user menu
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = React.useCallback((event) => {
        setAnchorElUser(event.currentTarget);
    }, []);
    const handleCloseUserMenu = React.useCallback(() => {
        setAnchorElUser(null);
    }, []);

    return (
        <>
            <Box sx={{ height: '60px', boxShadow: 1 }}>
                <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box component={Link} to="/" onClick={() => handleTabChange(0)} sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={process.env.PUBLIC_URL + 'image/reuseit.png'} alt="reuseit" height={'40px'} />
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            {pages.map((page, index) => (
                                <NavLink key={page.name} page={page} index={index} tabValue={tabValue} handleTabChange={handleTabChange} />
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {!isLoggedIn ? (
                            <>
                                <Button variant="outlined" sx={{ ml: 1.5, textTransform: 'none' }}>Login</Button>
                                <Button variant="contained" component={Link} to="/register" onClick={() => handleTabChange(-1)} sx={{ ml: 1.5, textTransform: 'none' }}>Register</Button>
                            </>
                        ) : (
                            <>
                                <Button variant="text" sx={{ color: '#00000099' }}>
                                    <ChatIcon />
                                </Button>
                                <Box sx={{ flexGrow: 0, ml: 1 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="User Name" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting.name} onClick={handleCloseUserMenu} sx={{ minWidth: '220px', py: 1 }}>
                                                {<setting.icon />}<Typography textAlign="center" sx={{ ml: 1 }}>{setting.name}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </>
                        )}
                    </Box>
                </Container>
            </Box>

            <Paper sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
                <BottomNavigation showLabels>
                    {pages.map((page, index) => (
                        <BottomNavigationAction
                            key={page.name}
                            label={page.name}
                            component={Link}
                            to={page.path}
                            icon={<page.icon />}
                            onClick={() => handleTabChange(index)}
                            sx={{
                                color: tabValue === index ? 'primary.main' : 'normal',
                            }}
                        />
                    ))}
                </BottomNavigation>
            </Paper>
        </>
    );
};

export default Navbar;
