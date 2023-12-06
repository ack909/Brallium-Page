import React, { useState } from "react";
import './Navbar.css';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import Modal from "../../Pages/Modal_login"
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState("");




    return (
        <div>
        <nav className='nav'>
             <div className='nav-header'>
                <a href="/" className='brallium-title'>Brallium</a>
            </div>
            <div className='nav-content'>
                <h1 className='nav-currency'>USD ($)</h1>
                <img src='/Vector (8).svg' alt="vector8" className="" />
                <a href="/" className='brallium-title'>
                    <img src='Union.png' alt='logo' className='logo' />
                </a>
                <ul className='nav-links'>
                    <li onClick={() => setMenu("shop")}>
                        <Link to='/shop'>SHOP</Link>
                        {menu === "shop" ? <hr /> : <></>}
                    </li>
                    <li><a href='/about'>ABOUT</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                    <li><a href='/blogs'>BLOG</a></li>
                </ul>
               {/*} {button && <Button buttonStyle='btn--outline'>SHOP ALL</Button>} */}
                <div className='nav-icons'>

                    <a onClick={() => {setModal(true)}}><FaUserCircle /></ a>
                    <a href='/cart'><FaShoppingCart /></a>
                    <div className='icons'>
                        <h1 className='nav-currency'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                                <path d="M0.210935 0.710935C0.144097 0.777227 0.0910462 0.856097 0.0548428 0.942996C0.0186395 1.02989 0 1.1231 0 1.21724C0 1.31138 0.0186395 1.40458 0.0548428 1.49148C0.0910462 1.57838 0.144097 1.65725 0.210935 1.72354L3.77646 5.28906C3.84275 5.3559 3.92162 5.40895 4.00852 5.44516C4.09542 5.48136 4.18862 5.5 4.28276 5.5C4.3769 5.5 4.47011 5.48136 4.557 5.44516C4.6439 5.40895 4.72277 5.3559 4.78906 5.28906L8.35459 1.72354C8.42142 1.65725 8.47448 1.57838 8.51068 1.49148C8.54688 1.40458 8.56552 1.31138 8.56552 1.21724C8.56552 1.1231 8.54688 1.02989 8.51068 0.942996C8.47448 0.856097 8.42142 0.777227 8.35459 0.710935C8.28829 0.644097 8.20942 0.591046 8.12253 0.554842C8.03563 0.518639 7.94242 0.5 7.84828 0.5C7.75414 0.5 7.66094 0.518639 7.57404 0.554842C7.48714 0.591046 7.40827 0.644097 7.34198 0.710935L4.28276 3.77728L1.22354 0.710935C1.15725 0.644097 1.07838 0.591046 0.991483 0.554842C0.904584 0.518639 0.811377 0.5 0.717239 0.5C0.623101 0.5 0.529894 0.518639 0.442996 0.554842C0.356097 0.591046 0.277227 0.644097 0.210935 0.710935Z" fill="#284855" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M15.8989 1.53333C14.3322 0.566667 12.5322 0 10.5655 0V1.53333H15.8989Z" fill="#ED4C5C" />
                                <path d="M10.5655 3.06667H17.7655C17.1989 2.5 16.5655 1.96667 15.8989 1.53333H10.5655V3.06667Z" fill="#FFFEFC" />
                                <path d="M10.5655 4.6H18.9989C18.6322 4.03333 18.2322 3.53333 17.7989 3.06667H10.5655V4.6Z" fill="#ED4C5C" />
                                <path d="M10.5655 6.13333H19.7989C19.5655 5.6 19.2989 5.06667 18.9989 4.6H10.5655V6.13333Z" fill="#FFFEFC" />
                                <path d="M10.5655 7.66667H20.2989C20.1655 7.13333 19.9989 6.63333 19.7989 6.13333H10.5655V7.66667Z" fill="#ED4C5C" />
                                <path d="M10.5655 9.23333H20.5322C20.4989 8.7 20.3989 8.2 20.2989 7.7H10.5655V9.23333Z" fill="#FFFEFC" />
                                <path d="M20.5322 9.23333H10.5655V10H0.565521C0.565521 10.2667 0.565521 10.5 0.598855 10.7667H20.5322C20.5655 10.5 20.5655 10.2667 20.5655 10C20.5655 9.73333 20.5655 9.46667 20.5322 9.23333Z" fill="#ED4C5C" />
                                <path d="M0.832188 12.3H20.2989C20.4322 11.8 20.4989 11.3 20.5322 10.7667H0.598855C0.632188 11.2667 0.732188 11.8 0.832188 12.3Z" fill="#FFFEFC" />
                                <path d="M1.33219 13.8333H19.7989C19.9989 13.3333 20.1655 12.8333 20.2989 12.3H0.832188C0.965521 12.8333 1.13219 13.3333 1.33219 13.8333Z" fill="#ED4C5C" />
                                <path d="M2.13219 15.3667H18.9989C19.2989 14.8667 19.5655 14.3667 19.7989 13.8333H1.33219C1.56552 14.3667 1.83219 14.8667 2.13219 15.3667Z" fill="#FFFEFC" />
                                <path d="M3.33219 16.9H17.7989C18.2322 16.4333 18.6655 15.9 18.9989 15.3667H2.13219C2.46552 15.9333 2.89885 16.4333 3.33219 16.9Z" fill="#ED4C5C" />
                                <path d="M5.19885 18.4333H15.9322C16.6322 18 17.2322 17.4667 17.7989 16.9H3.33219C3.89885 17.5 4.53219 18 5.19885 18.4333Z" fill="#FFFEFC" />
                                <path d="M10.5655 20C12.5322 20 14.3655 19.4333 15.9322 18.4333H5.19885C6.76552 19.4333 8.59885 20 10.5655 20Z" fill="#ED4C5C" />
                                <path d="M5.23219 1.53333C4.53219 1.96667 3.89885 2.5 3.33219 3.06667C2.86552 3.53333 2.46552 4.06667 2.13219 4.6C1.83219 5.1 1.53219 5.6 1.33219 6.13333C1.13219 6.63333 0.965521 7.13333 0.832188 7.66667C0.698855 8.16667 0.632188 8.66667 0.598855 9.2C0.565521 9.46667 0.565521 9.73333 0.565521 10H10.5655V0C8.59885 0 6.79885 0.566667 5.23219 1.53333Z" fill="#00738C" />
                                <path d="M8.23219 0.333333L8.39885 0.833333H8.89886L8.49885 1.16667L8.63219 1.66667L8.23219 1.36667L7.83219 1.66667L7.96552 1.16667L7.56552 0.833333H8.06552L8.23219 0.333333ZM9.56552 2.33333L9.73219 2.83333H10.2322L9.83219 3.16667L9.96552 3.66667L9.56552 3.36667L9.16552 3.66667L9.29885 3.16667L8.89886 2.83333H9.39886L9.56552 2.33333ZM6.89885 2.33333L7.06552 2.83333H7.56552L7.16552 3.16667L7.29885 3.66667L6.89885 3.36667L6.49885 3.66667L6.63219 3.16667L6.23219 2.83333H6.73219L6.89885 2.33333ZM8.23219 4.33333L8.39885 4.83333H8.89886L8.49885 5.16667L8.63219 5.66667L8.23219 5.36667L7.83219 5.66667L7.96552 5.16667L7.56552 4.83333H8.06552L8.23219 4.33333ZM5.56552 4.33333L5.73219 4.83333H6.23219L5.83219 5.16667L5.96552 5.66667L5.56552 5.36667L5.16552 5.66667L5.29885 5.16667L4.89885 4.83333H5.39885L5.56552 4.33333ZM2.89885 4.33333L3.06552 4.83333H3.56552L3.16552 5.16667L3.29885 5.66667L2.89885 5.36667L2.49885 5.66667L2.63219 5.16667L2.23219 4.83333H2.73219L2.89885 4.33333ZM9.56552 6.33333L9.73219 6.83333H10.2322L9.83219 7.16667L9.96552 7.66667L9.56552 7.36667L9.16552 7.66667L9.29885 7.16667L8.89886 6.83333H9.39886L9.56552 6.33333ZM6.89885 6.33333L7.06552 6.83333H7.56552L7.16552 7.16667L7.29885 7.66667L6.89885 7.36667L6.49885 7.66667L6.63219 7.16667L6.23219 6.83333H6.73219L6.89885 6.33333ZM4.23219 6.33333L4.39885 6.83333H4.89885L4.49885 7.16667L4.63219 7.66667L4.23219 7.36667L3.83219 7.66667L3.96552 7.16667L3.56552 6.83333H4.06552L4.23219 6.33333ZM8.23219 8.33333L8.39885 8.83333H8.89886L8.49885 9.16667L8.63219 9.66667L8.23219 9.36667L7.83219 9.66667L7.96552 9.16667L7.56552 8.83333H8.06552L8.23219 8.33333ZM5.56552 8.33333L5.73219 8.83333H6.23219L5.83219 9.16667L5.96552 9.66667L5.56552 9.36667L5.16552 9.66667L5.29885 9.16667L4.89885 8.83333H5.39885L5.56552 8.33333ZM2.89885 8.33333L3.06552 8.83333H3.56552L3.16552 9.16667L3.29885 9.66667L2.89885 9.36667L2.49885 9.66667L2.63219 9.16667L2.23219 8.83333H2.73219L2.89885 8.33333ZM3.83219 3.66667L4.23219 3.36667L4.63219 3.66667L4.46552 3.16667L4.86552 2.83333H4.36552L4.23219 2.33333L4.06552 2.83333H3.59885L3.99885 3.13333L3.83219 3.66667ZM1.16552 7.66667L1.56552 7.36667L1.96552 7.66667L1.79885 7.16667L2.19885 6.83333H1.73219L1.56552 6.33333L1.39885 6.83333H1.06552C1.06552 6.86667 1.03219 6.9 1.03219 6.93333L1.29885 7.13333L1.16552 7.66667Z" fill="#FFFEFC" />
                            </svg>
                            USD ($)
                        </h1>
                        <a href='/login'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5656 2C9.16632 1.99974 7.79148 2.36649 6.57827 3.06363C5.36507 3.76077 4.35593 4.76392 3.65158 5.97295C2.94723 7.18198 2.5723 8.55461 2.56423 9.95383C2.55615 11.353 2.91521 12.7299 3.60556 13.947C4.07217 13.3406 4.67199 12.8496 5.35864 12.512C6.0453 12.1744 6.8004 11.9992 7.56556 12H13.5656C14.3307 11.9992 15.0858 12.1744 15.7725 12.512C16.4591 12.8496 17.0589 13.3406 17.5255 13.947C18.2159 12.7299 18.575 11.353 18.5669 9.95383C18.5588 8.55461 18.1839 7.18198 17.4795 5.97295C16.7752 4.76392 15.766 3.76077 14.5528 3.06363C13.3396 2.36649 11.9648 1.99974 10.5656 2ZM18.5085 16.076C19.8456 14.333 20.5688 12.1968 20.5655 9.99999C20.5655 4.477 16.0885 0 10.5656 0C5.04256 0 0.565563 4.477 0.565563 9.99999C0.562262 12.1968 1.28547 14.333 2.62256 16.076L2.61756 16.094L2.97256 16.507C3.91045 17.6035 5.07494 18.4836 6.38579 19.0866C7.69664 19.6897 9.12266 20.0013 10.5656 20C12.5929 20.0037 14.573 19.3879 16.2405 18.235C16.9515 17.7438 17.5961 17.163 18.1585 16.507L18.5135 16.094L18.5085 16.076ZM10.5656 4C9.76991 4 9.00684 4.31607 8.44424 4.87868C7.88163 5.44128 7.56556 6.20435 7.56556 6.99999C7.56556 7.79564 7.88163 8.5587 8.44424 9.12131C9.00684 9.68392 9.76991 9.99999 10.5656 9.99999C11.3612 9.99999 12.1243 9.68392 12.6869 9.12131C13.2495 8.5587 13.5656 7.79564 13.5656 6.99999C13.5656 6.20435 13.2495 5.44128 12.6869 4.87868C12.1243 4.31607 11.3612 4 10.5656 4Z" fill="#284855" />
                            </svg>
                        </a>
                        <a href='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5.7194 6.53846V5.15385C5.7194 4.05218 6.15703 2.99563 6.93603 2.21663C7.71503 1.43764 8.77158 1 9.87324 1C10.9749 1 12.0315 1.43764 12.8105 2.21663C13.5895 2.99563 14.0271 4.05218 14.0271 5.15385V6.53846M2.25786 6.53846C2.07425 6.53846 1.89816 6.6114 1.76832 6.74123C1.63849 6.87107 1.56555 7.04716 1.56555 7.23077V16.5769C1.56555 17.8854 2.68017 19 3.98863 19H15.7579C17.0663 19 18.1809 17.9395 18.1809 16.631V7.23077C18.1809 7.04716 18.108 6.87107 17.9782 6.74123C17.8483 6.6114 17.6722 6.53846 17.4886 6.53846H2.25786Z" stroke="#284855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <img src='/Vector (9).svg' alt="vector9" className="" />
                </div>
            </div>
            
        </nav>
        <Modal setModal={setModal} modal={modal}/>
        </div>
        
        
    )
}

export default Navbar;