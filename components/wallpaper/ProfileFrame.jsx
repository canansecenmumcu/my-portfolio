import Image from 'next/image';
const ProfileFrame = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] ">
      
        <Image
          src="/profile.jpg" // Yüklediğiniz görselin yolu
          alt="Profile Picture"
          width={550}
          height={550}
          className='rounded-3xl border-4    '
          
        />
     
    </div>
  );
}

export default ProfileFrame;