# Comic Creator App with Speech Bubbles Feature

Comic Creator is a Next.js web application that allows users to create comic strips.
Create Comics of 10 panels and at last view it in a comic strip format.
Add speech bubbles to the panels in the strip format.

## Getting Started

These instructions will help you set up a local development instance of the application.

### Prerequisites

- Node.js
- npm / pnpm / yarn

### How to Set Up and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/subhadip001/comic-creator.git
   ```

2. Navigate into the directory:

   ```bash
   cd comic-creator
   ```

3. Install dependencies:

   ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

- [Next.js - 14](https://nextjs.org/) - The React Framework for Production
- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
- [Zustand](https://zustand-demo.pmnd.rs/) - A small, fast and scalable bearbones state-management solution

## Features

- Create Comics of 10 panels
- View the created comic in a comic strip format
- Add speech bubbles to the panels in the strip format


## Improvements Can Be Done

- Add a bucket storage like firebase/S3 to store the comics and speech bubbles, so that the user can view them later, Now the comics are stored in the local storage of the browser and will be lost when the browser is closed and sometimes images may not be loaded from the local storage
- Add a login system
- Add a share feature to share the comics
- Add a download feature to download the comics
- Design can be improved with more features
