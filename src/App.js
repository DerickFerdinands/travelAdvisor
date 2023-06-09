import React, {useEffect, useState} from "react";
import {Header} from "./components/Header/Header";
import {List} from "./components/List/List";
import {Map} from "./components/Map/Map";
import {CssBaseline, Grid} from "@material-ui/core";
import {getPlacesData} from "./api";

export const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
    const [bounds, setBounds] = useState({});
    const [childClicked,setChildClicked ]= useState()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);
    useEffect(() => {
        getPlacesData({sw: bounds.sw, ne: bounds.ne}).then((data) => {
            console.log({sw: bounds.sw, ne: bounds.ne});
            console.log(data);
            setPlaces(data);
        })
    }, [coordinates, bounds]);


    return <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places} childClicked={childClicked}/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={places}
                    setChildClicked={setChildClicked}
                />
            </Grid>
        </Grid>
    </>
}