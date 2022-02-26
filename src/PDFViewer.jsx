import React, { Fragment, useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export const PDFViewer = (params) => {
    let { slug } = useParams();
    let { filename } = useParams();
    const [DataDokumen, setDataDokumen] = useState();
    const axios = require("axios");

    useEffect(() => {
        axios.get("http://adminmesuji.embuncode.com/api/dokumen/" + slug)
        .then(function (response) {
            setDataDokumen(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 mb-5">
                    {
                        DataDokumen && DataDokumen.map((item, index) => {
                            if (item.dokumen_file_name.replace(/\s/g, '') == filename.replace(/\s/g, '')) {
                                return (
                                    <Fragment>
                                        <iframe className='iframe-pdf' src={`data:application/pdf;base64,${item.dokumen_file_data}`} title="title">
                                            Presss me: <a href={`data:application/pdf;base64,${item.dokumen_file_data}`}>Download PDF</a>
                                        </iframe>
                                    </Fragment>
                                )
                            }
                            
                        })
                    }
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
};