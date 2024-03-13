import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Config.js";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";

export default function SignUp() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log('User signed up:', user);
                // Optionally, you can redirect the user to another page or show a success message
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <Box 
        display="flex"
      alignItems="center"
      gap={4}>
                    <Typography variant="h4" gutterBottom>Create Account</Typography>

            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
            <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
            <Typography>Already have an account <Link href="#" underline="hover">
  {"Sign In"}
</Link></Typography>
        </Box>
    );
}
