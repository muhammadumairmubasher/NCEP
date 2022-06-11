const MovingClouds = () => {
    return (
        <>
            <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
            <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
            <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
            <div className="filter" />
        </>
    )
}
export default MovingClouds;