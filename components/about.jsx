import Image from 'next/image'
import img8 from '@/public/img8.jpg'

const About = () => {
  return (
    <div>
        <div class="container grid grid-cols-2 items-center gap-20 h-full text-black py-32">
        <div class="about_left">
                <h1 className='text-xl py-4 font-semibold'>Your Sanctuary for Beauty</h1>
                <p className='text-lg opacity-90'>
                    "Step into our Nail & Beauty Sanctuary, where we firmly believe that each person should experience the joy of feeling stunning and self-assured. Whether you desire a professional hari style, basic nail treatment or an elaborate masterpiece on your fingertips, our squad of skilled experts is committed to translating your unique character into captivating nail designs."
                </p>
        </div>
        <div class="about_right">
            <div class="about_img">
                <Image src={img8} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default About