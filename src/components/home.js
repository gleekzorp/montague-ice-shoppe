import React from 'react'

// import video from "../../static/assets/videos/HowToMakeIceCreamAtHome.mpg"

function Home() {
    return (
        <div className="homeWrapper">
            <video id="background-video" width="100%" loop autoPlay>
                <source src="https://ak2.picdn.net/shutterstock/videos/28418152/preview/stock-footage-corn-with-an-ice-cream-and-a-liquid-chocolate-topping-pouring-on-it.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="homeContent">
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem, ab praesentium odio sint, consequatur id nisi nostrum asperiores similique dolor placeat. Voluptatem alias error recusandae dignissimos quas asperiores ipsa!</p>
            </div>
        </div>
    )
}

export default Home