import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./MarketPlace.css";
function MarketPlace() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/artists")
      .then((res) => setCards(res.data));
  }, []);

  return (
    <>
      <section className="marketPlace__header">
        <div className="marketPlace__header__content">
          <div className="marketPlace__header__content__title">
            <h2>Browse Marketplace</h2>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          </div>
          <div className="marketPlace__header__content__search">
            <input type="text" placeholder="Search your favourite NFTs" />
            <img
              src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/magnifyingglass@2x.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="marketPlace__content">
        <div className="containerCart">
          {cards.map((card) => {
            return (
              <>
                {card.nft[0] && (
                  <>
                    {card.nft.map((nft) => {
                      return (
                        <div class="discover__cards__item">
                          <div class="discover__cards__item__header">
                            <img
                              style={{ width: "100%" }}
                              src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-73@2x.png"
                              alt=""
                            />
                          </div>
                          <div class="discover__cards__item__footer">
                            <div class="discover__cards__item__footer__top">
                              <h5>{nft.name}</h5>
                              <div>
                                <img
                                  src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png"
                                  alt=""
                                />
                                <span>{card.littleName}</span>
                              </div>
                            </div>
                            <div class="discover__cards__item__footer__end">
                              <div class="discover__cards__item__footer__end__left">
                                <h6>Price</h6>
                                <p>{nft.price}</p>
                              </div>
                              <div class="discover__cards__item__footer__end__right">
                                <h6>Highest Bid</h6>
                                <p>{nft.bid}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MarketPlace;