# Next.js Image Upload API

A simple Next.js application that provides an API endpoint for uploading images and returns the file name.

## Features

- Image upload functionality
- API endpoint for processing uploads
- Simple and clean UI with Tailwind CSS
- TypeScript support
- Ready for Vercel deployment

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Usage

The API endpoint accepts POST requests with form data containing an image file.

Endpoint: `/api/upload`
Method: `POST`
Content-Type: `multipart/form-data`

Example response:

```json
{
  "fileName": "example.jpg"
}
```

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

The project will be automatically built and deployed to Vercel's global edge network.

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel Platform
