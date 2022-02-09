import React, {useState} from "react";
import {Container, Typography, Grid, Card, CardContent, CardMedia, CircularProgress} from '@mui/material'
import {makeStyles} from '@mui/styles'
import Image from '../pokeBackground2.png'
import { Box } from "@mui/system";
import mockData from "./mockData";




const useStyles = makeStyles({
    siteContainer: {
        marginTop:'5%',
        marginBottom:'5%',
        padding:'5%',
        backgroundImage: `url(${Image})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
        
    },
    dexContainer:{
        padding:'2%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',

    },
    dexBox:{
        border: "2px solid black",
        padding:30,
        maxHeight:'80vh',
        overflow: 'auto',
        width:'70%',
        flexGrow:1,
        margin:5,
  },
    pokemonBox:{
        border: "2px solid pink",
        height:'80vh',
        width:'30%',
        margin:5,
    },
    
    cardMedia:{
        margin:'auto'
        

    },
    pokeName:{
        textAlign: 'center',
        
        
    },
    cardBox:{
        height:'350',
        width:'350',
        position:'fixed',
        backgroundColor:'pink',
        textAlign: 'center',
        
        
        
    },
    card:{
        height:120,
        width:120,
    }
});




const Pokedex=()=>{
    const classes = useStyles();
    const [pokeData, SetPokeData]=useState(mockData)
    const capitalizeFirst = (name) => name.charAt(0).toUpperCase() + name.slice(1);


    const getCard=(pokemonId)=>{
        console.log(pokeData[`${pokemonId}`])
        const {id, name}=pokeData[`${pokemonId}`]
        console.log(id)
        const sprite=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return(
            <Grid item xs={6} sm={3} md={3} lg={2} xl={2} key={pokemonId}>
                <Box className={classes.cardBox}>
                <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={sprite}
                style={{width:'100px', height:'100px'}}/>
                {/* <CardContent className={classes.cardMedia}>{name}</CardContent> */}
                </Card>
                <Typography className={classes.pokeName}>{`${capitalizeFirst(name)}`}</Typography>
                </Box>
            </Grid>
    
    
        )
    }




    return(
        <React.Fragment>
        <Container className={classes.siteContainer}>
        <Box className={classes.dexContainer}>
            <Box className={classes.dexBox}>
                {pokeData ? (
                <Grid container spacing={2}>
                    {Object.keys(pokeData).map((pokemonId) => getCard(pokemonId))}
                    
                </Grid>) : <CircularProgress/>}
                
            </Box>



            <Box className={classes.pokemonBox}>
                <Typography>Hi From Pokemon Data Box</Typography>
            </Box>
        </Box>
        </Container>
        </React.Fragment>
    )
}


export default Pokedex;