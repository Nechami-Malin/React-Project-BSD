import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GlobalStore from '../AppStore/globalStore';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalPassword, setIsInvalPassword] = useState(false);
    const [isNamefull, setIsNamefull] = useState(false);

    const handleLogin = async () => {
        if (name == "" && password != "") {
            setIsNamefull(true)
            setIsInvalPassword(false)
            return;
        }
        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            body: JSON.stringify({
                name, password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
          GlobalStore.setIsLogin(true);
        }
        else {
            
            if (name != "")
                setIsNamefull(false)
            setIsInvalPassword(true);
            setName("");
            setPassword("");
        }
    }
    return (
        <>
            <div>
                <TextField
                error={isNamefull}
                    required
                    id="outlined-required"
                    label="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    error={isInvalPassword}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <Button fullWidth variant="outlined" onClick={handleLogin}>Login</Button>

            </div>
            {isInvalPassword &&
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Name or password are invalid ! — <strong>check it out!</strong>
                </Alert>
                
                }
            {isNamefull &&
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    The field "name" is required ! — <strong>check it out!</strong>
                </Alert>}
        </>
    )

}