import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { getItemCount } from "../utils";
import { styled, alpha } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../feature/categories-slice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "../firebase/Auth";
import { Menu } from "@mui/material";
async function logout() {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();
    await signOut();
    navigate("/login");
  }

function TablePage() {
    const [products, setProducts] = useState( [] );
    useEffect( () => {
        fetch( "https://fakestoreapi.com/products" )
            .then( res => res.json() )
            .then( data => { setProducts( data ); console.log( "now =", products ) } )
    }, [] )

    console.log( products );
    return ( <div id="wrapper">
            <div>
           <strong>Welcome Admin</strong>
           <button onClick={logout}>Logout</button>
           </div>
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid">
                    <h3 className="text-dark mb-4"></h3>
                    <div className="tab-content" id="tabs">
                        <div className="tab-pane active" id="users">
                            <div className="card shadow">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 fw-bold">Items Info</p>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                        <table className="table my-0" id="dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Item-Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                    <th>Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {products.map( ( el ) => {
                                                    return (
                                                        <tr>
                                                            <td><img className="rounded-circle me-2" width="30" height="30" src={el.image} />{el.title}</td>
                                                            <td>{el.description}</td>
                                                            <td>{el.price}</td>
                                                            <td>{el.rating.rate}</td>
                                                        </tr>

                                                    )
                                                } )

                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Copyright © E-commerce 2022</span></div>
                </div>
            </footer>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
    )
}

export default TablePage