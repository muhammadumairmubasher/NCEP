import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

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

const EditUniversity = () => {
    const [user, setUser] = useState(initialValue);
    const { universityName, city, location, information, sector, meritFormula, lastYearMerit, eligibilityCriteria, feeStructure, email, phone, websiteLink, degreeProgram, section, imageUrl } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
        console.log(response.data)
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        history.push('/universities');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
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
                <Typography variant="h4">UPDATE UNIVERSITY INFO</Typography>
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
                    <Button variant="contained" color="primary" onClick={() => editUserDetails()}>UPDATE INFO</Button>
                </FormControl>
            </FormGroup>
        </>
    )
}

export default EditUniversity;