import Image from 'next/image';
const ProfileFrame = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[400px] ">
      
        <Image
          src="/profile.jpg" // Yüklediğiniz görselin yolu
          alt="Profile Picture"
          layout="fill"
          objectFit="contain"
          className='rounded-full'
        />
     
    </div>
  );
}

export default ProfileFrame;