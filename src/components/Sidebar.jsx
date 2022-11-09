import React from 'react';
import {Box,List,ListItem,ListItemButton,ListItemIcon, ListItemText, Switch} from '@mui/material'
import {Home, Article, Group, Storefront, Person, Settings, AccountBox, ModeNight} from '@mui/icons-material';

function Sidebar({mode, setMode}){
   return(
       <Box
            // bgcolor="skyblue"
            flex={1}
            padding={2}
            sx={{ display: { xs: "none",sm: "block" } }}
        >
          <Box position="fixed">
            <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Storefront />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profiles" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <ModeNight />
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode === 'light' ?  'dark' : 'light')}/>
            </ListItemButton>
            </ListItem>

            </List>
          </Box>
        </Box>
   )
}
export default Sidebar;
