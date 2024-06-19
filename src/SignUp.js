import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { signup } from './ApiService';
import { Link } from "react-router-dom";
import Bar from './Bar';

function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");

        signup({username: username, password: password}).then(
            (response) => {
                window.location.href = "/login";
            }
        );
    };

    return(
        <div>
        <Bar />
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}} >
            <Grid container spacing={2}>
                <Grid item xs = {12}>
                    <Typography component="h1" variant='h5'>회원가입</Typography>
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
                        <Button type='submit' fullWidth variant='contained' color='primary'>회원가입</Button>
                    </Grid>
                    <Grid item>
                        <Link to="/login" variant="body2">
                            로그인
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </div>
    );
};

export default SignUp;