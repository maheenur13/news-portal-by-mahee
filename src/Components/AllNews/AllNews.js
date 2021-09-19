import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect,useContext } from 'react';
import { useState } from 'react';
import CategoryBar from '../CategoryBar/CategoryBar';
import SingleNews from './SingleNews';
import {userContext} from '../../App';
import './AllNews.css';
import SideBar from '../SideBar/SideBar';
import TopNews from '../TopNews/TopNews';
import ContactForm from '../ContactForm/ContactForm';
const AllNews = () => {
//    const {allNewsCollection}= useContext(userContext);
  
    // const {categoryValue}=useContext(userContext);
    // const [category, setCategory]= categoryValue;


    const {categoryValue,allNewsCollection}=useContext(userContext);
    const [category, setCategory] = categoryValue;
    const [newAllNews,setNewAllNews] = allNewsCollection;
    // const [newAllNews,setNewAllNews] = useState([])

    useEffect(()=>{
        const url ='http://localhost:5000/allNews';
        fetch(url)
        .then(response =>response.json())
        .then(data => {
            setNewAllNews(data)
        });
    },[setNewAllNews])

   
    return (
        <div className="container m-auto">
            
            <div className="border text-center my-6">
                <CategoryBar></CategoryBar>
            </div>
            <p className="ml-5 mb-5">Category : {category}</p>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="px-5  md:col-span-3">
                <h2 style={{borderBottom: '1px solid'}} className="m-auto font-bold text-center pt-5 pb-2 px-2 mb-3">All News</h2>
                    {
                        newAllNews.length===0?(
                        <div style={{height:'300px'}}  className="flex flex-col justify-center items-center">
                              
                              <CircularProgress className="mb-3" />
                              <h3 className="spinner-text">Data Is Laoding Please Wait</h3>
                              
                        </div>):
                        
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            newAllNews.map(singleNews => {
                                const data = singleNews.allNewsData[0]
                                // console.log('hackeddddddddddddddddd',singleNews);
                                return (
                                    <div className="mx-auto lg:col-span-2 xl:col-span-1">
                                    <SingleNews props={data}/>
        
                                    </div>
                                )
                            })
                        }
                    </div>}

                    <ContactForm></ContactForm>
                </div>
                <div className="md:col-span-1 px-3">
                <h2 style={{ borderBottom: '1px solid' }} className="font-bold text-center pt-5 pb-2 px-4 mb-3 ">Top News</h2>
                    <TopNews></TopNews>
                </div>
            </div>
        </div>
    );
};

export default AllNews;