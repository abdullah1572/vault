import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../../hooks/useAuth';
import { fortmatic } from '../../../utils/web3React';
import Signature from '../../../SignMessage/Signature';
import { toast } from 'react-toastify';
import useEthBalance from '../../../hooks/dataFetcher';
import { useHistory } from 'react-router';

const connectorsByName = {
    Fortmatic: fortmatic,
};

const Navbar = () => {

    const context = useWeb3React();
    const { account, activate, deactivate } = context;
    // const [ account, setc] =useState(123);
    const [username, setUserName] = useState("Your Account");
    const [userbalance, setUserBalance] = useState("0");
    const { userSign } = Signature(account);
    const { login, logout } = useAuth();
    const history = useHistory();
    const ethBalance = useEthBalance();

    // console.log("ethBalance", ethBalance/ 10 ** 18)
    const balance = (ethBalance / 10 ** 18).toFixed(5);
    // setUserBalance(balance);
    const connectwallet = () => {
        window.$("#exampleModal").modal('show');
    }
    const connectMetamask = () => {
        alert(account)
        localStorage.setItem("connectorId", "injected")
        if (account) {
            logout()
        } else {
            login("injected")
        }
    }

    const trustWallet = async () => {
        localStorage.setItem("connectorId", "walletconnect")
        if (account) {
            logout()
        } else {
            login("walletconnect")
        }
    }
    const FormaticWallet = () => {
        localStorage.setItem('formatic', "formatic")
        if (account) {
            logout()
        } else {
            activate(connectorsByName.Fortmatic)
        }
    }
    const UserSignWindow = async () => {

        const tx = await userSign()
        console.log("tx==========", tx)
        if (tx) {
            console.log("if tx==========", tx)
            history.push('/createnft')
        }
        else {
            console.log("tx==========", tx)
            history.push('/')
            toast.error("Sign Wallet First")
        }
    }


    return (
        <>

            <section className="main-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 m-auto ">
                            <nav className="navbar ptb20 navbar-expand-xl">

                                <NavLink to="/" className="navbar-brand">
                                    <div className="css-70qvj9">
                                        <img src="\imagessss\logo-position.svg" alt="" className=" img-sddfascas" />
                                        <img src="\imagessss\Text-Logo.svg" alt="" className=" img-sddf" />
                                    </div>

                                </NavLink>
                                <div className="fdsffv">
                                    <button className="css-1ieruea">English <i class="fas fa-chevron-down cdmnvksn"></i></button>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="mdhfy"> <i class="fas fa-bars"></i></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="navbar-nav ml-auto">

                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Overview <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Trading</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Nftswap">Exchange <i class="fas ml-2 fa-chevron-down text-white"></i></Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="/profile" className="nav-link" >Vaults</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Farming</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Pools</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">NFTs  <i class="fas ml-2 fa-chevron-down text-white"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i class="fas fa-ellipsis-h text-white dnsbdjs"></i></a>
                                        </li>

                                        <li>
                                            <button className="css-14rssscjm3z" >
                                                <img src="\imagessss\logo-position (1).svg" alt="" className=" css-l858m" />
                                                <span className="css-17uqetv">$ 3.9728</span>
                                            </button>
                                        </li>
                                        <li className="ml-3">
                                            {/* <button className="css-14rjm3z" >
                                                <span className="css-jipda8">0.00100 &nbsp;</span>
                                                <span className="css-17uqetv">POSI</span>
                                                <img src="\imagessss\download.png" alt="" className=" css-l858m" />
                                            </button> */}
                                            <button className="hsbdhjs" data-toggle="modal" data-target="#exampleModal">Connect Wallet</button>
                                        </li>
                                    </ul>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered cshvghvc">
                                            <div class="modal-content scscs">
                                                <div class="modal-header scswcewf">
                                                    <h5 class="modal-title" id="exampleModalLabel">Connect to a wallet</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body rervewcc">
                                                    <div className="cjbcj">
                                                        <div className="dnkfzlxms">
                                                            <div className="dsnsc">
                                                                <img src="\imagessss\metamask.svg" alt="" className=" css-l858m" />
                                                            </div>
                                                            <div>
                                                                <p className="djhcwkdjc">MetaMask</p>
                                                            </div>
                                                        </div>
                                                        <div className="dnkfzlxms">
                                                            <div className="dsnsc">
                                                                <img src="\imagessss\trustwallet.svg" alt="" className=" css-l858m" />

                                                            </div>
                                                            <p className="djhcwkdjc">TrustWallet</p>
                                                        </div>
                                                        <div className="dnkfzlxms">
                                                            <div className="dsnsc">
                                                                <img src="\imagessss\walletconnect.svg" alt="" className=" css-l858m" />

                                                            </div>
                                                            <p className="djhcwkdjc">WalletConnect</p>
                                                        </div>
                                                        <div className="dnkfzlxms">
                                                            <div className="dsnsc">
                                                                <img src="\imagessss\tokenpocket.svg" alt="" className=" css-l858m" />

                                                            </div>
                                                            <p className="djhcwkdjc">TokenPocket</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Navbar;
