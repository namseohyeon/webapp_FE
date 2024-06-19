import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import {signin} from "./ApiService";
import { Link } from "react-router-dom";
import Bar from './Bar';

function Login(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");

        signin({username:username, password: password});
    };

    return(
        <div>
        <Bar />
        <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
            <Grid container spacing={2}>
                <Grid item xs = {12}>
                    <Typography component="h1" variant='h5'>로그인</Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                <Grid container spacing={2}>
                    <Grid item xs ={12}>
                        <TextField 
                        variant='outlined'
                        required
                        fullWidth
                        id="username"
                        label="아이디"
                        name="username"
                        autoComplete='username' />
                    </Grid>
                    <Grid item xs ={12}>
                        <TextField 
                        variant='outlined'
                        required
                        fullWidth
                        id="password"
                        label="비밀번호"
                        name="password"
                        autoComplete='current-password' />
                    </Grid>
                    <Grid item xs ={12}>
                        <Button type='submit' fullWidth variant='contained' color='primary'>로그인</Button>
                    </Grid>
                    <Grid item>
                        <Link to="/signup" variant="body2">
                            회원가입
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </div>
    );
};

export default Login;