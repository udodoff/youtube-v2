import { Stack, Typography, Box } from '@mui/material';
import { Sidebar, Videos } from '.';

import { useState } from 'react';

const Feed = ({ setLoading }) => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', justifyContent: 'center', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setLoading={setLoading}
          setVideos={setVideos}
        />
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
