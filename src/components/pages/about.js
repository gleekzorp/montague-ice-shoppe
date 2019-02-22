import React from 'react';
import image from '../../../static/assets/images/galen-profile.jpg';

export default function(){
    return(
        <div className="about-page">
          {/* <Header/> */}
            <div className="about-module">
                <div className="video-div">
                <iframe height="90%" width="450px" src="https://www.youtube.com/embed/uzjB52_gGgk?autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="video-text">
                    <h1>Here is a video about how we make our ice cream</h1>
                </div>
            </div>
            <hr/>
            <div className="about-module">
                <div className="about-text">
                    <div className="head1">
                        <h1 className="about-header">Here is the history of our store</h1>
                    </div>
                    <div id="store-text">
                        <p>Summer, next time we're hiding in a chlorkian echo nest, can you do me a favour and turn your ringer off?! I just killed my family! <br/>
                            
                        I don’t care who they were! They're robots Morty! It's okay to shoot them! They're just robots! Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie. <br/>

                        Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?
                        </p>
                    </div>
                </div>
                <div className="company-picture">
                <img src={image} alt="THE PICTURE OF GALEN SHOULD BE HERE"/>
                </div>
            </div>
            <hr/>
            <div className="about-module">
                <div className="ice-cream-picture">
                <img src="https://images.unsplash.com/photo-1532947016889-3b7ab9cd0a13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1535&q=80" alt="/"/>
                </div>
                <div className="about-text">
                    <div className="head2">
                        <h1 className="about-header">Here is a brief history of ice cream</h1>
                    </div>
                    <p id="history-text">Summer, next time we're hiding in a chlorkian echo nest, can you do me a favour and turn your ringer off?! I just killed my family! <br/>
                        
                    I don’t care who they were! They're robots Morty! It's okay to shoot them! They're just robots! Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie. <br/>

                    Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
                    </p>
                </div>
            </div>

            {/* //<Footer/> */}
        </div>


    )
}
