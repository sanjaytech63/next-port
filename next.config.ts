import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pinimg.com',
      'cdn.pixabay.com','repository-images.githubusercontent.com',
      'ossisto.com',
      'encrypted-tbn0.gstatic.com',
      'adoric.com',
      'i.ytimg.com',
      'd2zz54dhkzkgk9.cloudfront.net',
      's3.envato.com',
      'mir-s3-cdn-cf.behance.net',
      'media.licdn.com',
      'pagedone.io',
      'ares.decipherzone.com',
      'd1e5wbyhbs6zy6.cloudfront.net',
      'liveimages.algoworks.com',
      'cdn.prod.website-files.com',
      'cdn.dribbble.com'
    
    ],
  },
  // reactStrictMode:true,
  eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;
