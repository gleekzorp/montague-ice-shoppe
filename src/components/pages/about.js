import React from 'react';
import image from '../../../static/assets/images/galen-profile.jpg';

export default function(){
    return(
        <div className="about-page">
          {/* <Header/> */}
            <div className="about-module">
                <div className="video-div">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uzjB52_gGgk?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="video-text">
                    <h1>Here is a video about how we make our ice cream</h1>
                </div>
            </div>
            <hr/>
            <div className="about-module">
                <div className="about-text">
                    <h1>Here is the history of our store</h1>
                    <p>Summer, next time we're hiding in a chlorkian echo nest, can you do me a favour and turn your ringer off?! I just killed my family! 
                        
                    I don’t care who they were! They're robots Morty! It's okay to shoot them! They're just robots! Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie.
                    </p>
                </div>
                <div className="company-picture">
                <img src={image} alt="THE PICTURE OF GALEN SHOULD BE HERE"/>
                </div>
            </div>
            <hr/>
            <div className="about-module">
                <div className="company-picture">
                <img src="https://images.unsplash.com/photo-1532947016889-3b7ab9cd0a13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1535&q=80" alt=""/>
                </div>
                <div className="about-text">
                    <h1>Here is a brief history of ice cream</h1>
                    <p>Summer, next time we're hiding in a chlorkian echo nest, can you do me a favour and turn your ringer off?! I just killed my family! 
                        
                    I don’t care who they were! They're robots Morty! It's okay to shoot them! They're just robots! Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie.
                    </p>
                </div>
            </div>

            {/* //<Footer/> */}
        </div>


    )
}
