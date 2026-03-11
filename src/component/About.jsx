import React from 'react'
import Style from "../styles/about.module.css"

const About = () => {
    return (
        <>
            <div className='row px-5'>
                <div className="col-lg-12">
                    <h1 className={Style.about}><strong>ABOUT <span className='text-warning'>ME</span></strong></h1>
                    <span className={Style.resume}>RESUME</span>
                </div>
            </div>
            <div className="row px-5">
                <div className='col-lg-6 mt-5'>
                    <div className='row'>
                        <h1 className='text-white fw-bold '>Personal Info</h1>
                        <br /><br />
                        <div className="col-lg-6">
                            <p>
                                <span className='text-secondary fw-bold'>First Name :</span>
                                <span className='text-white fw-bold'> Steve</span>
                            </p>
                            <p>
                                <span className='text-secondary fw-bold'>Last Name : </span>
                                <span className='text-white fw-bold'> Milner</span>
                            </p>
                            <p>
                                <span className='text-secondary fw-bold'>Age : </span>
                                <span className='text-white fw-bold'> 27 yrs</span>
                            </p>
                            <p>
                                <span className='text-secondary fw-bold'>Nationality : </span>
                                <span className='text-white fw-bold'> Indian</span>
                            </p>
                            <p>
                                <span className='text-secondary fw-bold'>Freelance : </span>
                                <span className='text-white fw-bold'> Available</span>
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            <p>
                                <span className='text-secondary fw-bold'>Address : </span>
                                <span className='text-white fw-bold'> Delhi</span>
                            </p>
                            <p>
                                <span className='text-secondary fw-bold'>Phone : </span>
                                <span className='text-white fw-bold'> +91 1234567890</span>
                            </p>
                            <p>
                                <span className='text-secondary fw-bold'>Email : </span>
                                <span className='text-white fw-bold'> you@gmail.com</span>
                            </p>
                            <p>
                                <span className='text-secondary fw-bold'>Skype : </span>
                                <span className='text-white fw-bold'> steve.milner</span>
                            </p>
                            <p>
                                <span className='text-secondary fw-bold'>Language : </span>
                                <span className='text-white fw-bold'> French, English</span>
                            </p>
                        </div>
                    </div>
                    <button ></button>
                </div>
                <div className='col-lg-6 mt-5'>
                    <div className="row">
                        <div className='col-lg-6 mb-4'>
                            <div className="card bg_dark_color border_Style px-5">
                                <h1 className="text-warning fw-bold">12+</h1>
                                <h4 className="text-white fw-bold">-- Years of Experiences</h4>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="card bg_dark_color border_Style px-5">
                                <h1 className="text-warning fw-bold">12+</h1>
                                <h4 className="text-white fw-bold">-- Years of Experiences</h4>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="card bg_dark_color border_Style px-5">
                                <h1 className="text-warning fw-bold">81+</h1>
                                <h4 className="text-white fw-bold">-- Years of Experiences</h4>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="card bg_dark_color border_Style px-5">
                                <h1 className="text-warning fw-bold">53+</h1>
                                <h4 className="text-white fw-bold">-- Years of Experiences</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About