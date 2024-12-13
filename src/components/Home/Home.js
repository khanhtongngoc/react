import videoHomepage from '../../assets/video-hompage.mp4';
const HomePage = (props) => {
    return (
        <div className='container'>
            <div className="homepage-container">
                {/* {loop autoplay playsinline="" x-webkit-airplay="deny" muted} */}
                <div>
                    <video autoPlay loop muted>
                        <source
                            src={videoHomepage}
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className='homepage-content'>
                    <div>

                        <h1 className='title-1'>Get to know your customers with forms worth filling out</h1>

                    </div>
                    <div>
                        <p className='title-2'>Collect all the data you need to understand customers with forms designed to be refreshingly different.</p>
                    </div>
                    <div>
                        <button className='title-3'>Get started-it's free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;