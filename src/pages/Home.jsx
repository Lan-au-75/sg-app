import { Helmet } from 'react-helmet'

function Home() {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Trang chủ</title>
                <link rel='canonical' href='https://starglobal3d.com/profile/meta.png' />
            </Helmet>

            <div className='relative'>
                <img
                    className=' top-[50%] w-full h-[600px]'
                    src='https://storage.googleapis.com/digital-platform/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0.jpg'
                    alt=''
                />

                <div className='absolute top-[20%] ml-5 w-[700px]'>
                    <p className='text-red-700 text-5xl font-bold mb-4'>
                        Kết tạo bản sao thế giới thực
                    </p>
                    <p className='text-white text-2xl'>
                        Giải pháp duy nhất trong lĩnh vực Số hoá 3D được Cơ quan Sở hữu trí tuệ của
                        Mỹ cấp bằng sáng chế độc quyền (Patent), giải pháp cho phép người dùng thực
                        hiện việc tham quan từ xa đến bất cứ địa điểm nào theo hình thức “tour tham
                        quan thực tế ảo” chỉ với một thiết bị máy tính hoặc điện thoại thông minh có
                        kết nối Internet.
                    </p>
                    <button className=' hover:opacity-90 rounded-xl mt-4 px-4 py-6 h-8 flex justify-center items-center text-center bg-red-600'>
                        Call-to-Action
                    </button>
                </div>
            </div>

            {/* content */}

            <div className='grid grid-cols-3 mt-10 mx-8'>
                <div className='flex justify-center  flex-col gap-2 p-4 w-[300px] rounded-2xl bg-blue-500 hover:opacity-95 '>
                    <img
                        className='h-[170px]'
                        src='https://carly.com.vn/media/1039/dich-vu-thiet-ke-website.jpg?anchor=center&mode=crop&width=630&height=400&rnd=132730832735770000'
                        alt=''
                    />
                    <p>Dịch Vụ Web</p>
                    <a href='Read More' className='text-red-600'>
                        Read More
                    </a>
                </div>
                <div className='flex justify-center  flex-col gap-2 p-4 w-[300px] rounded-2xl bg-blue-500 hover:opacity-95 '>
                    <img
                        className='h-[170px]'
                        src='https://sohoatailieu.com/wp-content/uploads/2022/12/dich-vu-so-hoa-3d-5.jpg'
                        alt=''
                    />
                    <p>Dịch Vụ Số Hóa 3D</p>
                    <a href='Read More' className='text-red-600'>
                        Read More
                    </a>
                </div>
                <div className='flex justify-center  flex-col gap-2 p-4 w-[300px] rounded-2xl bg-blue-500 hover:opacity-95 '>
                    <img
                        className='h-[170px]'
                        src='https://vr3d.vn/trienlam/tuong-tac/Lang-tuduc.jpg'
                        alt=''
                    />
                    <p>Dịch Vụ Số Hóa 3D Vật Thể</p>
                    <a href='Read More' className='text-red-600'>
                        Read More
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home
