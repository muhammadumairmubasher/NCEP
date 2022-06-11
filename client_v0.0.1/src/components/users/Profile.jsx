import MovingClouds from "components/MovingClouds";
import React, { useEffect, useState } from "react";
import SetUpProfile from "./SetUpProfile";
import { useHistory } from "react-router";
import { getUserProfile } from "Service/api";
import { Table } from "reactstrap";
const Profile = () => {
    const [userData, setUserData] = useState({});
    const [reload, setReload] = useState(false);
    const history = useHistory();
    const CallProfilePage = async () => {
        try {
            const response = await getUserProfile();
            setUserData(response.data);
            console.log("reload");
            
        } catch (error) {
            console.log(error);
            history.push('/signin')
        }
    }
    useEffect(() => {
        CallProfilePage();
    }, [])
    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/fabio-mangione.jpg").default + ")",
                }}
                className="page-header page-header-xs"
                data-parallax={true}
            >
                <MovingClouds />
            </div>
            <div><br/> 
                <Table responsive border="1" cellPadding={20} cellSpacing={50}>
                    <tbody>
                        <tr>
                            <td>
                                <div><strong>Name:</strong> {userData.name}</div>
                                <div><strong>Phone No:</strong> {userData.phoneNo}</div>
                                <div><strong>Email:</strong> {userData.email}</div>
                                <div><strong>Address:</strong> {userData.address}</div>
                                <div><strong>City:</strong> {userData.city}</div>
                                <div><strong>Zip:</strong> {userData.zipCode}</div>
                            </td>
                            <td>
                                <div><strong>Obtain Matric Marks:</strong> {userData.obtainMatricMarks}</div>
                                <div><strong>Total Matric Marks:</strong> {userData.totalMatricMarks}</div>
                                <div><strong>Obtain Inter Marks:</strong> {userData.obtainInterMarks}</div>
                                <div><strong>Total Inter Marks:</strong> {userData.totalInterMarks}</div>
                                <div><strong>Obtain Test Marks:</strong> {userData.obtainTestMarks}</div>
                                <div><strong>TotalTestMarks:</strong> {userData.totalTestMarks}</div>
                                <div><strong>Entrance Test:</strong> {userData.entranceTest}</div>
                            </td>
                            <td><SetUpProfile callBack={setReload} /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}
export default Profile;