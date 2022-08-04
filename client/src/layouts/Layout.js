import React from 'react';
import './styles/Layout.css'

const Layout = ({ children }) => {
    console.log("dirname", __dirname);

    return (
        <div className='Layout'>
            <div className="layout-title">
                <h1>--Chatty--</h1>
            </div>
            <div className="layout-author">
                <img src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/273140864_3124650677818973_1811547904194770955_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=liUBPnNYCaMAX-LHS_P&_nc_ht=scontent.fsgn8-3.fna&oh=00_AT8qaco_nnakPy4HS4pSZ0-3AGXRBCekRu39bdRlcvyvZQ&oe=62F08F75" alt="ava"/>
                <i>
                    Develop by Keien
                </i>
            </div>
            <div className="layout-content">
                {children}
            </div>
        </div>
    )
}

export default Layout