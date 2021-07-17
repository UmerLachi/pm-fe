const Dashboard = () => {
  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-semibold'>Daily Tasks</h2>
      <p className='max-w-2xl text-gray-600'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        voluptate ipsam voluptates quo cumque.
      </p>
      <button className='flex items-center px-4 py-2 text-sm text-white transition bg-blue-600 rounded-md hover:bg-blue-700'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 mr-2'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
        Add new list
      </button>
      <div className='flex flex-wrap space-x-6 space-y-6'>
        <div className='w-1/4'>
          <div className='p-3 space-y-4 bg-gray-100 rounded-md '>
            <div className='flex items-center justify-between'>
              <span className='font-medium '>Next Up / 3</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-gray-600 cursor-pointer'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </div>

            <button
              type='button'
              className='flex items-center w-full p-1 font-medium text-gray-700 rounded focus:outline-none hover:bg-gray-50'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                />
              </svg>
              Add item
            </button>
            <div className='hidden'>
              <textarea
                placeholder='Enter item title'
                className='w-full mb-3 border-0 rounded-md shadow'
                rows='1'
              ></textarea>
              <div className='flex items-center space-x-4'>
                <button className='px-3 py-2 text-white bg-blue-700 rounded-md'>
                  Add Item
                </button>
                <button className='text-gray-500 transition hover:text-gray-700 focus:outline-none'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className='p-4 font-medium transition bg-white rounded-lg shadow cursor-pointer select-none hover:bg-gray-50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            </div>
            <div className='p-4 font-medium bg-white rounded-lg shadow cursor-pointer select-none hover:bg-gray-50'>
              Dolor sit amet consectetur elit. praesentium consequuntur ipsam!
            </div>
            <div className='p-4 font-medium bg-white rounded-lg shadow cursor-pointer select-none hover:bg-gray-50'>
              Consectetur, ipsum dolor sit amet adipisicing elit. Nisi, minus?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
