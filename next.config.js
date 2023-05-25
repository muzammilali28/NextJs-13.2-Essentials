/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
    // If In case you are using 'mongoose' to call to the API make sure to add this below line, else you will get alot of errors
    serverComponentsExternalPackages: ["mongoose"],

    // Latest Update Next Js 13.4 , Server Action, make sure to add this below line to you the server action feature.
    serverActions: true,
  },
}

module.exports = nextConfig