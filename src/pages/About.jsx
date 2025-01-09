import { Helmet } from 'react-helmet'

function About() {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Giới thiệu</title>
                <link rel='canonical' href='https://starglobal3d.com/profile/meta.png' />
            </Helmet>

            <div className='relative'>
                <img
                    className='w-full top-[50%] h-[500px]'
                    src='https://www.thiennhien.net/wp-content/uploads/2023/06/210623_pes.jpg'
                    alt=''
                />
                <div className='absolute top-1/4 ml-4 w-[500px]'>
                    <p className='text-3xl text-blue-700 font-bold'>GIỚI THIỆU VỀ STARGLOBAL 3D</p>
                    <p className='text-white mt-2'>
                        Chuyển đổi số là xu hướng phát triển chung của hầu hết các quốc gia và doanh
                        nghiệp ở thời kỳ cách mạng công nghiệp 4.0 hiện nay. Trong đó, công nghệ
                        quét laser 3 chiều (3D Laser Scanning) đang góp phần đổi mới tư duy, nâng
                        cao năng suất lao động và hiệu quả công việc một cách đáng kinh ngạc. Với
                        đam mê và khát khao mãnh liệt đưa trí tuệ Việt vào cuộc chơi công nghệ số
                        hóa của thế giới, tận dụng thế mạnh sẵn có của công nghệ mà thế giới đã và
                        đang triển khai, kết hợp với trí tuệ của con người Việt Nam, StarGlobal 3D
                        đã được Sở KHCN TPHCM cấp chứng nhận Doanh nghiệp Khoa học Công nghệ số
                        80/DNKHCN.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
