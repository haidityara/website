import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import React, {useEffect, useState} from "react";


const RBNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");

    const ifWalletConnected = async () => {
        try {
            // make sure have access window ethereum
            const {ethereum} = window;

            if (!ethereum) {
                console.log("No ethereum found");
            } else {
                console.log("Ethereum found", ethereum);
            }

            // check if authorized using wallet connect
            const accounts = await ethereum.request({method: "eth_accounts"});

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Account found", account);
                setCurrentAccount(account);
            } else {
                console.log("No account found");
            }
        } catch (e) {
            console.log("Error", e);
        }
    }

    // connect wallet method
    const connectWallet = async () => {
        try {
            const {ethereum} = window;
            if (!ethereum) {
                alert("get metamask");
                return;
            }

            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            console.log("connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (e) {
            console.log("Error", e);
        }
    }

    const addTeamToken = async () => {
        web3.currentProvider.sendAsync({
            method: 'metamask_watchAsset',
            params: {
                "type": "ERC20",
                "options": {
                    "address": "0x84f93cc4dc3ebe0e4f80de867916de26ad1ea002",
                    "symbol": "TEAM",
                    "decimals": 8,
                    "image": 'https://raw.githubusercontent.com/Team-Exchange/icons/master/TE_SMALL.png'
                },
            },
            id: 20,
        }, console.log)
    }

    // run function when page loaded
    useEffect(() => {
        ifWalletConnected();
    }, []);

    console.log(isOpen);
    return (
        <Navbar className="fixed-top bg-black" expand="lg" id="myNavbar">
            <div className="container">
                <Link className="navbar-brand text-white" href="/">
                    <a>
                        <img src="images/team-logo.png" alt="Team Games" className={`brand_img`}/>
                    </a>
                </Link>
                <Navbar.Toggle onClick={() => setIsOpen(!isOpen)}
                               aria-controls="basic-navbar-nav">
                    <span className={`navbar-toggler-icon ${isOpen ? `close` : ``}`}/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className={`collapse-animation`}>
                    <Nav className="ml-auto ms-auto" id="myNavItem">
                        <Link href="/marketplace"><a className="nav-link">MARKETPLACE</a></Link>
                        <Link href="https://whitepaper.teamdao.com/"><a className="nav-link" target="_blank" rel="noreferrer">WHITEPAPER</a></Link>
                        <Link href="/media-kit"><a className="nav-link">MEDIAKIT</a></Link>
                    </Nav>

                    <Nav className="ms-auto left-nav-menu" id="myNavItem">
                        <div onClick={addTeamToken}
                             className="btn_b me-2 reflect-left w-100">
                            <div style={{width: 150 + 'px'}}
                                className="d-flex flex-row justify-content-center align-items-center flex-grow-1 add-meta btn_b--textwrap">
                                <img src="images/team-meta.png" alt="TEAM METAMASK" className={`coin-link`}/>
                                <span className={`text-center d-flex flex-column`}>
                                    <span>+ADD <span className="neon">$TEAM</span></span> <span>METAMASK</span>
                                </span>
                            </div>
                            <div className="btn_b--bgwrap">
                                <div className="btn_b--bg">
                                    <div className="btn_b--fill no_full"/>
                                </div>
                            </div>
                        </div>
                        <div onClick={connectWallet} id="con_wallet-txt" className="btn_b w-100">
                            <div className="btn_b--textwrap h-100">
                                {!currentAccount ?
                                    <div id="con_wallet" className="btn_b--txt d-flex flex-column"><span
                                        className="neon">Connect</span> <span>Wallet</span></div> :
                                    <div id="con_wallet"
                                         className="btn_b--txt d-flex align-items-center justify-content-center ">
                                        {
                                            <span
                                                className="neon">{currentAccount.substr(0, 3)}...{currentAccount.substr(currentAccount.length - 4)}</span>
                                        }
                                    </div>
                                }

                            </div>
                            <div className="btn_b--bgwrap">
                                <div className="btn_b--bg">
                                    <div className="btn_b--fill no_full"/>
                                </div>
                            </div>
                        </div>
                    </Nav>

                </Navbar.Collapse>
                {/*<div className="nav_edge--wrap flex-grow-1">*/}
                {/*    <img src="images/edge_nav_top.svg" loading="lazy"*/}
                {/*         alt="" className="nav_edge--img"/>*/}
                {/*</div>*/}
            </div>
        </Navbar>
    );
};

export default RBNavBar;
