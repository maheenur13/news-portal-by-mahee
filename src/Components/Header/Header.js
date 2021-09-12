import React from 'react';
import NavBar from './NavBar/NavBar';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@material-ui/core'
import { Grid } from '@material-ui/core';



var items = [
    {
        name: "You Can Find All the Business New Here",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
       
    },
    {
        name: "Find All the Tech New Here",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
       
    },
    {
        name: "Find All the Latest New Here",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
       
    },
]
function Item(props)
{
    return (
        <Paper
        style={{minHeight:'400px',display:'flex'}} className="  text-center p-5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-500" >
            <div className="container m-auto border p-5">
            <h1 className="my-3 text-3xl text-white text-opacity-50">{props.item.name}</h1>
            <p className="text-justify my-5">{props.item.description}</p>

            <Button variant="contained" color="secondary" className="m-5">
                Check it out!
            </Button>
            </div>
        </Paper>
    )
}
const Header = () => {
    return (
        <div>
            
            <Carousel className="">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
    );
};

export default Header;