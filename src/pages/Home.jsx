import "./nav.css"

export default function Home() {
    return (
        <header>
            <div className='hf-productbar'></div>
            <div className="new-container">
                <div className="hf-productbar__wrap ">
                    <div className="hf-productbar__logo-wrap">
                        <a href="#" className="hf-productbar__link">
                            <img src="https://assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg" width={116} height={24} alt="happyfox logo"  className="hf-productbar__logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}