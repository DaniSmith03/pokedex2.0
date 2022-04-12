import React, {useState, useEffect} from "react";
import {makeStyles,} from '@mui/styles'
import Image from '../pokeBackground2.png'



export const useStyles = makeStyles({
    siteContainer: {
        marginTop:'5%',
        marginBottom:'5%',
        padding:'5%',
        backgroundImage: `url(${Image})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
        
    },
    logoContainer:{
        positon:'fixed',
        top:0,
        display: 'block',
        paddingBottom: '20px',
    },
    appBar:{
        height:100,
        padding:8,
        alignItems:'center',
        justifyContent:'space-between'

    },
    filterContainer:{
        Border:"2px solid black",
        // backgroundColor:'red',
        paddingLeft:10,
        margin:5

    },
   
    formBox:{
        // Border:"2px solid black",
        // display:'flex',
        overflow:'auto',
        marginLeft:20,

    },
    dexContainer:{
        padding:'2%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',

    },
    dexBox:{
        border: "5px solid black",
        padding:30,
        // maxHeight:'80vh',
        overflow: 'auto',
        width:'70%',
        flexGrow:1,
        margin:5,
  },
    pokemonBox:{
        backgroundColor:'rgba(255,255,255, 0.5 )',
        
        border: "5px solid Black",
        // height:'80vh',
        width:'50%',
        margin:5,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    
    },
    pokeImg:{
        margin:10,
        display:'flex',
        justifyContent:'space-evenly'

    },
    pokeInfo:{
        
        margin:10,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        fontSize:'15px',
    },
    pokeText:{
        htmlfontSize:'15rem',

    },
    grid:{
        // marginBottom:30,

    },
    
    cardMedia:{
        margin:'auto'
        

    },
    pokeName:{
        textAlign: 'center',
        fontFamily:[ 'Nanum Gothic', 'sans-serif']
        
        
    },
    cardBox:{
        height:'350',
        textAlign: 'center',
        
        
        
    },
    card:{
        height:120,
        width:120,
    }
});

