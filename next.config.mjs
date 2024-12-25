/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.pexels.com", /* image ın src sini al */
          },
        ],
      },
 
};

export default nextConfig;


/* https://images.pexels.com/photos/8887653/pexels-photo-8887653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */