import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    universityName: '',
    city: '',
    location: '',
    information: '',
    meritFormula: '',
    lastYearMerit: '',
    eligibilityCriteria: '',
    feeStructure: '',
    email: '',
    phone: '',
    websiteLink: '',
    degreeProgram: '',
    section: '',
    imageUrl: '',
    sector: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { universityName, city, location, information, sector, meritFormula, lastYearMerit, eligibilityCriteria, feeStructure, email, phone, websiteLink, degreeProgram, section, imageUrl } = user; //Array destructuring
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('/universities');
    }

    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/fabio-mangione.jpg").default + ")",
                }}
                className="page-header page-header-xs"
                data-parallax={true}
            // ref={pageHeader}
            >
                <div className="filter" />
                <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
                <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
            </div>
            <FormGroup className={classes.container}>
                <Typography variant="h5">ADD NEW UNIVERSITY</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">University Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='universityName' value={universityName} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">City</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Degree Program</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='degreeProgram' value={degreeProgram} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Sector</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='sector' value={sector} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Eligibility Criteria</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='eligibilityCriteria' value={eligibilityCriteria} id="my-input" />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Merit Formula</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='meritFormula' value={meritFormula} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Last Year Merit</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='lastYearMerit' value={lastYearMerit} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Section</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='section' value={section} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Fee Structure</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='feeStructure' value={feeStructure} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Location</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='location' value={location} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Related Information</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='information' value={information} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Website</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='websiteLink' value={websiteLink} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Image</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='imageUrl' value={imageUrl} id="my-input" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => addUserDetails()}>ADD NEW ENTRY</Button>
                </FormControl>
            </FormGroup>
        </>
    )
}


export default AddUser;