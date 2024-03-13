import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Config.js";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('User signed in:', user);
                // Optionally, you can redirect the user to another page or show a success message
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Sign In</Typography>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button variant="contained" onClick={handleSignIn}>Sign In</Button>
            <Typography>Don't have an account <Link href="/" underline="hover">
  {"Sign Up"}
</Link></Typography>
        </Box>
    );
}
