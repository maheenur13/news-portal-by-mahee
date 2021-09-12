import React, { useState, } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './AddNews.css';
import convertToBase64 from '../Base64/Base64';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
    input: {
        display: 'none',
    },
    formControl: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        minWidth: "100%",
        color:'white'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const categoryArray =[
    'sports',
    'international',
    'programming',
    'covid-19',
    'techChrunch'
]


const AddNews = () => {
 const history = useHistory();
    const [info, setInfo] = useState({
        category:'',
        allNewsData:[
            {
                title:'',
                description:'',
                isTopNews:false,
                author:'',
                imageFile:'',

            }
        ],
        
    })

    const [age, setAge] = React.useState('');

    
    const  handleSubmit = async e => {
        e.preventDefault();
       console.log(info);
        fetch('http://localhost:5000/addNews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(response => response.json())
            .then(results => {
                
                console.log('mahee',results)
            //    setInfo('')
            })
            .catch(error => {
                console.error(error)
            })
    };

    const handleBlur = (e) => {
        console.log(e.target.value)
        const newInfo = { ...info };
        newInfo.allNewsData[0][e.target.name] = e.target.value;
        console.log('jahiiiiiiiiiid',newInfo);
        setInfo(newInfo);
    }
    const handleImageChange = async (e) => {
        console.log(e.target.files[0]);
        const imageFile = e.target.files[0];
        const file =  await convertToBase64(imageFile);
        const image= {...info};
        image.allNewsData[0]['imageFile']= file;
        setInfo(image);
        // console.log('from imageee',info)

        // info.imageFile.imageFIle = file;
    }
    const handleCategoryChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value);
        info['category'] = event.target.value;
    }
    const [topNews, setTopNews] = useState({
        isTopNews: false,
      });
    
      const handleSwitchChange = (event) => {
        setTopNews({ ...topNews, [event.target.name]: event.target.checked });
        const isTopNews = {...info};
        info.allNewsData[0][event.target.name] = event.target.checked;
        setInfo(isTopNews);
        console.log('anonna',info);
        
      };
      console.log('topNews',topNews)
    // console.log(watch("example"));
    const classes = useStyles();
    return (
        <div className="container mx-auto my-6">
            <form className="form" onSubmit={handleSubmit}>


                <input onBlur={handleBlur} className="form-input" placeholder="Enter News Title" name="title" required/>
                {/* {errors.title && <span className="text-red-400 pb-3">This field is required</span>} */}


                <textarea onBlur={handleBlur} className="form-input" placeholder="Enter News Description" name="description" required/>
                {/* {errors.description && <span className="text-red-400 pb-3">This field is required</span>} */}



                <input onBlur={handleBlur} className="form-input" placeholder="Type author Name" name="author" required/>
                {/* {errors.author && <span className="text-red-400 pb-3">This field is required</span>} */}
                <FormControl  variant="filled"  className={classes.formControl} >
                    <InputLabel id="demo-simple-select-filled-labe">Choose Category</InputLabel>

                    <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleCategoryChange}
          required
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            {categoryArray.map((category,i )=>{
                            return(
                            <MenuItem  value={category}  >{category}</MenuItem>
                            )
                        })}
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem >Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
                    {/* <Select
                        
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        // value={age}
                        onChange={handleCategoryChange}
                        label="age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        
                        {categoryArray.map((category,i )=>{
                            return(
                            <MenuItem key={i}>{category}</MenuItem>
                            )
                        })}
                        
                    </Select> */}
                </FormControl>
                
                <FormControlLabel
                label="Top News"
        control={
          <Switch
            checked={topNews.isTopNews}
            onChange={handleSwitchChange}
            name="isTopNews"
            color="primary"
            
          />
        }
        
      />
                <div className={`border text-center ${classes.root}`}>

                    <input onChange={handleImageChange} accept="image/*" className={classes.input} id="icon-button-file" name="urlToImage" type="file" required/>
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" className="border" aria-label="upload picture" component="span">
                            <p className="mr-3">Upload The Image</p>
                            <PhotoCamera className="mt-2 ml-4" />
                        </IconButton>
                    </label>

                </div>
                {/* {errors.image && <span className="text-red-400 pb-3">This field is required</span>} */}


                <input className="from-submit" type="submit" />
            </form>
        </div>
    );
};

export default AddNews;