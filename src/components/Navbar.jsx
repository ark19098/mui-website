import {React,useState} from 'react';
import {AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material';
import {Person, Pets, Mail, Notifications} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "spacebetween"
})

const Search = styled("div")(({ theme })=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme })=>({
    // backgroundColor: "white",
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
      display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme })=>({
    // backgroundColor: "white",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
      display: "none"
    }
}));

function Navbar(){
  const [open, setOpen] = useState(false);
   return(
       <AppBar position="sticky">

           <StyledToolbar>
                <Typography variant='h6'sx={{display:{xs:"none", sm:"block"}}} >ANKUR KUMAR</Typography>
                <Person sx={{display:{xs:"block", sm:"none"}}}/>
                <Pets sx={{margin: 2}}/>
                <Search> <InputBase placeholder="Search..."/> </Search>
                <Icons sx={{margin: 2}}>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar
                      sx={{width: 30, height: 30}}
                      src="https://m.media-amazon.com/images/M/MV5BMDQ5NjBhZmMtMTU0Ni00ODFiLTgwM2MtMDlkOTNkZDY5YjE5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
                      onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                  <Avatar
                    sx={{width: 30, height: 30}}
                    src="https://m.media-amazon.com/images/M/MV5BMDQ5NjBhZmMtMTU0Ni00ODFiLTgwM2MtMDlkOTNkZDY5YjE5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
                  />
                  <Typography span="span">John</Typography>
                </UserBox>
           </StyledToolbar>
           <Menu
             id="demo-positioned-menu"
             aria-labelledby="demo-positioned-button"
             // anchorEl={this.state.anchorEl}
             open={open}
             onClose={(e)=>setOpen(false)}
             anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
             transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
             }}
           >
             <MenuItem>Profile</MenuItem>
             <MenuItem>My account</MenuItem>
             <MenuItem>Logout</MenuItem>
           </Menu>
       </AppBar>
   )
}
export default Navbar;
