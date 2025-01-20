"use client"; 

import { React, useEffect, useState } from 'react';
import { Skeleton, Box, Container, TextField, Typography, Avatar, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ResponsiveCard from '@/components/ResponsiveCard';

const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors


  // Fetch data function
  async function getData() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  }


  // useEffect to fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  // Map data to cards
  const cards = data.map((item) => (
    <ResponsiveCard key={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
  ));










  return (
    <Container maxWidth="xl" >
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid green"
        padding={2}
        mb={4}

        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid green',
          padding: 2,
          mb: 4,
          borderRadius: '8px',
          backgroundColor: 'background.paper', // Set background color based on the theme
          '@media (max-width: 600px)': { // Optional: custom styles for small screens
            padding: 1, // Less padding on small screens
          },
        }}
      >
        {/* Brand Name */}
        <Typography variant="h6" component="h1" color="primary" sx={{
          transition: 'transform 0.2s ease', // Smooth transition for scaling
          '&:hover': {
            transform: 'scale(1.05)', // Scale the card slightly on hover
          },
        }}>
          Hello.com
        </Typography>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' }, // Hide on small screens
            flexGrow: 1,
            mx: 2,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton sx={{ color: 'text.primary' }}> {/* Make icon color responsive */}
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.paper', // Set background color to match theme
              },
              '& .MuiInputBase-input': {
                color: 'text.primary', // Set input text color for both themes
              },
            }}
          />
        </Box>

        {/* User Profile */}
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={{
            bgcolor: 'blue', transition: 'transform 0.2s ease', // Smooth transition for scaling
            '&:hover': {
              transform: 'scale(1.05)', // Scale the card slightly on hover
            },
          }}>J</Avatar>
          <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' }, color: 'text.primary' }}>John</Typography>
        </Box>
      </Box>

      {/* Card Section */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        flexWrap="wrap"
        gap={2}
      >
        {/* <ResponsiveCard title="Card 1" description="Description for Card 1" />
        <ResponsiveCard title="Card 2" description="Description for Card 2" />
        <ResponsiveCard title="Card 3" description="Description for Card 3" />
        <ResponsiveCard title="Card 4" description="Description for Card 4" />
        <ResponsiveCard title="Card 5" description="Description for Card 5" />
        <ResponsiveCard title="Card 6" description="Description for Card 6" />
        <ResponsiveCard title="Card 7" description="Description for Card 7" />
        <ResponsiveCard title="Card 8" description="Description for Card 8" />
        <ResponsiveCard title="Card 9" description="Description for Card 9" />
        <ResponsiveCard title="Card 10" description="Description for Card 10" />
        <ResponsiveCard title="Card 11" description="Description for Card 11" />
        <ResponsiveCard title="Card 12" description="Description for Card 12" /> */}

<Box sx={{ padding: 2 }}>
      {/* Display loading skeleton or error message */}
      {loading && (
        <>
          <Skeleton variant="rectangular" width="100%" height={200} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="80%" sx={{ mb: 2 }} />
          <Skeleton variant="text" width="60%" sx={{ mb: 2 }} />
        </>
      )}
      
      {error && (
        <Typography variant="body1" color="error" sx={{ mb: 2 }}>
          Error fetching data: {error}
        </Typography>
      )}

      {!loading && !error && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {cards}
        </Box>
      )}
    </Box>

      </Box>
    </Container>
  );
};

export default Home;