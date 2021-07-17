import React from 'react';

const Drawer = () => (
  <div className='w-64 p-8 space-y-6 bg-gray-100'>
    <div className='p-3 bg-white rounded-lg shadow-sm'>
      <h3 className='flex items-center font-bold text-gray-700'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 mr-2 text-blue-700'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
            clipRule='evenodd'
          />
        </svg>
        Lachi Sols PM
      </h3>
    </div>
    <nav className='space-y-6'>
      <div className='flex items-center justify-between text-gray-500'>
        <h4 className='font-medium'>Workspaces</h4>

        <a
          className='flex items-center font-medium text-blue-600 transition hover:text-blue-800'
          href=''
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5 mr-1'
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
          Add
        </a>
      </div>
      <div className='flex items-center px-2 rounded shadow-sm ring-1 ring-gray-300 hover:ring-gray-400'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 text-gray-600'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <input
          type='text'
          placeholder='Search...'
          className='w-full bg-transparent border-0 focus:ring-0'
        />
      </div>

      <div className='space-y-2'>
        <div className=''>
          <a
            className='flex items-center p-2 font-medium text-gray-900 bg-white rounded-lg shadow-sm'
            href=''
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
                d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
              />
            </svg>
            Daily Tasks
          </a>
        </div>

        <div className=''>
          <a
            className='flex items-center p-2 text-gray-600 hover:text-gray-900'
            href=''
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
                d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
              />
            </svg>
            Meetings Summary
          </a>
        </div>

        <div className=''>
          <a
            className='flex items-center p-2 text-gray-600 hover:text-gray-900'
            href=''
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
                d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
              />
            </svg>
            Graceful family
          </a>
        </div>

        <div className=''>
          <a
            className='flex items-center p-2 text-gray-600 hover:text-gray-900'
            href=''
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
                d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
              />
            </svg>
            Archive
          </a>
        </div>

        <div className=''>
          <a
            className='flex items-center p-2 text-gray-600 hover:text-gray-900'
            href=''
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
                d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
              />
            </svg>
            Brain Storming
          </a>
        </div>

        <div className=''>
          <a
            className='flex items-center p-2 text-gray-600 hover:text-gray-900'
            href=''
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
                d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
              />
            </svg>
            Availability
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Drawer;
