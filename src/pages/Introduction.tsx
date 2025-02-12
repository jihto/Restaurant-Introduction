import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import BannerImage from '../assets/images/introduction-banner.jpg';
import SpaceImage from '../assets/images/intro-space.jpg';
import FoodImage from '../assets/images/intro-food.jpg';
import StaffImage from '../assets/images/intro-service.jpg';
const Introduction: React.FC = () => {
  const data = [
    {
      imgSrc: FoodImage,
      title: 'Chất lượng món ăn',
      description: "We are a family-owned and operated restaurant, dedicated to providing a warm and welcoming atmosphere for our guests."
    },{
      imgSrc: StaffImage,
      title: 'Phụ vụ chu đáo',
      description: "We are a family-owned and operated restaurant, dedicated to providing a warm and welcoming atmosphere for our guests."
    },{
      imgSrc: SpaceImage,
      title: 'Không gian hoàn hảo',
      description: "We are a family-owned and operated restaurant, dedicated to providing a warm and welcoming atmosphere for our guests."
    }
  ]
  return (
    <div >
      <ScrollReveal
        id="wine-room"
        imageSrc={BannerImage} 
        subtitle="Tổng quan nhà hàng"
      />
      <div className='my-20'>
        {/* Đội ngũ */}
        <div className='container grid grid-cols-2 gap-4 justify-center items-center'>
          <img src={BannerImage} alt="giới thiệu" className='w-full h-full object-cover'/>
          <div className='space-y-4'>
            <p className='text-xl text-gray-600'>Chủ nhà hàng</p>
            <h2 className='text-3xl font-bold '>Hồ Trường Thịnh</h2>
            <p>
              Với tâm huyết và đam mê cháy bỏng với ẩm thực, Hồ Trường Thịnh đã dành trọn cuộc đời mình để tạo nên những món ăn độc đáo, mang đậm hương vị quê hương.
              Với mong muốn mang đến những trải nghiệm ẩm thực tuyệt vời nhất, luôn lắng nghe ý kiến của khách hàng, không ngừng cải thiện chất lượng món ăn và dịch vụ.
            </p>
          </div>
        </div>

        {/* Chất lượng */}
        <div className='text-center py-20 container'>
          <h2 className='text-3xl font-bold '>Cam kết chất lượng</h2>
          <p className='text-lg text-gray-600 mb-10 mt-3'>Với tiêu chí đề cao chất lượng lên hàng đầu</p>
          <div className='grid grid-cols-3 gap-4'>
            {
              data.map(item => (
                <div className='rounded shadow-md min-h-[500px] relative'>
                  <img src={item.imgSrc} alt="Chất lượng cao" className='absolute z-10 rounded w-full h-full object-cover'/>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20'></div> 
                  <div className='absolute bottom-4 z-30 text-white p-4'>
                    <h3 className='text-2xl font-bold'>{item.title}</h3>
                    <p className='text-gray-100'>{item.description}</p>
                  </div>  
                </div> 
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction