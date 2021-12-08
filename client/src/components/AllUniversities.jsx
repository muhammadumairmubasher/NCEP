import React, { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
const filterButton = [
    {
        btnName: 'University Name',
        btnValue: 'universityName',
        active: 'false'
    },
    {
        btnName: 'City',
        btnValue: 'city',
        active: 'false'
    },
    {
        btnName: 'Degree Program',
        btnValue: 'degreeProgram',
        active: 'false'
    },
    {
        btnName: 'Sector',
        btnValue: 'sector',
        active: 'false'
    },
    {
        btnName: 'Last Year Merit',
        btnValue: 'lastYearMerit',
        active: 'false'
    }
]
const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px',
        position: 'static'
    },
    thead: {
        '& > *': {
            fontSize: 16,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 13
        }
    },
})
const AllUniversities = () => {
    let pageHeader = React.createRef();
    let counter = 0;
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterUniversity, setFilterUniversity] = useState([]);
    const [checkedState, setCheckedState] = useState(
        new Array(filterButton.length).fill(false)
    );
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    },[]);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }
    const handleOnChange = (e, position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        filterButton.forEach((item, index) => {
            item.active = updatedCheckedState[index]
        })
        let filterData = filterButton.filter((item) => {
            if (item.active) {
                return item
            }
        })
        setFilterUniversity(filterData);
    }
    let selectedCheckedButtons;
    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/fabio-mangione.jpg").default + ")",
                }}
                className="page-header page-header-xs"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
                <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
            </div>
            <div style={{ margin: '20px 20px 20px 100px', width: '100%' }}>
                {
                    getAllUsers,
                    filterButton.map((item, index) => {
                        return (
                            <>
                                <span style={{ margin: '20px 20px 20px 20px' }}>
                                    <input type="checkbox" id={`${item.btnValue}`} name={`${item.btnValue}`} value={`${item.btnValue}`} checked={checkedState[index]} onChange={(e) => handleOnChange(e, index)} />&nbsp;
                                    <label for={`${item.btnValue}`}>{item.btnName}</label>
                                </span>
                            </>
                        );
                    })
                }
                <br />
                <input style={{ width: '80%' }} type={"text"} placeholder={"Search..."} onChange={e => { setSearchTerm(e.target.value) }} />
            </div>
            <table className={classes.table} border='2' cellPadding='15px'>
                <thead>
                    <tr className={classes.thead}>
                        <th>#</th>
                        <th>UNIVERSITY NAME</th>
                        <th>CITY</th>
                        <th>DEGREE PROGRAM</th>
                        <th>SECTOR</th>
                        <th>ELIGIBILITY CRITERIA</th>
                        <th>MERIT FORMULA</th>
                        <th>LAST YEAR MERIT</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedCheckedButtons = JSON.stringify(filterUniversity.map((item) => item.btnValue)),
                        console.log(selectedCheckedButtons),
                        users.filter(val => {
                            if (searchTerm === "") {
                                return val;
                            } else if (selectedCheckedButtons == "[\"universityName\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"city\"]") {
                                if (val.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"degreeProgram\"]") {
                                if (val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"sector\"]") {
                                if (val.sector.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"lastYearMerit\"]") {
                                if (JSON.stringify(val.lastYearMerit).toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            }
                            else if (selectedCheckedButtons == "[\"universityName\",\"city\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"universityName\",\"degreeProgram\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"universityName\",\"sector\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.sector.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"universityName\",\"lastYearMerit\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && JSON.stringify(val.lastYearMerit).toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"city\",\"degreeProgram\"]") {
                                if (val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"city\",\"sector\"]") {
                                if (val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.sector.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"city\",\"lastYearMerit\"]") {
                                if (val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && JSON.stringify(val.lastYearMerit).toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"degreeProgram\",\"sector\"]") {
                                if (val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.sector.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"degreeProgram\",\"lastYearMerit\"]") {
                                if (val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())
                                    && JSON.stringify(val.lastYearMerit).toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"sector\",\"lastYearMerit\"]") {
                                if (val.sector.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.lastYearMerit.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"universityName\",\"city\",\"degreeprogram\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            }
                            else if (selectedCheckedButtons == "[\"universityName\",\"city\",\"sector\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.sector.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"universityName\",\"city\",\"lastYearMerit\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && JSON.stringify(val.lastYearMerit).toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            }
                            else if (selectedCheckedButtons == "[\"universityName\",\"city\",\"degreeprogram\",\"sector\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.sector.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            } else if (selectedCheckedButtons == "[\"universityName\",\"city\",\"degreeprogram\",\"lastYearMerit\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())
                                    && JSON.stringify(val.lastYearMerit).toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            }
                            else if (selectedCheckedButtons == "[\"universityName\",\"city\",\"degreeprogram\",\"sector\",\"lastYearMerit\"]") {
                                if (val.universityName.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.city.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.degreeProgram.toLowerCase().includes(searchTerm.toLowerCase())
                                    && val.sector.toLowerCase().includes(searchTerm.toLowerCase())
                                    && JSON.stringify(val.lastYearMerit).toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            }
                        }).map((user) => (
                            <tr className={classes.row} key={user._id}>
                                <td>{counter = counter + 1}</td>
                                <td>{user.universityName}</td>
                                <td>{user.city}</td>
                                <td>{user.degreeProgram}</td>
                                <td>{user.sector}</td>
                                <td>{user.eligibilityCriteria}</td>
                                <td>{user.meritFormula}</td>
                                <td>{user.lastYearMerit}</td>
                                <td>
                                    <Button component={Link} to={`/edit/${user._id}`}><i className='fa fa-edit' style={{ color: 'Blue' }}></i></Button>
                                    <br />
                                    <Button onClick={() => deleteUserData(user._id)}> <i className='nc-icon nc-simple-remove' style={{ color: 'red' }}></i></Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default AllUniversities;