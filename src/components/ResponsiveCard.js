import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
const ResponsiveCard = ({ title, price, image, rating }) => {
  return (
    <Card
      sx={{
        flex: '1 1 calc(33% - 16px)',
        minWidth: 200,
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 200,
          objectFit: 'cover',
        }}
      />

      {/* Card Content */}
      <CardContent>
        {/* Product Title */}
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/* Price */}
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          ${price.toFixed(2)}
        </Typography>

        {/* Rating Section */}
        <Box display="flex" alignItems="center" gap={1}>
          <StarIcon sx={{ color: 'gold' }} />
          <Typography variant="body2" color="text.primary">
            {rating.rate} ({rating.count} reviews)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;