import React from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import styles from "../styles/games.module.css";
import { Link } from "react-router-dom";

function Home() {
  let g = [
    {
    title: "Minecraft",
    img:
      "https://cdn1.dotesports.com/wp-content/uploads/2022/02/08120433/minecraft-header.png",
  }, {
    title: "Halo",
    img: "https://images.indianexpress.com/2022/03/halo-1200.jpg",
  },
  { title: "Dota 2",img:"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/08/06/7e51070d-86dd-4142-9949-e08fe4274b77/dota-2-game-characters-heroes" },
  { title: "Skyrim", img: "https://i.pcmag.com/imagery/reviews/05S57hrwRPndjMm9yJB4Nct-4..v1569471951.jpg" },

  ];
  let width = { width: "600px", height: "400px" };
  let imgstyle= { width: "100px",padding:"10px","margin-top":"90px" }
  return (
    <>
      <Carousel />
      <div className="row">
        <div className="col-11"><Card gms={g} width="250px"></Card></div>
        <div className="col-1"><Link to="/Games"><img src="/next.png" alt="next" style={imgstyle}/></Link></div>
      </div>
      <div className="row">
        <div className="col-6">
          <Link className={styles.card} to="/Explore">
            <img
              className={styles.imgeg}
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d109ce23061557.563311582423a.jpg"
              alt="explore"
              style={width}
            />
          </Link>
        </div>
        <div className="col-6">
          <Link className={styles.card} to="/Games">
            <img
              className={styles.imgeg}
              src="https://img.freepik.com/free-vector/play-games-have-fun-neon-sign-with-game-pad-bright-signboard-light-banner-game-logo-neon-emblem-vector-illustration_136277-880.jpg?w=2000"
              alt="games"
              style={width}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
