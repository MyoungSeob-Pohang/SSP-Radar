import '../static/css/Jumbotron.scss';

const Jumbotron = () => {
    return (
        <div className="Jumbotron">
            <div className="Jumbotron_inner">
                <div className="JumbotronInfo">
                    <div className="Jumbotron_Title">
                        <div>Inxpect Smart Sensors.</div>
                        <div>Revolutionary volumetric safety radar.</div>
                    </div>
                    <div className="Jumbotron_SubTitle">
                        <div>
                            Inxpect Smart Sensors create a 3D virtual safety area to control access and prevent machinery from starting when
                            humans are present.
                        </div>
                    </div>
                    <a href="#none">Find out more about our products</a>
                </div>
            </div>
        </div>
    );
};
export default Jumbotron;
