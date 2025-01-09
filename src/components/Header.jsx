import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='flex justify-between gap-3 px-4 py-4 bg-green-400 '>
                <img
                    className='w-[105px] h-[25px]'
                    src='https://starglobal3d.vn/wp-content/uploads/2022/11/LOGO-SG3D-ngang-ver.02.svg'
                    alt=''
                />

                <ul className='flex items-center gap-4'>
                    <li className='hover:text-slate-500'>
                        <Link to='/'>Trang chủ</Link>
                    </li>
                    <li className='hover:text-slate-500'>
                        <Link to='about'>Giới thiệu</Link>
                    </li>
                </ul>

                <div className='flex gap-4'>
                    <div className='flex items-center gap-2'>
                        <CiSearch />
                        <p>Tìm Kiếm</p>
                    </div>
                    <p>Ngôn Ngữ</p>
                </div>
            </header>
        </>
    )
}

export default Header
