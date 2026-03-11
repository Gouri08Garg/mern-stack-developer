import React from 'react';
import Styles from "../styles/sidebar.module.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card border-0">
                        <ul className="list-group bg_dark_color">
                            <li className="list-group-item border-0 bg_dark_color">
                                <div className={Styles.icon_btn}>
                                    <span className={Styles.text}>Home</span>
                                    <span className={Styles.icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill ms-3" viewBox="0 0 16 16">
                                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                                        </svg>
                                    </span>
                                </div>
                            </li>
                            <li className="list-group-item border-0 bg_dark_color">
                                <div className={Styles.icon_btn}>
                                    <Link to={'/about'}>
                                        <span className={Styles.text}>About</span>
                                        <span className={Styles.icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill ms-3" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className="list-group-item border-0 bg_dark_color">
                                <div className={Styles.icon_btn}>
                                    <Link to={'/portfolio'}>
                                        <span className={Styles.text}>Portfolio</span>
                                        <span className={Styles.icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill ms-3" viewBox="0 0 16 16">
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className="list-group-item border-0 bg_dark_color">
                                <div className={Styles.icon_btn}>
                                    <Link to={'/contacts'}>
                                        <span className={Styles.text}>Contact</span>
                                        <span className={Styles.icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill ms-3" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className="list-group-item border-0 bg_dark_color">
                                <div className={Styles.icon_btn}>
                                    <Link to={'/blogs'}>
                                        <span className={Styles.text}>Blogs</span>
                                        <span className={Styles.icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill ms-3" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className="listaddProducts-group-item border-0 bg_dark_color">
                                <div className={Styles.icon_btn}>
                                    <Link to={'/addProducts'}>
                                        <span className={Styles.text}>Products</span>
                                        <span className={Styles.icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill ms-3" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar