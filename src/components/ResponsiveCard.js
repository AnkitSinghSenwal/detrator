import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const ResponsiveCard = ({ title, description }) => {
  return (
    <Card
      sx={{
        flex: '1 1 calc(33% - 16px)',
        minWidth: 200,
        transition: 'transform 0.2s ease', // Smooth transition for scaling
        '&:hover': {
          transform: 'scale(1.05)', // Scale the card slightly on hover
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;