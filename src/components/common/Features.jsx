import React from 'react';

function Features({ data, type }) {
  return (
    <div
      className={`sm:mt-30 mx-auto mt-20 max-w-7xl px-6 lg:px-8 ${
        type === 'hosting' && ' py-[8rem]'
      }`}
    >
      <div className='mx-auto max-w-2xl lg:text-center'>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl'>
          {data && data[0]?.title}
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {data.slice(1).map((feature) => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 text-gray-900'>
                <div className='absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                  <feature.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Features;
