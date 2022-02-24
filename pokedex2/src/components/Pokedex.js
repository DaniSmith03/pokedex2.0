import React, {useState, useEffect} from "react";
import {Container, Typography, Grid, Card, CardContent, CardMedia, CircularProgress, ThemeProvider,AppBar, Toolbar,TextField, Button} from '@mui/material'
import { useStyles } from "./Style";
import {makeStyles,} from '@mui/styles'
import Image from '../pokeBackground2.png'
import pokeLogo from '../pokeLogo.png'
import { Box } from "@mui/system";
import mockData from "./mockData";
import axios from "axios";



const Pokedex=()=>{
    const classes = useStyles();
    const [pokeData, SetPokeData]=useState({});
    const [newData, SetNewData]=useState({});
    const [filter, setFilter]=useState("");
    // const [type, setType]=useState(new Array(types.length).fill(false));



// -------Function to get pokedex data from the Poke API------------


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=3`)
        .then(function(response){
            const {data} = response;
            const {results}=data;
            // console.log({data})
            const pokeObj={};
          results.forEach((pokemon,index)=>{
              pokeObj[index +1]={
                  id: index+1,
                  name: pokemon.name,
                  sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`

              };
          });
          // console.log("this is the",pokeObj[2])
          SetPokeData(pokeObj) 
        })


          
        







    },[])











// Work In Progress!!!!!!! iterates through all pokemon in pokeobj to grab their values 
// useEffect(()=>{
//   const newPokeObj={};
//     Object.keys(pokeData).map((pokemonId) =>{
//       // console.log('id is', pokemonId)
//       const fetchData = async () => {
        
     



//      await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//       .then(function(response){
//         const {data} = response;
//         newPokeObj[data.order]={
//           id: data.order,
//           name:data.name,
//           sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.order}.png`,
//         }
//         console.log('sorry',{newPokeObj})

//     })
//     SetNewData(newPokeObj)
//   }
//   fetchData();
//   })

// }, []);

console.log("hopefully",newData)


  console.log(Object.keys(pokeData))
console.log('function is over')

// Work In Progress!!!!!!!
  

// ---------------Function to Set checkbox Filters--------------------



// -------------------Get Pokemon Details---------------


const tryThis=newData;

console.log('welp',tryThis)


// ------Search Bar filter----------------------------

    const handleSearch=(event)=>{
        setFilter(lowerFirst(event.target.value))
    }


//--------Change Casing Functions---------------------
    const capitalizeFirst = (name) => name.charAt(0).toUpperCase() + name.slice(1);
    const lowerFirst = (name) => name.charAt(0).toLowerCase() + name.slice(1);



// -------Function to Store Pokedex data inside cards ------------


    const getCard=(pokemonId)=>{
        console.log("from get card",pokeData[`${pokemonId}`])
        const {id, name, sprite}=pokeData[pokemonId]
        return(
            <Grid item xs={6} sm={3} md={3} lg={2} xl={2} key={pokemonId} className={classes.grid}>
                <Box maxWidth={150} className={classes.cardBox}>
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

{/* -----------------Logo And Menu Bar---------------------- */}

            <Container>
            <img className={classes.logoContainer} style={{ width: "500px", height: "300px", margin: "auto" }} src={pokeLogo} alt="Logo" />
            </Container>
            

        <Container className={classes.siteContainer}>
        <AppBar position='static'className={classes.appBar} style={{ background: '#2E3B55' }}>
                <Toolbar className={classes.toolBarClass}>

                <TextField id="outlined-basic" label="Search Pokemon" variant="outlined" onChange={handleSearch}/>

{/* ---------------Function to Set checkbox Filters--------------------  */}
<Box className={classes.filterContainer}>
<Typography style={{ textAlign:'center' }}>Filter By Type</Typography>
<Box width='500px'height='60px'className={classes.formBox}>
<Box width='350px' height='55px' className={classes.form}>
<form>
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Normal"
        />
        Normal
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Fighting"
        />
        Fighting
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Flying"
        />
        Flying
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Poison"
        />
        Poison
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Ground"
        />
        Ground
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Rock"
        />
        Rock
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Bug"
        />
        Bug
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Ghost"
        />
        Ghost
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Steel"
        />
        Steel
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Fire"
        />
        Fire
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Water"
        />
        Water
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Grass"
        />
        Grass
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Electric"
        />
        Electric
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Ground"
        />
        Psychic
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Ice"
        />
        Ice
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Dragon"
        />
        Dragon
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Dark"
        />
        Dark
        <input
          type="checkbox"
          id="type"
          name="type"
          value="Fairy"
        />
        Fairy
</form> 
</Box>
<Button>Apply</Button>
<Button>Clear</Button>

</Box>
</Box>




                </Toolbar>
            </AppBar>


{/* -----------------------Pokedex Container--------------------- */}

        <Box minHeight='80vh' maxHeight='80vh'className={classes.dexContainer}>
            <Box className={classes.dexBox}>
                {pokeData ? (
                <Grid container spacing={2}>
                    {Object.keys(pokeData).map((pokemonId) => 
                    pokeData[pokemonId].name.includes(filter) &&
                    getCard(pokemonId))}
                    
                </Grid>) : <CircularProgress/>}
                
            </Box>

{/* -----------------------Pokemon Details Container--------------------- */}

            <Box maxHeight='80vh' className={classes.pokemonBox}>
                <Typography>Hi From Pokemon Data Box</Typography>
            </Box>
        </Box>
        </Container>
        </React.Fragment>
    )
}


export default Pokedex;