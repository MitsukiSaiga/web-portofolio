function HomePage() {
    return (
        <>
            <div className=" p-5 text-white" style={{backgroundColor: "#439A97", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <h3> 
                            <span style={{fontWeight: "bold", fontSize: "30px"}}>Hi! I Am </span>  
                            <button className="btn" style={{fontWeight: "bold", color: "white", borderRadius: "10px", backgroundColor: "#277BC0", fontSize: "25px"}}>Software Engineer</button> 
                        </h3>

                        <h3 className="mt-w" style={{fontWeight: "bold", fontSize: "50px"}}>Ilham Saputra</h3>

                        <p style={{marginTop: "30px", fontSize: "20px"}}>
                            Software Engineer for over <b>3 years</b> as a Web and Mobile Developer
                        </p>

                    <div className="content mt-4 mb-5">
                        <a href="#">
                            <i className="bi bi-github" style={{fontSize: "25px", color: "#222222"}}></i>    
                        </a>
                        <a href="#">
                            <i className="bi bi-linkedin" style={{fontSize: "25px", color: "#F9F9F9", paddingLeft:"15px"}}></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-dribbble" style={{fontSize: "25px", color: "#FF597B", paddingLeft:"15px"}}></i>
                        </a>
                    </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
                        {/* <div className="box container" style={{backgroundColor: "red", borderRadius: "50%", width: "200px", height: "200px"}}></div> */}
                        <img src="./img/profile.png" alt="Profile" width="300px" height="300px" />
                    </div>
                </div>
                {/* <a href="/hello">
                    <div className="scrolldown mt-4" style={{color: "skyblue", margin: "auto"}}>
                        <div className="chevrons">
                            <div className="chevrondown"></div>
                            <div className="chevrondown"></div>
                        </div>
                    </div>
                </a> */}
            </div>
        </>
    );
}

export default HomePage;