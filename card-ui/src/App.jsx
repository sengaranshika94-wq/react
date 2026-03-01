import React from 'react'
import Card from './components/card'
  const users = [
    {
      fullname: "Eren Yeager",
      bio: "A determined fighter seeking freedom beyond the walls.",
      coverimage: "https://i.pinimg.com/736x/50/00/5a/50005a444e9d702e6b87fb139b90ff1c.jpg",
      profileimg: "https://i.pinimg.com/736x/9d/27/81/9d278197d1f227d967361cfd371bdfbd.jpg",
      nooflikes: "389.1k",
      noofviews: "2.0M",
      noofposts: 275,
      isfollowed: false
    },
    {
      fullname: "Levi Ackerman",
      bio: "Humanity’s strongest soldier known for calm precision.",
      coverimage: "https://i.pinimg.com/736x/fc/9a/10/fc9a1041d3e63c04dfeb3638845c5d6c.jpg",
      profileimg: "https://i.pinimg.com/1200x/a8/03/4e/a8034e0df1c89f502899ae1cd4197924.jpg",
      nooflikes: "420.2k",
      noofviews: "2.3M",
      noofposts: 150,
      isfollowed: true
    },
    {
      fullname: "Mikasa Ackerman",
      bio: "A loyal warrior with unmatched combat skills.",
      coverimage: "https://i.pinimg.com/1200x/dd/d2/23/ddd22391828d021a743d0b3ff881df62.jpg",
      profileimg: "https://i.pinimg.com/736x/3d/68/4f/3d684fde7123802cc0c25fb30b528333.jpg",
      nooflikes: "310.4k",
      noofviews: "1.6M",
      noofposts: 190,
      isfollowed: true
    },
    {
      fullname: "Gojo Satoru",
      bio: "The strongest jujutsu sorcerer with limitless abilities.",
      coverimage: "https://i.pinimg.com/736x/9d/cb/09/9dcb092379821db48e344871f6e05cbd.jpg",
      profileimg: "https://i.pinimg.com/736x/96/2a/b0/962ab017a96135b6bde6625d5652899c.jpg",
      nooflikes: "512.8k",
      noofviews: "3.1M",
      noofposts: 198,
      isfollowed: false
    },
    {
      fullname: "Yuji Itadori",
      bio: "A kind-hearted student carrying the burden of Sukuna.",
      coverimage: "https://i.pinimg.com/1200x/f6/d1/1a/f6d11a330eeef0d8bb06953db0985dbe.jpg",
      profileimg: "https://i.pinimg.com/736x/3f/7e/cd/3f7ecde4039f2a43826e8cefe42fa888.jpg",
      nooflikes: "245.6k",
      noofviews: "1.3M",
      noofposts: 165,
      isfollowed: false
    },
    {
      fullname: "Megumi Fushiguro",
      bio: "A serious sorcerer who fights using shadow techniques.",
      coverimage: "https://i.pinimg.com/1200x/7f/a1/23/7fa1231606a6509894e46820a147d793.jpg",
      profileimg: "https://i.pinimg.com/736x/3a/51/7c/3a517c2a544bea2f2d2b57047a0bc9a0.jpg",
      nooflikes: "198.9k",
      noofviews: "990k",
      noofposts: 140,
      isfollowed: true
    },
    {
      fullname: "Tanjiro Kamado",
      bio: "A compassionate demon slayer protecting humanity and family.",
      coverimage: "https://i.pinimg.com/1200x/ca/b3/e1/cab3e148cfc9bd33bf3dfdcb247bf85d.jpg",
      profileimg: "https://i.pinimg.com/736x/1c/20/39/1c203939acff07133dcfdbeec77a7c18.jpg",
      nooflikes: "267.6k",
      noofviews: "1.4M",
      noofposts: 230,
      isfollowed: false
    },
    {
      fullname: "Nezuko Kamado",
      bio: "A demon girl fighting to retain her human heart.",
      coverimage: "https://i.pinimg.com/736x/bc/4c/96/bc4c96de50ac37648aa3090ed168b9ec.jpg",
      profileimg: "https://i.pinimg.com/736x/27/c6/5d/27c65d277dd0c12284af1f9598253238.jpg",
      nooflikes: "356.2k",
      noofviews: "1.9M",
      noofposts: 120,
      isfollowed: true
    },
    {
      fullname: "Naruto Uzumaki",
      bio: "A spirited ninja striving to become Hokage.",
      coverimage: "https://i.pinimg.com/736x/7b/36/57/7b3657e2312c78554c9e8838f061dc1c.jpg",
      profileimg: "https://i.pinimg.com/736x/ca/c6/d8/cac6d852725aa673ffe24f9f955e6ba1.jpg",
      noofviews: "1.2M",
      noofposts: 320,
      isfollowed: false
    },
    {
      fullname: "Sasuke Uchiha",
      bio: "A powerful shinobi walking the path of redemption.",
      coverimage: "https://i.pinimg.com/736x/3e/a0/95/3ea095c63a2d7419586fb56de3f4694d.jpg",
      profileimg: "https://i.pinimg.com/736x/4b/c8/19/4bc8192ebc5d6e55025821f0b839e673.jpg",
      nooflikes: "198.3k",
      noofviews: "980k",
      noofposts: 210,
      isfollowed: true
    }
  ];

const App = () => {
  return (
    <div className='parent'>
     {
      users.map(function (ele) {
      return(
         <Card fullname={ele.fullname} bio={ele.bio} coverimg={ele.coverimage} profile={ele.profileimg} likes={ele.nooflikes} views={ele.noofviews} posts={ele.noofposts} isfollowed={ele.isfollowed} />
      )
     })
     }
     
    </div>
  )
}

export default App

