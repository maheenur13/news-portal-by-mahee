import { Grid } from '@material-ui/core';
import React, { useEffect,useContext } from 'react';
import { useState } from 'react';
import CategoryBar from '../CategoryBar/CategoryBar';
import SingleNews from './SingleNews';
import {userContext} from '../../App';
const AllNews = () => {
    const [allNews, setAllNews] = useState([])
    const [category,setCategory]=useContext(userContext);
    const [newAllNews,setNewAllNews] = useState([])

    useEffect(()=>{
        const url ='http://localhost:5000/allNews';
        fetch(url)
        .then(response =>response.json())
        .then(data => {
            setNewAllNews(data)
            console.log('congo from backend',data)});
    },[])
    console.log('congo from backend',newAllNews);
    useEffect(() => {
        const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=deaf26d1126640398a2d516f52214b08`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllNews(data?.articles))
    }, [category])
    return (
        <div className="container m-auto">
            <h1 className="text-center text-2xl my-5">All News</h1>
            <div className="border text-center my-6">
                <CategoryBar></CategoryBar>
            </div>
            <p className="ml-5 mb-5">Category : {category}</p>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="border md:col-span-3">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            newAllNews.map(singleNews => {
                                return (
                                    <div className="mx-auto lg:col-span-2 xl:col-span-1">
                                    <SingleNews props={singleNews} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="border  md:col-span-1">
                    <h1 style={{fontSize:'3rem'}}>sidebar</h1>
                </div>
            </div>
        </div>
    );
};

export default AllNews;