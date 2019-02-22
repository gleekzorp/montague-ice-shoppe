import React, {Component} from 'react';
import ItemMenuPage from './item';


export default class MainMenuPage extends Component {
    render() {
        return (
            <div>
                <div className = "flavorContainer">
                    
                    <ItemMenuPage
                    arg="https://images.pexels.com/photos/209424/pexels-photo-209424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    flavor = "Vanilla"
                    content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste blanditiis quod maxime perspiciatis sint rem sapiente"
                    />
                </div>

        
                <div className = "premiumFlavorContainer">
                
                </div>

                <div className = "sizeContainer">

                </div>

                <div className = "toppingsContainer">

                </div>

                <div className = "pricesContainer">
                
                </div>
            
            </div>
        )
    }
}