export const map = () => {
    const mystyle = {
        alignContent: "center"
    };
    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/fabio-mangione.jpg").default + ")",
                }}
                className="page-header page-header-xs"
                data-parallax={true}
            >
                <div className="filter" />
                <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
                <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
            </div>
            <div style={mystyle}>
                <iframe title="National Computing Education Portal" src="https://www.google.com/maps/d/u/6/embed?mid=1s3EvNPXGVMMfs0icLlUMg22PxrwZa6Eh" scrolling="no" width="100%" height="520"></iframe>
            </div>
        </>
    );

}
