import { CiFacebook } from 'react-icons/ci'

function Footer() {
    return (
        <footer className='bg-black mt-[100px]'>
            <div className='grid grid-cols-2 gap-10'>
                <div className='my-6 mx-4 flex justify-center flex-col gap-3'>
                    <p className='text-green-700 text-3xl font-bold'>THÔNG TIN LIÊN HỆ</p>
                    <p className='text-white text-lg'>contact@starglobal3d.com</p>
                    <CiFacebook className='bg-white w-10 h-10' />
                </div>

                <div className='my-6 mx-4 flex justify-center flex-col gap-3'>
                    <p className='text-green-700 text-3xl font-bold'>CHÍNH SÁCH</p>
                    <p className='text-white text-lg'>ĐIỀU KHOẢN SỬ DỤNG</p>
                    <CiFacebook className='bg-black w-10 h-10' />
                </div>
            </div>
        </footer>
    )
}

export default Footer
