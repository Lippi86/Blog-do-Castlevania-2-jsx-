
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from '../../pages/sumary';
import Alucard from '../../pages/alucard';
import Sypha from '../../pages/sypha';
import Trevor from '../../pages/trevor';
import About from '../../pages/about';
//import { listItemButtonClasses } from '@mui/material';
import Link from 'next/link'
import Sumary from '../container/DivContent'
import SearchAppBar from '../navBar/SearchAppBar';



const drawerWidth = 'auto';
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),   
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [urlAtual, seturlAtual] = React.useState('')

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const rotas = [
    Home,
    Alucard,
    Sypha,
    Trevor,
    About
  ]
  

  React.useEffect(() => {
    seturlAtual(window.location.pathname);
  }, [urlAtual])
  
  console.log(urlAtual);

  function renderElement() {   
    console.log("entrou : ",urlAtual) 
    
    if(urlAtual === '/alucard'){
     console.log("alucard: ",urlAtual) 

      return <div><Alucard /></div>;
    }
    else if(urlAtual === '/trevor'){
     console.log("Trevor: ",urlAtual) 

      return <div><Trevor /> </div>;
    }
    else if(urlAtual === '/sypha'){
     console.log("Sypha: ",urlAtual) 

      return <div><Sypha /></div>;
    }  
    console.log("caiu no defaul: ",urlAtual) 
    
    return <div><Sumary /></div>;
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Castlevania's Blog
          </Typography>
        <SearchAppBar /> 
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Link href="/">
            <List>          
              <ListItem button component={rotas.Home} to="/" >
              <ListItemText primary="home"/>             
            </ListItem>            
          </List>
        </Link>
        <Link href="/alucard">
            <List>          
              <ListItem button component={rotas.Alucard} to="/alucard" >
              <ListItemText primary="alucard"/>           
            </ListItem>            
          </List>
        </Link>
        <Link href="/sypha">
            <List>          
              <ListItem button component={rotas.Sypha} to="/sypha" >
              <ListItemText primary="sypha"/>             
            </ListItem>            
          </List>
        </Link>
        <Link href="/trevor">
            <List>          
              <ListItem button component={rotas.Trevor} to="/trevor" >
              <ListItemText primary="trevor"/>             
            </ListItem>            
          </List>
        </Link>
        <Link href="/about">
            <List>          
              <ListItem button component={rotas.About} to="/about" >
              <ListItemText primary="about"/>             
            </ListItem>            
          </List>
        </Link>
        <Divider />        
      </Drawer>
      <Main open={open}>  
      {renderElement()}
      </Main>
    </Box>
  );
}
