function EducationPage() {
    return (
        <>
            <div className=" p-5 text-white" style={{backgroundColor: "#439A97", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                <h2 style={{marginBottom: "20px"}}>Education</h2>
                <div className="education-1">
                    <span style={{fontSize: "20px", fontWeight: "bold"}}> 
                        <img src="./img/logo_69.png" alt="" style={{width: "70px", height: "70px", borderRadius: '10px', marginRight: "10px", marginBottom: "10px" }} /> 
                        SMKN 69 JAKARTA
                     </span>
                    <p style={{fontSize: "15px"}}>Jurusan ini gabungan dari Rekayasa Perangkat Lunak (RPL) dan Teknik Komputer Jaringan (TKJ). Jurusan SIJA merupakan jurusan yang lengkap dan menarik, jurusan ini sangat mendukung perkembangan Teknologi, dan perkembangan Industri 4.0 yang akan menuju 5.0. Pembelajaran jurusan SIJA di SMK berlangsung selama 4 tahun yang terbagi menjadi dua 2 model belajar, yaitu belajar di sekolah selama 3 tahun dan belajar di industri selama 1 tahun. Dengan program study 4 tahun ini, lulusan SIJA bisa setara dengan D1.</p>
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
    )
}

export default EducationPage;