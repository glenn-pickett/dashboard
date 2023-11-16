import { Suspense, lazy } from 'react';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Ecommerce } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
const Orders = lazy(() => import('./pages/Orders'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Employees = lazy(() => import('./pages/Employees'));
const Customers = lazy(() => import('./pages/Customers'));
const Needs = lazy(() => import('./pages/Needs'));
const Editor = lazy(() => import('./pages/Editor'));
const ColorPicker = lazy(() => import('./pages/ColorPicker'));
const Area = lazy(() => import('./pages/Charts/Area'));
const Pyramid = lazy(() => import('./pages/Charts/Pyramid'));
const Pie = lazy(() => import('./pages/Charts/Pie'));
const Bar = lazy(() => import('./pages/Charts/Bar'));
const Financial = lazy(() => import('./pages/Charts/Financial'));
const ColorMapping = lazy(() => import('./pages/Charts/ColorMapping'));
const Line = lazy(() => import('./pages/Charts/Line'));
const Stacked = lazy(() => import('./pages/Charts/Stacked'));

function App() {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: currentColor, borderRadius: '50%' }} onClick={() => setThemeSettings(true)}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-10 sidebar dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : ' flex-2'}`
                    }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>

                        <div>
                            {themeSettings && <ThemeSettings />}
                            <Suspense fallback={<div>Loading...</div>} >
                                <Routes>
                                    {/* Dashboard */}
                                    <Route path='/' element={<Ecommerce />} />
                                    <Route path='/ecommerce' element={<Ecommerce />} />
                                    {/* Pages */}
                                    <Route path='/orders' element={<Orders />} />
                                    <Route path='/employees' element={<Employees />} />
                                    <Route path='/customers' element={<Customers />} />
                                    {/* Apps */}
                                    <Route path='/needs' element={<Needs />} />
                                    <Route path='/editor' element={<Editor />} />
                                    <Route path='/calendar' element={<Calendar />} />
                                    <Route path='/color-picker' element={<ColorPicker />} />
                                    {/* Charts */}
                                    <Route path='/line' element={<Line />} />
                                    <Route path='/area' element={<Area />} />
                                    <Route path='/bar' element={<Bar />} />
                                    <Route path='/pie' element={<Pie />} />
                                    <Route path='/financial' element={<Financial />} />
                                    <Route path='/color-mapping' element={<ColorMapping />} />
                                    <Route path='/pyramid' element={<Pyramid />} />
                                    <Route path='/stacked' element={<Stacked />} />

                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
