import { useState, useEffect } from 'react';
import { FormGroup, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers} from '../../Service/api';

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

const UniversityInfo = () => {
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
            <div className={classes.container}>
                <Typography variant="h4">UNIVERSITY INFO</Typography>
                <div>
                    <h2>University Name</h2>
                    <p> {universityName}</p>
                </div>
                <div>
                    <h2>City</h2>
                    <p>{city} </p>
                </div>
                <div>
                    <h2>Degree Program</h2>
                    <p>{degreeProgram} </p>
                </div>
                <div>
                    <h2>Sector</h2>
                    <p>{sector} </p>
                </div>
                <div>
                    <h2>Eligibility Criteria</h2>
                    <p> {eligibilityCriteria} </p>
                </div>

                <div>
                    <h2>Merit Formula</h2>
                    <p>{meritFormula} </p>
                </div>
                <div>
                    <h2>Last Year Merit</h2>
                    <p>{lastYearMerit} </p>
                </div>
                <div>
                    <h2>Section</h2>
                    <p>{section} </p>
                </div>
                <div>
                    <h2>Fee Structure</h2>
                    <p>{feeStructure} </p>
                </div>
                <div>
                    <h2>Location</h2>
                    <p>{location} </p>
                </div>
                <div>
                    <h2>Related Information</h2>
                    <p>{information} </p>
                </div>
                <div>
                    <h2>Email</h2>
                    <p>{email} </p>
                </div>
                <div>
                    <h2>Phone</h2>
                    <p>{phone} </p>
                </div>
                <div>
                    <h2>Website</h2>
                    <p>{websiteLink} </p>
                </div>

                <div>
                    <h2>Image</h2>
                    <p>{imageUrl} </p>
                </div>
                
            </div>
        </>
    )
}

export default UniversityInfo;