import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="header fixed-top d-flex align-items-center justify-content-between pl-2 mr-2">
                <div className="header-title">
                    <h3>صفحه اصلی</h3>
                </div>
                <div className="input-btn-group">
                    <div className="dropdown">
                        <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            علی میرزاجانی
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <h4 className="text-right pr-1">انتخاب نقش</h4>
                            <hr />
                            <li><a className="dropdown-item" href="#"><i class="fas fa-user"></i>علی میرزاجانی/مسئول</a></li>
                            <li><a className="dropdown-item" href="#"><i class="fas fa-user-check"></i>علی میرزاجانی/مسئول</a></li>
                            <li><a className="dropdown-item" href="#"><i class="fas fa-user"></i>علی میرزاجانی/مسئول</a></li>
                        </ul>
                    </div>
                    <button className="btn">خروج<i className="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className="header-title">
                        <h3>صفحه اصلی</h3>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="menu-list">
                            <ul className="items navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="item">
                                    <i className="far fa-newspaper"></i>
                                    <p>صفحه اصلی</p>
                                </li>
                                <li className="item nav-item">
                                    <i className="far fa-newspaper"></i>
                                    <p>مدیریت مشخصات</p>
                                </li>
                                <li className="item nav-item">
                                    <i className="far fa-newspaper"></i>
                                    <p>ثبت فروش</p>
                                </li>
                                <li className="item nav-item">
                                    <i className="far fa-newspaper"></i>
                                    <p>مدیریت پیشنهاد ها</p>
                                </li>
                                <li className="item nav-item">
                                    <i className="far fa-newspaper"></i>
                                    <p>گزارش فروش</p>
                                </li>
                                <li className="item nav-item">
                                    <i className="far fa-newspaper"></i>
                                    <p>گزارش اقساط</p>
                                </li>
                                <li className="item nav-item">
                                    <i className="far fa-newspaper"></i>
                                    <p>گزارش حسابداری</p>
                                </li>
                                <li className="item nav-item">
                                    <i className="far fa-newspaper"></i>
                                    <p>مدیریت حساب کاربری</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        
*/}
        </>
    )
}

export default Header