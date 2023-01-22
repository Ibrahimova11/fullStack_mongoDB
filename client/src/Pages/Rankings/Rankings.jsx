import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./Rankings.css";

const Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function Rankings() {
  let [artists, setArtists] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/artists")
      .then((res) => setArtists(res.data));
  }, []);
  return (
    <>
      <section className="topCreators">
        <div className="topCreators__content">
          <div className="topCreators__content__header">
            <h2>Top Creators</h2>
          </div>
          <div className="topCreators__content__desc">
            <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
          </div>
        </div>
       
      </section>
      
      <section className="creatorsTable">
        <div className="creatorsTable__header">
        
          <div className="creatorsTable__header__left">
            <div className="creatorsTable__header__left__number">
              <span>#</span>
            </div>
            <div className="creatorsTable__header__left__name">
              <span>Artist</span>
            </div>
          </div>
          <div className="creatorsTable__header__right">
            <div className="creatorsTable__header__right__start">
              <span>Change</span>
            </div>
            <div className="creatorsTable__header__right__mid">
              <span>NFTs Sold</span>
            </div>
            <div className="creatorsTable__header__right__end">
              <span>Volume</span>
            </div>
            <div style={{ color: "#858584" }}>Add NFTS</div>
          </div>
        </div>

        {artists.map((artist) => {
          return (
            <div className="creatorsTableItem">
              <div className="creatorsTableItem__left">
                <div className="creatorsTableItem__left__rank">
                  <span>{artist.degree}</span>
                </div>
                <div className="creatorsTableItem__left__name">
                  <img
                    src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png"
                    alt=""
                  />
                  <h5>{artist.name}</h5>
                </div>
              </div>
              <div className="creatorsTableItem__right">
                <div className="creatorsTableItem__right__change">
                  <span>{artist.change}</span>
                </div>
                <div className="creatorsTableItem__right__nftSold">
                  <span>{artist.sold}</span>
                </div>
                <div className="creatorsTableItem__right__volume">
                  <span>{artist.volume}</span>
                </div>

                <button
                
                    style={{
                      
                      backgroundColor: "#2B2B2B",
                      color: "#858584",
                      border: "none",
                      width: "40px",
                      borderRadius: "8px",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Add
                  </button>
                

              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Rankings;