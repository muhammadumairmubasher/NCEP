import React, { useEffect, useState } from "react";
import { getUserProfile } from "Service/api";
import { Table, Button } from "reactstrap";
const ProfileData = () => {
    const [userData, setUserData] = useState({});
    const CallProfilePage = async () => {
        try {
            const response = await getUserProfile();
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        CallProfilePage();
    }, [])
    return (
        <>
            <Table cellPadding={20} cellSpacing={20}>
                <tbody>
                    <tr>
                        <td>
                            <div><strong>Name:</strong> {userData.name}</div>
                            <div><strong>Phone No:</strong> {userData.phoneNo}</div>
                            <div><strong>Email:</strong> {userData.email}</div>
                            <div><strong>Address:</strong> {userData.address}</div>
                            <div><strong>City:</strong> {userData.city}</div>
                            <div><strong>Zip:</strong> {userData.zipCode}</div>
                            <Button variant="contained" className="mt-2" color="primary" onClick={() => { }}>Prefered Universities</Button>
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
                    </tr>
                </tbody>
            </Table>
        </>
    );
}
export default ProfileData;