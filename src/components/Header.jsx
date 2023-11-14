export default function Header() {
    return <div className="h-[600px] flex items-center justify-center w-screen bg-center relative select-none bg-no-repeat bg-cover bg-[url('https://images.alphacoders.com/133/thumb-1920-1330376.png')]">
        <div className="absolute bottom-0 bg-gradient-to-t from-black w-full h-[600px] z-20"></div>

        <img 
            className="z-30 select-none"
            draggable={ false }
            src="https://movementstrategy.com/wp-content/themes/bigdrop-theme/mortyawardy/RAM_LOGO_COLOR_DROPSHADOW.png"
        />
    </div>
}