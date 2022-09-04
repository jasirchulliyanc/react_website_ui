
const SectionOne = () =>{
    return (
        <section className="section-one">
            <div className="container">
                <div className="left-section">
                    <h1 className="left-section-h1">Welcome to debug Media</h1>
                    <p className="left-section-p">
                        n this tutorial I will be teaching you how to create a website malayalam using HTML CSS and
                        css flexbox. We will be covering the basics of html and css along with the css flexbox
                    </p>
                    <button className="login-button">Login</button>
                </div>
                <div className="right-section">
                    <h4 className="right-section-h4">Please fil the form</h4>
                    <form action="">
                        <div className="input-group">
                            <input type="text" required></input>
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="input-group">
                            <input type="email" required></input>
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required></input>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="submit-section">
                            <input type="submit" className="submit-button"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default  SectionOne;