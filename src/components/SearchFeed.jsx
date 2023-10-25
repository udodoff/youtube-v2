import { Stack, Typography, Box } from '@mui/material';
import { Videos } from '.';

import { useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = ({ setLoading }) => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
        Search results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
