import React from "react";

import Card from "./Card";
function Games() {
  let games = [
    {
      title: "Sandbox",
      g: [
        {
          title: "Minecraft",
          img:
            "https://cdn1.dotesports.com/wp-content/uploads/2022/02/08120433/minecraft-header.png",
        },
        {
          title: "Grand Theft Auto",
          img:
            "https://www.gamingscan.com/wp-content/uploads/2020/10/Grand-Theft-Auto-GTA-Game-Order.jpg",
        },
        {
          title: "The Sims",
          img:
            "https://www.telegraph.co.uk/multimedia/archive/01414/sims-gallery1_1414242i.jpg",
        },
      ],
    },
    {
      title: "Real-time strategy ",
      g: [
        {
          title: "Warcraft",
          img:
            "https://variety.com/wp-content/uploads/2018/11/warcraft-iii-remastered.jpg",
        },
        {
          title: "Age of Empires",
          img: "https://cdn.mos.cms.futurecdn.net/uHdWVaGtpxDkaBZp7YwP4J.jpg",
        },
        {
          title: "Command & Conquer",
          img:
            "https://s.yimg.com/uu/api/res/1.2/fbDRycPWTQgIxcX2mTYtUA--~B/aD0xMDAwO3c9MTYwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https://s.yimg.com/os/creatr-uploaded-images/2020-03/8b628270-62d0-11ea-b7a7-c60e362a8768&client=a1acac3e1b3290917d92&signature=c0a6536deb87910d9e8960bd24a5099c0c9790f0",
        },
      ],
    },
    {
      title: "Shooter",
      g: [
        {
          title: "Halo",
          img: "https://images.indianexpress.com/2022/03/halo-1200.jpg",
        },
        {
          title: "Gears of War ",
          img:
            "https://www.videogameschronicle.com/files/2021/05/gears-of-war-3.jpg",
        },
        {
          title: "DOOM ",
          img:
            "https://store-images.s-microsoft.com/image/apps.37270.14243883824176739.cbcfff65-214f-42eb-bf4d-f8e2d55d6f9e.cf597e85-bf9e-45f8-955c-b053cd9a810d?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
        },
      ],
    },
    ,
    {
      title: "Multiplayer online battle arena",
      g: [
        { title: "Dota 2",img:"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/08/06/7e51070d-86dd-4142-9949-e08fe4274b77/dota-2-game-characters-heroes" },
        { title: "League of Legends" ,img:"https://images.prismic.io/play-vs/6c423286e877921fb6659122b16e1845df833e1f_league-of-legends-hero-splash.jpg?auto=compress,format"},
        { title: "Smite",img:"https://i.ytimg.com/vi/xAPsmI_zDZs/maxresdefault.jpg" },
      ],
    },
    {
      title: "Role-playing games ",
      g: [
        { title: "Skyrim", img: "https://i.pcmag.com/imagery/reviews/05S57hrwRPndjMm9yJB4Nct-4..v1569471951.jpg" },
        { title: "The Witcher 3", img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-witcher-3/5/56/WildHuntMainCharacters.jpg" },
        { title: " Fallout 4", img: "https://cdn.vox-cdn.com/thumbor/oDHhWJpBBC6t6_qtnPy5yyd2xBM=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/56140119/Fallout4_NukaWorld_E3_02_1465776998.0.0.jpg" },
      ],
    },
    {
      title: "Simulation and sports",
      g: [
        { title: "Forza Motorsport", img: "https://compass-ssl.xboxlive.com/assets/fe/f2/fef2791b-1faf-4e80-8e2e-58333eab2cc6.jpg?n=FH5-Ferrari_group-03-FMnet_Carousel-1920x825.jpg" },
        { title: "Madden NFL", img: "https://data3.origin.com/asset/content/dam/originx/web/app/games/madden/madden-21/M21_FirstLook_Mahomes_Pocket_Final_04_Apr30_PS05_WM.jpg/7072f3cd-6521-4192-9412-27aa8df95684/original.jpg" },
        { title: "NBA2K", img: "https://img.utdstc.com/screen/2a5/e4c/2a5e4c439c9439d0c2991d2a39b2a4737f1ce033c84b964701757d8ed2c91694:200" },
      ],
    },
    {
      title: " Puzzlers and party games",
      g: [
        { title: "Jackbox Party Pack ", img: "https://hb.imgix.net/b10842656e9e58dadfd0c578542fd5f70c53f502.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=9d4cc9faefd64a6e2eb093118a8f42b7" },
        { title: "The Talos Principle ", img: "https://i.ytimg.com/vi/oKJGDWbzntw/maxresdefault.jpg" },
        { title: "Portal 2 ", img: "http://web.cse.ohio-state.edu/~wang.3602/courses/cse3541-2015-spring/proj_proposal/Matt_Kujawinski/portal3.png" },
      ],
    },
    {
      title: "Action-adventure",
      g: [
        { title: "Star Wars Jedi: Fallen Order", img: "https://i.gadgets360cdn.com/large/BD_ATST_v11_378974_1_1574238367883.jpg" },
        { title: "Sekiro: Shadows Die Twice", img: "https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_15f0e9982621aed44900215ad283811af0779b1d.1920x1080.jpg?t=1603904569" },
        { title: "Assassin’s Creed", img: "https://cdn.mos.cms.futurecdn.net/UvbXooQRXLNbP9vEhkmqpg.jpg" },
      ],
    },
    {
      title: "Survival and horror",
      g: [
        { title: "The Long Dark", img: "https://eu-images.contentstack.com/v3/assets/blt95b381df7c12c15d/blt2a6281800aab6562/6202f1f5e2ea835f7f772b04/longdarkep4featured.jpg?quality=80&format=jpg&width=828" },
        { title: "Don’t Starve", img: "https://geekthingy.com/wp-content/uploads/2018/04/dont-starve-nintendo-switch-edition.jpg" },
        { title: "Resident Evil (survival-horror)",img:"https://d30xqvs6b65d10.cloudfront.net/wp-content/uploads/2019/01/resident-evil-2-feature.jpg" },
      ],
    },
    {
      title: "Platformer",
      g: [
        { title: "Cuphead", img: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Cuphead_image1600w.jpg" },
        { title: "Crash Bandicoot", img: "https://image.api.playstation.com/vulcan/img/rnd/202010/2621/z8upfOkL4hLU1wWc2tDiAusM.png" },
        { title: "Ori & The Blind Forest", img: "https://i.ytimg.com/vi/cklw-Yu3moE/maxresdefault.jpg" },
      ],
    },
  ];

  return (
    <>
      {games.map((record, i) => (
        <>
          <header>{record.title}</header>
          <Card gms={record.g} width="385px" />
        </>
      ))}
    </>
  );
}

export default Games;
