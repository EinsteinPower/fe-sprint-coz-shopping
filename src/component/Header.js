import './header.css';

function Header() {
    return (
        <header className="header-container">
            <div className='logo-container'>
                <div className='logo-img'>
                <img src="logo.png" alt="logo" />
                </div>
                <span className='logo-title'>COZ Shopping</span>
            </div>
            <img src="hambuger.png" alt="hambuger menu" />
        </header>
    );
}

export default Header;