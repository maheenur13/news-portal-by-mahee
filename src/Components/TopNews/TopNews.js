import React, { useContext } from 'react';
import { userContext } from '../../App';
import SingleNews from '../AllNews/SingleNews';

const TopNews = () => {
    const {categoryValue,allNewsCollection}=useContext(userContext);
    // const [category, setCategory] = categoryValue;
    const [newAllNews,setNewAllNews] = allNewsCollection;
    // console.log('top news',newAllNews);
    const topNewsCollection =  newAllNews.filter(allNews =>allNews.allNewsData[0].isTopNews===true)
    console.log('top news collection',topNewsCollection)
    return (
        <div className="flex flex-col items-center">
            <h2 className="font-bold pl-5 pt-5">Top News</h2>
            {
               topNewsCollection.map(topNews => {
                   return(
                       <SingleNews props={topNews.allNewsData[0]}/>
                   )
               })
            }
        </div>
    );
};

export default TopNews;