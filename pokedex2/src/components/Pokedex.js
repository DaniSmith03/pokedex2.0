import react from "react";
import {Paper, Container, Typography} from '@mui/material'
import Image from '../pokeBackground2.png'
import { Box, color, flexbox, maxHeight, sizing } from "@mui/system";




const styles = {
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
        height:'80vh',
        flexGrow:1,
        margin:5,
  },
    pokemonBox:{
        border: "2px solid pink",
        height:'80vh',
        width:'40%',
        margin:5,
    }
};







const Pokedex=()=>{
    return(
        <Container style={styles.siteContainer}>
        <Box style={styles.dexContainer}>
            <Box style={styles.dexBox}>
                <Typography>Hi From box1</Typography>
            </Box>
            <Box style={styles.pokemonBox}>
                <Typography>Hi From box2</Typography>
            </Box>
        </Box>
        </Container>
    )
}


export default Pokedex;