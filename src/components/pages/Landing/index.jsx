import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    window.open('https://www.humanrightsfirst.org', '_blank');
  };

  return (
    <div className='bg-[#f8f9fa] text-gray-900 font-sans'>
      <header className='bg-[#2c2e3e] text-white py-10 px-4 text-center shadow-md'>
        <h1 className='text-5xl font-bold mb-4'>Asylum Office Grant Rate Tracker</h1>
        <h3 className='text-lg max-w-4xl mx-auto leading-relaxed'>
          The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
          Asylum Office decisions
        </h3>
      </header>

      <section className='flex flex-wrap justify-center gap-10 py-12 px-6 bg-white'>
        <div className='flex flex-col items-center max-w-xs text-center space-y-3'>
          <img src={barGraph} alt='Bar Graph' className='h-60 object-contain rounded-lg shadow' />
          <h2 className='text-xl font-semibold'>Search Grant Rates By Office</h2>
        </div>
        <div className='flex flex-col items-center max-w-xs text-center space-y-3'>
          <img src={pieChart} alt='Pie Chart' className='h-60 object-contain rounded-lg shadow' />
          <h2 className='text-xl font-semibold'>Search Grant Rates By Nationality</h2>
        </div>
        <div className='flex flex-col items-center max-w-xs text-center space-y-3'>
          <img src={lineGraph} alt='Line Graph' className='h-60 object-contain rounded-lg shadow' />
          <h2 className='text-xl font-semibold'>Search Grant Rates Over Time</h2>
        </div>
      </section>

      <div className='flex justify-center gap-6 py-6 bg-gray-100'>
        <button onClick={() => navigate('/graphs')} className='bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded transition'>
          View The Data
        </button>
        <button onClick={downloadCSV} className='border border-indigo-600 text-indigo-600 hover:bg-indigo-100 py-2 px-6 rounded transition'>
          Download The Data
        </button>
      </div>

      <section className='flex flex-col lg:flex-row items-center px-10 py-12 bg-white gap-8'>
        <img src={paperStack} alt='Paper Stack' className='w-full lg:w-1/2 rounded-xl shadow-lg' />
        <div className='lg:w-1/2 text-lg leading-relaxed'>
          <p>
            Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021
            by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by
            year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
          </p>
        </div>
      </section>

      <section className='bg-[#f0f2f5] py-16 px-6 text-center'>
        <h3 className='text-4xl font-bold mb-12'>Systemic Disparity Insights</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-lg'>
          <div className='space-y-3'>
            <h4 className='text-3xl font-bold text-indigo-700'>36%</h4>
            <p>
              By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to
              28 percent in fiscal year 2020.
            </p>
          </div>
          <div className='space-y-3'>
            <h4 className='text-3xl font-bold text-indigo-700'>5%</h4>
            <p>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
          </div>
          <div className='space-y-3'>
            <h4 className='text-3xl font-bold text-indigo-700'>6x Lower</h4>
            <p>Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.</p>
          </div>
        </div>
      </section>

      <div className='flex flex-col items-center py-10 gap-6'>
        <button onClick={handleReadMore} className='bg-indigo-800 hover:bg-indigo-900 text-white px-6 py-2 rounded shadow'>
          Read More
        </button>
        <button onClick={scrollToTop} className='text-sm text-indigo-700 underline hover:text-indigo-900'>
          Back To Top ^
        </button>
      </div>

      <div className='hidden'>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>
    </div>
  );
};
