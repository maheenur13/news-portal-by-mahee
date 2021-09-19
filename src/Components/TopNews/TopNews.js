import { CircularProgress } from '@material-ui/core';
import React, { useContext } from 'react';
import { userContext } from '../../App';
import SingleNews from '../AllNews/SingleNews';
import './TopNews.css';

const TopNews = () => {
    const { categoryValue, allNewsCollection } = useContext(userContext);
    // const [category, setCategory] = categoryValue;
    const [newAllNews, setNewAllNews] = allNewsCollection;
    // console.log('top news',newAllNews);
    const topNewsCollection = newAllNews.filter(allNews => allNews.allNewsData[0].isTopNews === true)
    console.log('top news collection', topNewsCollection)
    return (
        <>
            {newAllNews.length ? <div className="flex flex-col items-center">
                
                <div className="sidebar px-5">
                    {
                        topNewsCollection.map(topNews => {
                            return (

                                <SingleNews props={topNews.allNewsData[0]} />

                            )
                        })
                    }
                </div>
            </div> :

                <div style={{ height: '300px' }} className="flex flex-col justify-center items-center">

                    <CircularProgress className="mb-3" />
                    <h4 className="spinner-text text-center">Data Is Laoding Please Wait</h4>

                </div>
            }
        </>
    );
};

export default TopNews;