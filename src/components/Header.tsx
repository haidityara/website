/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import Image from 'components/Image';
import styled from 'styled-components';
import imgLogo from 'public/assets/team-dao-logo.png';
import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 70px;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  a {
    text-decoration: none;
    font-family: 'Technology';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
  }

  &[data-toggle='false'] {
    a {
      position: relative;
      &#marketplace_header {
        &:after {
          content: 'MARKETPLACE';
        }
        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }
      &#teamToken_header {
        &:after {
          content: 'ADD TEAM TOKEN';
        }
        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }
      &#marketplace_header {
        &:after {
          content: 'MARKETPLACE';
        }
        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }
      &#teamToken_header {
        &:after {
          content: 'ADD TEAM TOKEN';
        }
        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }
      &#connect_header {
        &:after {
          content: 'CONNECT';
        }
        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }
      &:before {
        position: absolute;
        bottom: -4px;
        content: '';
        width: 0px;
        height: 4px;
        background: #00ff19;
        transition: all 0.2s ease;
      }

      &:hover {
        &:before {
          width: 100%;
          transition: all 0.2s ease;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
    position: fixed;
    top: 0;
    left: 0;

    &[data-toggle='false'] {
      display: none;
    }

    &[data-toggle='true'] {
      padding: 4rem 0;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.8);
      width: 100vw;
      height: calc(100% - 8rem);
      justify-content: space-around;

      a {
        font-size: 1.75rem;
      }
    }
  }
`;

const HamburgerContainer = styled.div`
  z-index: 1000;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('Ethereum module not found');
        return;
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      console.log('connected', accounts[0]);
      setCurrentAccount(accounts[0]);
      console.log('Current account', currentAccount);
    } catch (e) {
      console.log('Error', e);
    }
  };

  const ifWalletConnected = async () => {
    try {
      // make sure have access window ethereum
      const { ethereum } = window as any;

      if (!ethereum) {
        console.log('No ethereum found');
      } else {
        console.log('Ethereum found', ethereum);
      }

      // check if authorized using wallet connect
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Account found', account);
        setCurrentAccount(account);
      } else {
        console.log('No account found');
      }
    } catch (e) {
      console.log('Error', e);
    }
  };

  const addTeamToken = async () => {
    const { web3 } = window;
    web3.currentProvider.sendAsync(
      {
        method: 'metamask_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x9BADA086BAE4962037f14B0e79BaEa62e972dD21',
            symbol: 'TEAM',
            decimals: 8,
            image:
              'https://raw.githubusercontent.com/Team-Exchange/icons/master/TE_SMALL.png'
          }
        },
        id: 20
      },
      console.log
    );
  };

  useEffect(() => {
    ifWalletConnected();
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName('body');
    body[0].setAttribute('data-scroll-lock', `${isOpen}`);
  }, [isOpen]);

  return (
    <HeaderContainer>
      <a href="/">
        <Image width={131} height={38} src={imgLogo} alt="logo" />
      </a>

      <NavContainer data-toggle={isOpen}>
        <a onClick={() => setOpen(false)} href="/#about-us">
          About us
        </a>
        <NextLink href="/#token">Token</NextLink>
        <NextLink href="/#road-map">Roadmap</NextLink>
        <NextLink href="https://whitepaper.teamdao.com/">
          <a target="_blank" rel="noreferrer">Whitepaper</a>
        </NextLink>
        <a id="marketplace_header" href="/#" />
        {/* <a id="teamToken_header" href="/#" /> */}
        <a onClick={() => addTeamToken()} href="/#connect">
          Add TEAM TOKEN
        </a>
        {/* <a id="connect_header" href="/#" /> */}
        <a onClick={() => connectWallet()} href="/#connect">
          Connect
        </a>
      </NavContainer>

      <HamburgerContainer>
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </HamburgerContainer>
    </HeaderContainer>
  );
};

export default Header;
