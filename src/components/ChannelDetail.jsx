import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Videos, ChannelCard } from './';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = ({ setLoading }) => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromApi(`search?part=snippet&channelId=${id}&order=date`).then((data) => {
      setVideos(data?.items);
      setLoading(false);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-115px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
