import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSidebar = () => {
        activeMenu && screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true)
    }

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-900 text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    const activeLinkClosed = 'flex items-center gap-5 pt-3 pb-2.5 rounded-lg text-gray-900 text-md';
    const normalLinkClosed = 'flex items-center gap-5 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';

    return (
        <div>
            {activeMenu ?
                (<div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
                    <div className='flex justify-between items-center'>
                        <Link to='/' onClick={handleCloseSidebar} className='items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
                            <SiShopware /><span>Dashboard</span>
                        </Link>
                        <TooltipComponent content='Menu' position='BottomCenter'>
                            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className='mt-10'>
                        {links.map((item) => {
                            return (
                                <div key={item.title}>
                                    <p className='text-gray-400 m-3 mt-4 uppercase'>
                                        {item.title}
                                    </p>
                                    {item.links.map((link) => (
                                        <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSidebar} className={(isActive) => isActive ? activeLink : normalLink}>
                                            {link.icon}
                                            <span className='capitalize'>
                                                {link.name}
                                            </span>
                                        </NavLink>
                                    ))}
                                </div>
                            )
                        })}
                    </div>
                </div>)
                : (
                    <div className='ml-2 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
                        <Link to='/' onClick={handleCloseSidebar} className='mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
                            <SiShopware />
                        </Link>
                        <TooltipComponent content='Menu' position='BottomCenter'>
                            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                        {links.map((item) => {
                            return (
                                <div key={item.title} className='ml-1'>
                                    {item.links.map((link) => (
                                        <TooltipComponent content={link.name[0].toUpperCase() + link.name.substring(1)} position='BottomCenter'>
                                            <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSidebar} className={(isActive) => isActive ? activeLinkClosed : normalLinkClosed}>
                                                {link.icon}
                                            </NavLink>
                                        </TooltipComponent>
                                    ))}
                                </div>
                            )
                        })}
                    </div>
                )}
        </div>
    )
}

export default Sidebar
