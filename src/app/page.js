// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// import React from 'react';
// import { Box, Container, Typography } from '@mui/material';
// import ResponsiveCard from '../components/ResponsiveCard';

// const Home = () => {
//   return (
//     <Container maxWidth="lg">
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         mt={4}
//         mb={4}
//       >
//         {/* Logo */}
//         <Typography variant="h4" component="h1" color="primary">
//           Brand Name
//         </Typography>
//       </Box>
//       <Box
//         display="flex"
//         flexDirection={{ xs: 'column', md: 'row' }}
//         flexWrap="wrap"
//         gap={2}
//       >
//         {/* Cards */}
//         <ResponsiveCard title="Card 1" description="Description for Card 1" />
//         <ResponsiveCard title="Card 2" description="Description for Card 2" />
//         <ResponsiveCard title="Card 3" description="Description for Card 3" />
//       </Box>
//     </Container>
//   );
// };

// export default Home;

// 2nd update version 

// import React from 'react';
// import { Box, Container, Typography, TextField } from '@mui/material';
// import ResponsiveCard from '../components/ResponsiveCard';

// const Home = () => {
//   return (
//     <Container maxWidth="lg">
//       {/* Logo, Branding, and Search */}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         flexDirection={{ xs: 'column', md: 'row' }}
//         mt={4}
//         mb={4}
//       >
//         {/* Logo and Brand Name */}
//         <Box display="flex" alignItems="center" flexDirection="column">
//           <Box
//             component="img"
//             src="/logo.png" // Replace with your logo file path
//             alt="Brand Logo"
//             sx={{ width: 120, height: 120, mb: 2 }}
//           />
//           <Typography variant="h4" component="h1" color="primary">
//             Brand Name
//           </Typography>
//         </Box>

//         {/* Search Box (Hidden on Small Screens) */}
//         <Box
//           sx={{
//             display: { xs: 'none', md: 'block' },
//             mt: { xs: 2, md: 0 },
//           }}
//         >
//           <TextField
//             variant="outlined"
//             placeholder="Search..."
//             sx={{ width: 300 }}
//           />
//         </Box>
//       </Box>

//       {/* Cards Section */}
//       <Box
//         display="flex"
//         flexDirection={{ xs: 'column', md: 'row' }}
//         flexWrap="wrap"
//         gap={2}
//       >
//         <ResponsiveCard title="Card 1" description="Description for Card 1" />
//         <ResponsiveCard title="Card 2" description="Description for Card 2" />
//         <ResponsiveCard title="Card 3" description="Description for Card 3" />
//       </Box>
//     </Container>
//   );
// };

// export default Home;

// 3rd version 

import React from 'react';
import { Box, Container, TextField, Typography, Avatar, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ResponsiveCard from '@/components/ResponsiveCard';

const Home = () => {
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

        {/* Search Box */}
        {/* <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // Hide on small screens
            flexGrow: 1,
            mx: 2,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputAdornment={
              <InputAdornment position="end">
                <IconButton  sx={{ color: 'text.primary' }}>
                  <SearchIcon  sx={{ fontSize: 20 }}  />
                </IconButton>
              </InputAdornment>
              
            }
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.paper', // Set background color to match theme
              },
              '& .MuiInputBase-input': {
                color: 'text.primary', // Set input text color for both themes
              },
            }}
          />


        </Box> */}

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
        <ResponsiveCard title="Card 1" description="Description for Card 1" />
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
        <ResponsiveCard title="Card 12" description="Description for Card 12" />
      </Box>
    </Container>
  );
};

export default Home;

// 4th version

// import React from 'react';
// import { Box, Container, Typography, Avatar } from '@mui/material';

// const Home = () => {
//   return (
//     <Container maxWidth="lg">
//       {/* Header Section */}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         border="1px solid green"
//         padding={2}
//         mb={4}
//         flexDirection="row"
//       >
//         {/* Brand Name */}
//         <Typography variant="h6" component="h1" color="primary">
//           Brand Name
//         </Typography>

//         {/* User Profile */}
//         <Avatar sx={{ bgcolor: 'blue' }}>J</Avatar>
//       </Box>

//       {/* Content Section */}
//       <Box
//         display="flex"
//         flexDirection={{ xs: 'column', md: 'row' }} // Stacks on small screens
//         alignItems="center"
//         border="1px solid gray"
//         minHeight={300}
//       >
//         <Box
//           sx={{
//             flex: 1,
//             border: '1px solid gray',
//             height: 200,
//             width: '100%',
//           }}
//         ></Box>
//       </Box>
//     </Container>
//   );
// };

// export default Home;