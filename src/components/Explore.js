import React from 'react'
import Card from './Card'

function Explore() {
  let categories=[{title:"Sandbox",img:"https://i.insider.com/61b371ae325f9b0018e30671?width=700",desc:""},{title:"Real-time strategy ",img:"https://i.ytimg.com/vi/wBfVO1cCq2o/maxresdefault.jpg",desc:""},{title:"Shooter",img:"https://m-cdn.phonearena.com/images/article/62894-wide-two_940/16-Best-FPSTPS-first--and-third-person-shooter-games-for-Android-iPhone-and-iPad",desc:""},{title:"Multiplayer online battle arena",img:"https://img.mensxp.com/media/content/2020/May/Top-Multiplayer-Online-Battle-Arena-Mobile-Games-To-Play-In-2020-740x500-3_5ed10a3e94844.jpeg",desc:""},
  {title:"Role-playing games ",img:"https://levvvel.com/wp-content/uploads/best-rpg-games-2.jpg",desc:""},{title:"Simulation and sports",img:"https://www.motoringresearch.com/wp-content/uploads/2020/02/001-Best-Mobile-Racing-Games-1920x1080.jpg",desc:""},{title:" Puzzlers and party games",img:"https://cdn.wethegeek.com/wp-content/uploads/2018/08/best-puzzle-app-Cut-the-Rope-1024x568.jpg",desc:""},{title:"Action-adventure",img:"https://scoopfed.com/wp-content/uploads/2018/11/Mobile-games.jpg",desc:""},{title:"Survival and horror",img:"https://www.dreadxp.com/wp-content/uploads/2022/01/world-war-z-scaled-e1643228089854.jpg",desc:""},{title:"Platformer",img:"https://otakuusamagazine.com/wp-content/uploads/2020/09/image.jpg",desc:""}]
  return (
    <>
    <Card gms={categories} width="385px" />
    </>
  )
}

export default Explore
