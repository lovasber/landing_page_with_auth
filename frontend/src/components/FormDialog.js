import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useSnackbar} from "notistack";

export default function FormDialog(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {enqueueSnackbar} = useSnackbar();

    function successDialog() {
        enqueueSnackbar('Successful login!', {variant: 'success'})
    }

    function wrongEmailOrPassword() {
        enqueueSnackbar('Wrong email or password!', {variant: 'error'})
    }

    function serverError() {
        enqueueSnackbar('Server error...', {variant: 'error'})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await submitForm();
        const status = res.status
        switch (status){
            case 200:
                successDialog()
                break;
            case 401:
                wrongEmailOrPassword()
                break;
            default:
                serverError()
        }
    }



    const submitForm = async () => {
        const data = {email, password};
        console.log(JSON.stringify(data));

        return await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        name="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Login</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
