import React from 'react';
import './SideMenu.css'
const SideMenu = () => {
    return (
        <div className="menu fixed-top">
            <div className="menu-header">
                <img src="../../../public/assets/img/bg-11.png" />
            </div>
            <div className="menu-list">
                <ul className="items">
                    <li className="item">
                        <i className="far fa-newspaper"></i>
                        <p>صفحه اصلی</p>
                    </li>
                    <li className="item">
                        <i className="far fa-newspaper"></i>
                        <p>مدیریت مشخصات</p>
                    </li>
                    <li className="item">
                        <i className="far fa-newspaper"></i>
                        <p>ثبت فروش</p>
                    </li>
                    <li className="item">
                        <i className="far fa-newspaper"></i>
                        <p>مدیریت پیشنهاد ها</p>
                    </li>
                    <li className="item">
                        <i className="far fa-newspaper"></i>
                        <p>گزارش فروش</p>
                    </li>
                    <li className="item">
                        <i className="far fa-newspaper"></i>
                        <p>گزارش اقساط</p>
                    </li>
                    <li className="item">
                        <i className="far fa-newspaper"></i>
                        <p>گزارش حسابداری</p>
                    </li>
                    <li className="item">
                        <i className="far fa-newspaper"></i>
                        <p>مدیریت حساب کاربری</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu