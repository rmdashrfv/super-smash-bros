const FighterScreen = ({isVisible, setVisible}) => {
  return(
    <div onClick={() => { setVisible(false) }} className="fighter-screen" style={{display: isVisible ? "block" : "none"}}>
      <h2>Roy</h2>
      <img width="100" height="100" src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem pariatur. Quos quasi repudiandae, maxime reiciendis labore cupiditate, eligendi similique ratione, dolor est excepturi recusandae voluptas odio ipsam reprehenderit debitis!
       </p>
    </div>
  )
}

export default FighterScreen;