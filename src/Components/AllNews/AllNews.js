import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect,useContext } from 'react';
import { useState } from 'react';
import CategoryBar from '../CategoryBar/CategoryBar';
import SingleNews from './SingleNews';
import {userContext} from '../../App';
import './AllNews.css';
import SideBar from '../SideBar/SideBar';
import TopNews from '../TopNews/TopNews';
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

    // useEffect(() => {
    //     const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=deaf26d1126640398a2d516f52214b08`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setAllNews(data?.articles))
    // }, [category])
    return (
        <div className="container m-auto">
            <h1 className="text-center text-2xl my-5">All News</h1>
            <div className="border text-center my-6">
                <CategoryBar></CategoryBar>
            </div>
            <p className="ml-5 mb-5">Category : {category}</p>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="border md:col-span-3">
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
                </div>
                <div className="border  md:col-span-1">
                    <TopNews></TopNews>
                </div>
            </div>
        </div>
    );
};

export default AllNews;