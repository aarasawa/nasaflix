import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AuthScreen = () => {
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email=" + email);
  };

  return (
    <div className='hero-bg relative'>

      {/* Header */}
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
        <img src='/logo.png' alt='SpaceFlix Logo' className='w-32 md:w-52' />
        <Link to={"/login"} className='text-white bg-blue-600 py-1 px-2 rounded'>
          Sign In
        </Link>
      </header>

      {/* Hero */}
      <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Space as seen by NASA</h1>
        <p className='text-lg md:text-xl mb-8'>Want to view? Enter your email to create an account.</p>

        <form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
          <input 
            type='email' 
            placeholder='Email Address' 
            className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='bg-blue-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
            Get Started
            <ChevronRight className='size-8 md:size-10' />
          </button>
        </form>
      </div>

      {/* Videos */}
      <div className='py-10 text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Videos by NASA</h2>
						<p className='text-lg md:text-xl'>
							Enjoy the wonders of space with videos from NASA's archives.
						</p>
					</div>
					{/* right side */}
					<div className='flex-1 relative'>
						<div className='border-4 bg-black border-black p-2 w-full max-w-[500px] mx-auto'>
              <video
                className='w-full h-full object-cover'
                playsInline
                autoPlay={true}
                muted
                loop
              >
                <source src='/reentry.mp4' type='video/mp4' />
              </video>
            </div>
					</div>
				</div>
			</div>

      {/* Images */}
			<div className='py-10 text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 relative'>
            <div className='flex-1 relative'>
              <div className='border-4 bg-black border-black p-2 w-full max-w-[500px] mx-auto'>
							  <img src='/nebula.jpg' alt='Image of Horsehead Nebula' className='w-full-h-full object-cover' />
              </div>
						</div>
					</div>
					{/* right side */}

					<div className='flex-1 md:text-left text-center'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
							Images of the Universe
						</h2>
						<p className='text-lg md:text-xl'>
							Viewing how the universe looks like with images from the Hubble Space Telescope.
						</p>
					</div>
				</div>
			</div>

			{/* Watch Anywhere */}
			<div className='py-10 text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch anywhere. <br></br>Even on the moon.</h2>
						<p className='text-lg md:text-xl'>
							Access movies and images on your phone, tablet, and laptop. *Internet connection still required for access on the moon.
						</p>
					</div>

					{/* right side */}
					<div className='flex-1 relative overflow-hidden'>
            <div className='flex-1 relative'>
              <div className='border-4 bg-black border-black p-2 w-full max-w-[500px] mx-auto'>
							  <img src='/astronaut.jpg' alt='Image of Horsehead Nebula' className='w-full-h-full object-cover' />
              </div>
						</div>
					</div>
				</div>
			</div>

    </div>
  );
}

export default AuthScreen;
