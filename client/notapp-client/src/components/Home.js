import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export function Home() {
    const [folders, setFolders] = useState(null);
    const [title, setTitle] = useState(null);
    const [uyari, setUyari] = useState('');

    useEffect(() => {
        axios.get("/folders").then((response) => {
            setFolders(response.data);
        });
    }, [uyari]);

    function titleHandler(title) {
        setTitle(title);
    }

    function addTitle() {
        axios.post('/folders', {
            folderName: title
            })
            .then(function (response) {
            console.log(response);
            setUyari('Başarılı ' + new Date());
            alert('Başarılı ' + new Date());
            })
            .catch(function (error) {
            console.log(error);
            setUyari(error);
            alert(error);
            });
    }
    
    return (
        <div className="container">
            <h1 className='text-center'>Home Page</h1>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2>Create New Folder</h2>
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">NAME</span>
                        <input onChange={(e)=>titleHandler(e.target.value)} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        <button onClick={()=>addTitle()} className='btn btn-primary'>Add</button>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <i>{uyari}</i>
                </div>
            </div>
            <br/>
            <div className='row'>
                {
                    folders != null ?
                        folders.map((folder) => (
                            <div className='col-3 mb-3'>
                                <div style={{ height: 100, backgroundColor: '#44ff88', textAlign: 'center', borderRadius: 15, lineHeight: '100px' }}>
                                    <Link style={{ color: '#000000', textDecoration: 'none', fontSize: '32pt' }} key={folder.folderId} to={"folders/" + folder.folderId}>
                                        {folder.folderName}
                                    </Link>
                                </div>

                            </div>
                        )) : <div>No Data</div>
                }


            </div>
        </div>
    )

}

export default Home