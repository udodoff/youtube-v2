import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Box, LinearProgress } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <Box sx={{ background: '#000', position: 'relative' }}>
        {loading && (
          <LinearProgress sx={{ position: 'absolute', top: 5, width: '100%', zIndex: '101' }} color="error" />
        )}
        <Navbar style={{ position: 'sticky', top: 0 }} />
        <Routes>
          <Route path="/" exact element={<Feed setLoading={setLoading} />} />
          <Route path="/video/:id" element={<VideoDetail setLoading={setLoading} />} />
          <Route path="/channel/:id" element={<ChannelDetail setLoading={setLoading} />} />
          <Route path="/search/:searchTerm" element={<SearchFeed setLoading={setLoading} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
