import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllPosts } from "../../services/postservices";
import { HomeBody } from "./HomeStyled";
import { useEffect, useState } from "react";

export default function Home(){

    let [news, setNews] = useState([]);

    async function findAllPosts(){
        
        const response = await getAllPosts();
        setNews (response.data.results);
    }
    useEffect(()=> {
        findAllPosts();
    }, []);

    return (
        <>
            <Navbar/>
            <HomeBody>
                {news.map((item) => (
                    <Card 
                        key={item.id} 
                        title={item.title}
                        text={item.text}
                        banner={item.banner}
                        likes={item.likes}
                        comments={item.comments}
                    />
                ))}  
            </HomeBody>
            
        </>
    )
}