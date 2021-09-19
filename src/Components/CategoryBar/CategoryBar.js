import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { userContext } from '../../App';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
const categoryList = [
    'sports',
    'business',
    'international',
    'techcrunch',
    'covid',
    'bangladesh',
    'football',
    'cricket'
]

const CategoryBar = () => {
    const { categoryValue } = useContext(userContext);
    const [category, setCategory] = categoryValue;

    const classes = useStyles();

    const [value, setValue] = React.useState(new Date());

    const formSubmit = (data) => {
        console.log(data.target.innerText)
        setCategory(data.target.innerText)
        console.log(category)
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Categories</InputLabel>
                <Select defaultValue="" id="grouped-select">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    {
                        categoryList.map((item, i) => {
                            return (
                                <MenuItem onClick={formSubmit} value={i}>{item}</MenuItem>
                            )
                        })
                    }

                    {/* <MenuItem value={2}>Option 2</MenuItem> */}

                </Select>
            </FormControl>
            <div className="my-4">
            <LocalizationProvider dateAdapter={DateAdapter} >
                <DesktopDatePicker
                    label="Choose Date"
                    value={value}
                    minDate={new Date('2017-01-01')}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            </div>
        </div>
    );
};

export default CategoryBar;