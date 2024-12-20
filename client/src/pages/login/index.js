import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import BetButton from "../../components/buttons/main"
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import {Link} from "react-router-dom";


export default function Login() {

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;

    return (
        <div className="login">
            <img src="/assets/imgs/bet.png" className="mb-20"/>
            <div className="bet-width mb-35" style={{textAlign:"left"}}>
            <h3 className="md-title">Sign In</h3>
            <p>welcome back</p>
            </div>
            <div className="bet-width mb-35">
            <TextField fullWidth label="Email Address" className="mb-20 bet-width" /><br/>
            <TextField fullWidth label="Password" className="mb-20 bet-width" />
            <div style={{display:"flex",justifyContent:"space-between"}} className='mb-20 bet-width'>
            <FormControlLabel
                control={
                    <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                }
                label="Remember me"
            />
            <Link to=""><Typography component="legend" className="text-red-color sm-title">Forgot a password?</Typography></Link>
            </div>
            <BetButton/>
            <hr/>
            <div className="bet-width mb-30" style={{textAlign:"center"}}>
            
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              style={{background:"blue",color:"white",marginRight:"10px",padding:"15px",width:"70px",height:"70px"}}
            >
              <GoogleIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show more"a
              aria-haspopup="true"
              style={{background:"red",color:"white",padding:"15px",width:"70px",height:"70px"}}
            >
              <GoogleIcon />
            </IconButton>
            </div>
            <Typography component="legend"> Do you have an account ? <Link to="" className="text-red-color">Register</Link></Typography>

            </div>
        </div>

    );
}