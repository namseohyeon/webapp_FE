import { Container, AppBar, Toolbar, Grid, Typography, Button } from '@mui/material';
import { signout } from './ApiService';
import { useNavigate } from 'react-router-dom';

const Bar = () =>{
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
    return (
    <AppBar position="static" style={{ backgroundColor: '#09386b' }}>
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant='h6'>BOOKSTOER</Typography>
          </Grid>
          <Grid item>
            <Button color='primary' sx={{ color: 'white' }} onClick={ handleLogin }>로그인</Button>
            <Button color='primary' sx={{ color: 'white' }} onClick={signout}>로그아웃</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Bar;
