import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navabar";
import { news } from "../../Datas";

export default function Home(){
    return (
        <>
            <Navbar/>
            {news.map((item, index) => {
                return <Card key={index} news={item}/>
            })}  
        </>
    )
}