import React from 'react';
import Banner from '../assets/images/banner.jpg';  
import MenuImage1 from '../assets/images/home-menu-1.jpg';
import MenuImage2 from '../assets/images/home-menu-2.jpg';
import FoodImage from '../assets/images/home-food.jpg';
import RestaurantIntro from '../components/RestaurantIntro'; 
import Menu from '../components/Menu';
import { availibleMenusHomePage } from '../config';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
const Home: React.FC = () => {
    return (
        <section className='space-y-20'>
            {/* Banner */}
            <div className='relative h-screen' style={{ backgroundColor: '#3a3a3a' }}>
                <img src={Banner} alt="Banner" className='w-full h-full object-cover' />
                <div className='absolute top-1/2 left-10 md:left-40 transform space-y-5'>
                    <h1 className='text-3xl md:text-5xl font-bold text-white font-sans'>Nhà hàng Solstice</h1>
                    <p className='text-base md:text-2xl text-gray-100'>Thưởng thức các món ăn đậm đà bản sắc, được chế biến từ <br/> nguyên liệu tưới ngon. Đặt bàn ngay!</p>
                    <Button>
                        Đặt bàn ngay <ArrowRight />
                    </Button>
                </div>
            </div>
            <section className="py-16">
                <div className='space-y-4 text-center'>
                    {/* Tiêu đề chính */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        SOLSTICE LUÔN MONG MUỐN MANG ĐẾN CHO THỰC KHÁCH   
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">NHỮNG TRẢI NGHIỆM TUYỆT VỜI NHẤT</h2>

                    {/* Người sáng lập */}
                    <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
                        NGƯỜI SÁNG LẬP THƯƠNG HIỆU Solstice
                    </p>
                    <p className="text-lg italic text-[#c49a6c] font-medium mt-1">
                        Hồ Trường Thịnh
                    </p>
                </div>

                <RestaurantIntro/>
                <RestaurantIntro/>
                {/* Food section */}
                <div className='mt-20'>
                    <ScrollReveal
                        id="wine-room"
                        imageSrc={FoodImage}
                        title="Ẩm thực"
                        subtitle="Tinh Hoa"
                    />
                    <div className='container mb-40'>
                        <div className='space-y-4 grid grid-cols-1 grid-cols-reverse md:grid-cols-2 items-center justify-center'>
                            <img src={MenuImage1} className='w-full h-[500px] object-cover' alt="Menu Picture" /> 
                            <Menu title="Thực đơn bếp trưởng" items={availibleMenusHomePage}/>
                        </div>  
                        <div className='space-y-4 grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
                            <Menu title="Thực đơn bếp trưởng" items={availibleMenusHomePage}/>
                            <img src={MenuImage2} className='w-full h-[500px] object-cover' alt="Menu Picture" />
                        </div>  
                    </div>
                    <RestaurantIntro/>
                </div>
            </section>
        </section>
    )
}

export default Home