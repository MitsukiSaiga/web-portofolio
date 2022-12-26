function HomePage() {
    return (
        <>
            <div className=" p-5 text-white" style={{backgroundColor: "#439A97"}}>
                <div className="row">
                    <div className="col-sm-6">
                    <h3> <span style={{fontWeight: "bold", fontSize: "30px"}}>Hi! I Am</span>   <button className="btn" style={{fontWeight: "bold", color: "white", borderRadius: "10px", backgroundColor: "#277BC0", fontSize: "25px"}}>Software Engineer</button> </h3>
                    <h3 className="mt-w" style={{fontWeight: "bold", fontSize: "50px"}}>Ilham Saputra</h3>
                    <p style={{marginTop: "30px", fontSize: "20px"}}>Software Engineer for over <b>3 years</b> as a Web and Mobile Developer</p>
                    <div className="content mt-3 mb-5">
                        <button className="btn text-white" style={{backgroundColor: "#FF6E31", fontSize: "19px"}}>Hire Me</button>
                        <button className="btn text-white" style={{fontSize: "19px"}}>Projects <i className="bi bi-arrow-up-right-circle"></i></button>
                    </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="box container" style={{backgroundColor: "red", borderRadius: "50%", width: "200px", height: "200px"}}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;