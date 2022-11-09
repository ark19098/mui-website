import React from 'react';
import Post from './Post'
import {Box} from '@mui/material';
import {MoreVert, Favorite, Share, List, FavoriteBorder} from '@mui/icons-material';

function Feed(){
   return(
       <Box flex={4} padding={2}>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
       </Box>
   )
}
export default Feed;
