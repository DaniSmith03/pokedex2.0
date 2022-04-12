import React, {useState, useEffect} from "react";
import {Container, Typography, Grid, Card, CardMedia, CircularProgress, ThemeProvider,AppBar, Toolbar,TextField} from '@mui/material'
import { getImageId } from "./Helpers";
import { useStyles } from "./Style";
import pokeLogo from '../pokeLogo.png'
import { Box } from "@mui/system";
import axios from "axios";



const Pokedex=()=>{
    const classes = useStyles();
    const [pokeData, SetPokeData]=useState({});
    const [pokeDetails, setPokeDetails]=useState(null);
    const [filter, setFilter]=useState("");
    const [typeFilter,setTypeFilter]=([]);
    const [isChecked, setIsChecked] = useState({normal:false, fighting:false,flying:false,poison:false,ground:false, rock:false,bug:false, ghost:false, steel:false, fire:false, water:false, grass:false, electric:false, physic:false, ice:false,dragon:false, dark:false,fairy:false, unknown:false, shadow:false});

// ----------------------Test 2----------


useEffect(()=>{
  const newObj={}
const getTheData = async()=>{
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
  const details= await Promise.all(response.data.results.map((pokemon)=>{
    
     return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    
}))
console.log(details)
      details.forEach((poke,index)=>{
//Set Pokemon Type Details to an array with the type details
        const nameType=poke.data.types.map((item)=>{
          const {type}=item
          const {name}=type
          return name
        })

        //Set Pokemon ability Details to an array with the ability details
        const nameAbility=poke.data.abilities.map((item)=>{
          const {ability}=item
          const {name}=ability
          return name
        })

        //Set Pokemon move Details to an array with the move details
        const nameMoves=poke.data.moves.map((item)=>{
          const {move}=item
          const {name}=move
          return name
        })


        //Set Pokemon base stat details to an array of objects each object being a key value pair of the status name and the matching value
        const statData=poke.data.stats.map((item)=>{
          const statsObj={}
          const {stat}=item
          const {name}=stat
          const statusName=String(name)
          const {base_stat}=item

            statsObj[statusName]=base_stat
            return statsObj  
          })


          const gameIntro=poke.data.game_indices.slice(0,3).map((item)=>{
            const{version}=item
            const{name}=version
            return name
          })





//Create Pokemon Object with all of the Pokemon Details. Deconstructed set that object to the state pokeData
        newObj[index+1]={
          id: [index+1],
          name:poke.data.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          types:nameType,
          height:poke.data.height,
          weight:poke.data.weight,
          abilities:nameAbility,
          moves:nameMoves,
          stats:statData,
          gen:gameIntro
        }
        return newObj;
      })
SetPokeData(newObj)
}
getTheData();
console.log("maybe the",newObj)

},[])


console.log("definitely",pokeData)




//--------------------Test 2------------

const renderDetails=(value)=>{
  
  console.log("Hi I am a detail")
  const detail=pokeData[value]
  const { name, id, height, weight, types, abilities,gen,moves} = detail
  const newId= getImageId(detail.id);
  const fullImageUrl = `https://www.serebii.net/swordshield/pokemon/${newId}.png`;
  const fullShinyUrl = `https://www.serebii.net/Shiny/SWSH/${newId}.png`;

  return (
    <React.Fragment>
    <Box maxHeight='80vh' className={classes.pokemonBox}>
    <Typography variant="h3">Pokemon Info</Typography>
            <Box className={classes.pokeImg}>
              <img style={{ width: "150px", height: "150px" }} src={fullImageUrl} alt="Standard Sprite" />
              <img style={{ width: "150px", height: "150px" }} src={fullShinyUrl} alt="Shiny Sprite"/>
            </Box>
            <Box className={classes.pokeInfo}>
              <Typography fontSize="20px" component={'div'}> Name: {capitalizeFirst(name)}</Typography>
              <Typography fontSize="20px"> Id: {id}</Typography>
              <Typography fontSize="20px">Height: {height} </Typography>
              <Typography fontSize="20px">Weight: {weight} </Typography>
              <Typography fontSize="20px">Types: {capitalizeFirst(types.join(', '))}</Typography>
              <Typography fontSize="20px">Abilities: {capitalizeFirst(abilities.join(', '))}</Typography>
            </Box>
                
    </Box>
    </React.Fragment>
  );

}



// -------------------Get Pokemon Details---------------




// ------Search Bar filter----------------------------
    const handleSearch=(event)=>{
        setFilter(lowerFirst(event.target.value))
    }

    const handleCheck=(event)=>{
      const typeObj={}
      const {value,checked}=event.target
      console.log(value, checked)
      isChecked[value]=checked
      // if (isChecked[value]===true){
      //   typeArr.push(value)
      // return typeArr
      // }
      console.log("value of", isChecked)

      Object.keys(isChecked).map((key)=>{
        if (isChecked[key]===true){
          typeObj[key]=true
        }
        console.log(typeObj)
        return typeObj
        
      })
      // setIsChecked(typeArr)
      console.log("Final Check",typeObj)

      setIsChecked(typeObj)
      

      
    }

    console.log("returning", isChecked)



  const evalTypes=(typeDataArr)=>{
    const checkedStat= Object.keys(isChecked)
    console.log(checkedStat)
    let match=false;
    if (checkedStat.length>=1){

    
    for(let i=0; i<checkedStat.length;i++){
      typeDataArr.map((item)=>{
        if(item===checkedStat[i]){
          console.log(item)
          console.log(checkedStat[i])
          return match=true
        }
        
      })

    }}
    else{
      return match=true
    }
  
  

 console.log("well",typeDataArr,match)
 return match

  }

//  console.log(pokeData[1].types)
//  console.log("evaluate",evalTypes(pokeData[1].types))
    

  






//--------Change Casing Functions---------------------
    const capitalizeFirst = (name) => name.charAt(0).toUpperCase() + name.slice(1);
    const lowerFirst = (name) => name.charAt(0).toLowerCase() + name.slice(1);



// -------Function to Store Pokedex data inside cards ------------


    const getCard=(pokemonId)=>{
        // console.log("from get card",pokeData[`${pokemonId}`])
        const {types, name, sprite}=pokeData[pokemonId]
        return(
            <Grid item xs={6} sm={3} md={3} lg={2} xl={2} key={pokemonId} className={classes.grid}>
                <Box maxWidth={150} className={classes.cardBox}>
                <Card className={classes.card} onClick={(()=>setPokeDetails(renderDetails(pokemonId)))}>
                <CardMedia className={classes.cardMedia} image={sprite}
                style={{width:'100px', height:'100px'}}/>
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




{/* 
// ---------------Function to Set checkbox Filters-------------------- */}

<Box className={classes.filterContainer}>
<Typography style={{ textAlign:'center' }}>Filter By Type</Typography>
<Box width='500px'height='60px'className={classes.formBox}>
{/* <Box width='350px' height='55px' className={classes.form}> */}
<div>
        <input
          type="checkbox"
          id="type"
          name="type"
          value="normal"
          onChange={handleCheck}
          
        />
        Normal
        <input
          type="checkbox"
          id="type"
          name="type"
          value="fighting"
          onChange={handleCheck}
        />
        Fighting
        <input
          type="checkbox"
          id="type"
          name="type"
          value="flying"
          onChange={handleCheck}
        />
        Flying
        <input
          type="checkbox"
          id="type"
          name="type"
          value="poison"
          onChange={handleCheck}
        />
        Poison
        <input
          type="checkbox"
          id="type"
          name="type"
          value="ground"
          onChange={handleCheck}
        />
        Ground
        <input
          type="checkbox"
          id="type"
          name="type"
          value="rock"
          onChange={handleCheck}
        />
        Rock
        <input
          type="checkbox"
          id="type"
          name="type"
          value="bug"
          onChange={handleCheck}
        />
        Bug
        <input
          type="checkbox"
          id="type"
          name="type"
          value="ghost"
          onChange={handleCheck}
        />
        Ghost
        <input
          type="checkbox"
          id="type"
          name="type"
          value="steel"
          onChange={handleCheck}
        />
        Steel
        <input
          type="checkbox"
          id="type"
          name="type"
          value="fire"
          onChange={handleCheck}
        />
        Fire
        <input
          type="checkbox"
          id="type"
          name="type"
          value="water"
          onChange={handleCheck}
        />
        Water
        <input
          type="checkbox"
          id="type"
          name="type"
          value="grass"
          onChange={handleCheck}
        />
        Grass
        <input
          type="checkbox"
          id="type"
          name="type"
          value="electric"
          onChange={handleCheck}
        />
        Electric
        <input
          type="checkbox"
          id="type"
          name="type"
          value="ground"
          onChange={handleCheck}
        />
        Psychic
        <input
          type="checkbox"
          id="type"
          name="type"
          value="ice"
          onChange={handleCheck}
        />
        Ice
        <input
          type="checkbox"
          id="type"
          name="type"
          value="dragon"
          onChange={handleCheck}
        />
        Dragon
        <input
          type="checkbox"
          id="type"
          name="type"
          value="dark"
          onChange={handleCheck}
        />
        Dark
        <input
          type="checkbox"
          id="type"
          name="type"
          value="fairy"
          onChange={handleCheck}
        />
        Fairy
        <input
          type="checkbox"
          id="type"
          name="type"
          value="unknown"
          onChange={handleCheck}
        />
        Unknown
        <input
          type="checkbox"
          id="type"
          name="type"
          value="shadow"
          onChange={handleCheck}
        />
        Shadow
</div> 
</Box>

{/* </Box> */}
</Box>


{/* ---------------Function to Set checkbox Filters--------------------  */}

                </Toolbar>
            </AppBar>


{/* -----------------------Pokedex Container--------------------- */}

        <Box minHeight='80vh' maxHeight='80vh'className={classes.dexContainer}>
            <Box className={classes.dexBox}>
                {pokeData ? (
                <Grid container spacing={2}>
                    {Object.keys(pokeData).map((pokemonId) => 
                    pokeData[pokemonId].name.includes(filter) && evalTypes(pokeData[pokemonId].types)===true  &&
                    getCard(pokemonId))}
                    
                </Grid>) : <CircularProgress/>}
                
            </Box>

{/* -----------------------Pokemon Details Container--------------------- */}
            
            {/* <Box maxHeight='80vh' className={classes.pokemonBox}> */}
                <React.Fragment>{pokeDetails}</React.Fragment>
            {/* </Box>
          */}

        </Box>
        </Container>
        </React.Fragment>
    )
}


export default Pokedex;