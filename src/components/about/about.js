import React from 'react';
import image from '../../../static/assets/images/galen-profile.jpg';

export default function(){
    return(
        <div className="aboutPage">
                <div className="aboutHowVideoWrapper">
                    <div className="aboutHowVideoText">
                        <h1>How Do We Make It?</h1>
                    </div>
                    <div className="aboutHowVideo">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uzjB52_gGgk?autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

            <hr/>

            <div className="aboutInfoRightWrapper">
                <div className="aboutInfoRightText">
                    <h1>History of our store</h1>
                    <p>Summer, next time we're hiding in a chlorkian echo nest, can you do me a favour and turn your ringer off?! I just killed my family!  I don’t care who they were! They're robots Morty! It's okay to shoot them! They're just robots! Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie.  Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?</p>
                </div>
                <div className="aboutInfoRightImage">
                    <img src={image} alt="THE PICTURE OF GALEN SHOULD BE HERE"/>
                </div>
            </div>

            <hr/>

            <div className="aboutInfoLeftWrapper">
                <div className="aboutInfoLeftImage">
                    <img src="https://images.unsplash.com/photo-1457290317944-fe91fbf63e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="/"/>                    
                </div>
                <div className="aboutInfoLeftText">
                    <h1>History of ice cream</h1>
                    <p>Summer, next time we're hiding in a chlorkian echo nest, can you do me a favour and turn your ringer off?! I just killed my family!  I don’t care who they were! They're robots Morty! It's okay to shoot them! They're just robots! Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie.  Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?</p>
                </div>
            </div>
        </div>
    )
}