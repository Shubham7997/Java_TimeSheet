import {useState } from 'react';
import {Link} from 'react-router-dom';


export default function RequestAccess(){

    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Lead");

    const onRequest=(event)=>{
        event.preventDefault();
        alert(`New Request(${id}, ${name}, ${role}) has been created successfully!!`);
    }

    return (
        <div className='row'>
        <h1 className="border border-dark py-3 px-5 text-center">AssetMark - Shift Allowance App</h1>
        <div className='col-lg-4 col-md-5 col-sm-7 mx-auto mt-5 border border-primary p-3 rounded-3'>
            <h2 className='text-center'>New Access Request</h2>
            <hr/>
            <form>
                <table className='mx-auto w-100'>
                <tr className='row'>
                    <td className='col-3 fw-bold'>User Id:</td>
                    <td className='col-9'><input className="float-end form-control" type="email" value={id} onChange={(data)=>setId(data.target.value)} placeholder="Enter Email Id Here" required/></td>
                </tr>
                <tr className='row'>
                    <td className='col-3 fw-bold'>Name:</td>
                    <td className='col-9'><input className="float-end form-control" type="text" value={name} onChange={(data)=>setName(data.target.value)} placeholder="Enter Name Here" required/></td>
                </tr>
                <tr className='row'>
                    <td className='col-3 fw-bold'>Role:</td>
                    <td className='col-9'>
                        <select className="form-control" value={role} onChange={(data)=>setRole(data.target.value)}>
                        <option value="Lead">Lead</option>
                        <option value="Admin">Admin</option>
                        <option value="Developer">Developer</option>
                    </select></td>
                </tr>
                <tr className='row'>
                    <td className='col d-grid'><button className="btn btn-primary mt-4" onClick={(event)=>onRequest(event)}>Request</button></td>
                </tr>
                </table>
            </form>
            <p className='text-center mt-3'>Alreadty Registered ? <Link to="/">Go to Login Screen</Link></p>
        </div>
        
        </div>
    );
}