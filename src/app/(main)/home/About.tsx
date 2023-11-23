import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <h2 className='text-lg font-bold'>
        What is <span className='text-sky-500'>HTTPY?</span>
        <hr className='w-10 border-1 border-sky-400' />
      </h2>
      <article className='mt-5 grid grid-cols-12 gap-8'>
        <div className='col-span-5'>
          <Image
            src='/images/sadc-logo.jpg'
            className='w-90 h-52 object-cover'
            width={700}
            height={700}
            alt='HTTPY'
          />
        </div>
        <div className='col-span-7'>
          <p>
            The Southern Africa Development Community (SADC) invented an effort
            into HIV prevention programs after foreseeing the increasing rates
            of new infections. Young people between the age of 15 and 24 are a
            target to reduce the new infections thus the development and
            implementing of a technology based innovative HIV prevention
            interventions for young people. The project contributes to a
            reduction of new infection among young people aged 15 to 24.
          </p>
        </div>
      </article>
    </>
  );
}
