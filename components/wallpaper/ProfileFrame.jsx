import Image from 'next/image';
const ProfileFrame = () => {
  return (
    <div className="relative pt-10 w-[200px] h-[300px] md:w-[300px] md:h-[400px] ">
      
        <Image
          src="/profile.jpg" // Yüklediğiniz görselin yolu
          alt="Profile Picture"
          width={550}
          height={550}
          className='rounded-full border-4    '
          
        />
     
    </div>
  );
}

export default ProfileFrame;