function HelloPage() {
    return (
        <>
            <div className=" p-5 text-white" style={{backgroundColor: "#439A97", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
                <h2 className="mb-4">Tentang Saya</h2>
               <p>Nama saya Ilham Saputra. Saya seorang siswa di SMKN 69 Jakarta. Saya pembelajar yang antusias. Titik temu antara menjadi analitis dan kreatif secara visual adalah tempat saya menemukan harmoni dalam pekerjaan saya. Saya selalu mencari tantangan dan peluang yang saya percaya dapat mengembangkan saya untuk membawa pengaruh dan dampak yang lebih besar bagi orang-orang.</p>
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

export default HelloPage;