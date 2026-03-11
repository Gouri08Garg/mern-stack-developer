import React from 'react'
import Styles from '../styles/dashboard.module.css'

export const Dashboard = () => {
    return (
        <>
            <div className="row">
                <div className='col-lg-5 px-5'>
                    <img className='border' src="https://tunis-wordpress-dark.ibthemespro.com/wp-content/uploads/2023/09/img-mobile.jpg" alt="profile" height={'450'} />
                </div>
                <div className="col-lg-7 py-5 text-center" >
                    <h1 className='text-warning mt-5 fs-7'>- I'm Steve Milner.</h1>
                    <h1 className='text-white fs-7'>Web Designer</h1>
                    <h5 className='text-white'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</h5>
                    <div className='d-flex justify-content-center mt-4'>
                        <button className={Styles.about_me_btn}>
                            <span className={Styles.text}>More About Me</span>
                            <span className={Styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard