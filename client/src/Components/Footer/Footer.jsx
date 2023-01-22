import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer class="app__footer">
        <div class="app__footer__content container">
            <div class="app__footer__content__right">
                <a href="#"><img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-5@2x.svg" alt="NFT Loqo"/></a>
                <a href="#"><img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/nft-marketplace-3@2x.svg" alt="NFT Loqo"/></a>
                <p class="app__footer__content__right__text">NFT marketplace UI created with Anima for Figma.</p>
                <p class="app__footer__content__right__joinour">Join our community</p>
                <div class="app__footer__content__right__icon">
                    <a href="#">
                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/discordlogo-2@2x.svg" alt="Discord"/>
                    </a>
                    <a href="#">
                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/youtubelogo-1@2x.svg" alt="Discord"/>
                    </a>
                    <a href="#">
                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/twitterlogo-2@2x.svg" alt="Discord"/>
                    </a>
                    <a href="#">
                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/instagramlogo-1@2x.svg" alt="Discord"/>
                    </a>
                </div>
            </div>
            <div class="app__footer__content__middle">
                <h4 class="app__footer__content__middle__title">Explore</h4>
                <ul>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Rankings</a></li>
                    <li><a href="#">Connect a wallet</a></li>
                </ul>
            </div>
            <div class="app__footer__content__left">
                <h4>Join our weekly digest</h4>
                <p>Get exclusive promotions & updates straight to your inbox.</p>
                <div>
                    <input type="text" placeholder="Enter your email here"/>
                    <button><img src="./image/EnvelopeSimple.png" alt=""/> Subscribe</button>
                </div>
            </div>
        </div>
        <div class="app__footer__bottom container">
            <span>Ⓒ NFT Market. Use this template freely.</span>
        </div>
    </footer>
  )
}

export default Footer