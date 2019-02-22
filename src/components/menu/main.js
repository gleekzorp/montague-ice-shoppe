import React, {Component} from 'react';
import ItemMenuPage from './item';
export default class MainMenuPage extends Component {
    render() {
        return (
            <div>
                <div className = "flavorContainer">
                    
                    <ItemMenuPage
                    arg="https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18152000/fc71do070-02-main.jpg"
                    flavor = "Vanilla"
                    content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste blanditiis quod maxime perspiciatis sint rem sapiente"
                    />
                </div>
        
                <div className = "premiumFlavorContainer">
                    
                    <ItemMenuPage
                    arg="http://www.chewoutloud.com/wp-content/uploads/2013/08/Cookies-n-Cream-Ice-Cream-2.jpg"
                    flavor = "Cookies and Cream"
                    content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste blanditiis quod maxime perspiciatis sint rem sapiente"
                    />
                
                </div>
                <div className = "toppingsContainer">
                    
                    <ItemMenuPage
                    arg="http://1.bp.blogspot.com/-IfdvHxgO3ws/TkzGzN65WKI/AAAAAAAAAIg/Xe2AxfQmO5k/s1600/File1874_H-50+Wall+Display+-+Frutti+Froyo+Philippines3.jpg"
                    flavor = ""
                    content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste blanditiis quod maxime perspiciatis sint rem sapiente"
                    />
                </div>
                <div className = "sizeContainer">
                    
                    <ItemMenuPage
                    arg="https://images.esellerpro.com/3511/I/673/942/White%20Ice%20Cream%20Containers.jpg"
                    flavor = ""
                    content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste blanditiis quod maxime perspiciatis sint rem sapiente"
                    />
                
                </div>
                <div className = "pricesContainer">
                
                    <ItemMenuPage
                    arg=""
                    flavor = ""
                    content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste blanditiis quod maxime perspiciatis sint rem sapiente"
                    />
                </div>
            
            </div>
        )
    }
}