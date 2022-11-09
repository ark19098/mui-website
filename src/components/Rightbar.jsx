import React from 'react';
import {Box,Typography, Avatar, AvatarGroup, ImageList, ImageListItem,List, ListItem, ListItemText, ListItemAvatar, Divider} from '@mui/material'

function Rightbar(){
   return(
       <Box
            flex={2}
            padding={2}
            sx={{ display: { xs: "none",sm: "block" } }}
       >
         <Box position="fixed" width={300}>
           <Typography variant="h6" fontWeight={200}>Online Friends</Typography>
           <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/13700?v=4" />
            <Avatar alt="Travis Howard" src="https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/c6/80/2e/c6802e92-ed60-2fe1-1ca0-285a8d7882c9/pr_source.png/375x375bb.jpg" />
            <Avatar alt="Cindy Baker" src="https://healthsystem.osumc.edu/digitalservices/api/v1/ProviderPicture/6988" />
            <Avatar alt="Agnes Walker" src="https://assets-notonthehighstreet-com.s3.amazonaws.com/fs/b9/bc/535a-0095-4a37-9b62-370bd1a79d1c/normal.jpg" />
            <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/originals/4b/05/a3/4b05a38d160ab9ec56c2a4de023f33c9.jpg" />
          </AvatarGroup>

          <Typography variant="h6" fontWeight={200} mt={2} mb={2}>Latest Photos</Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://images.indianexpress.com/2021/11/Diwali-8.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/220317121107-05-holi-031222-restricted.jpg?c=16x9&q=h_270,w_480,c_fill"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://static.toiimg.com/photo/msid-91172316,width-96,height-65.cms"
                alt=""
              />
            </ImageListItem>
          </ImageList>

          <Typography variant="h6" fontWeight={200} mt={2}>Latest Conversations</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://infoshare.pl/system/cache/img/remysharp-6ih88ukkh130.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                  }
                />
              </ListItem>
      </List>
         </Box>
       </Box>
   )
}
export default Rightbar;
