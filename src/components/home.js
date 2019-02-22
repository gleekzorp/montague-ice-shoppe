import React from 'react'

function Home() {
    return (
        <div className="homeWrapper">
            <div className="homeVideoWrapper">
                <video id="background-video" width="1000" loop autoPlay>
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Honey.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="homeContent">
                <h1>Welcome to our page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem, ab praesentium odio sint, consequatur id nisi nostrum asperiores similique dolor placeat. Voluptatem alias error recusandae dignissimos quas asperiores ipsa!</p>
            </div>
        </div>
    )
}

export default Home