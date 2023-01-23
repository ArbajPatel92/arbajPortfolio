import './Navbar.css';
import Toggle from '../Toggle/Toggle';


const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Arbaj Patel</div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{listStyleType:'none'}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                    </ul>
                </div>
            <button className='n-btn btn'>
              Contect 
            </button>
            </div>
        </div>
    );
}
export default Navbar;