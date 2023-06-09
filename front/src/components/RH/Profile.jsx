import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const ProfilePage = () => {
  
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log("Submitted");
    };
  
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5">Profile</Typography>
  
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                disabled
              />
              <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
              />
              <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
              />
              <TextField
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
              <Button type="submit" variant="contained" fullWidth>
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default ProfilePage;