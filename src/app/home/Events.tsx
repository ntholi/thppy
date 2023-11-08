import { getUpcomingEvents } from '@/lib/eventsService';
import {
  IconLocation,
  IconMapPin,
  IconPin,
  IconPoint,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

export default async function EventsView() {
  const events = await getUpcomingEvents();
  return (
    <>
      <h2>
        Up coming <span className='text-sky-500'>Events</span>
        <hr className='w-10 border-1 border-sky-400' />
      </h2>

      <div className='mt-5'>
        {events.map((event) => (
          <article key={event.id} className='flex'>
            <div className='flex flex-col items-center justify-center bg-sky-500 px-6 py-3 text-white'>
              <p>{event.date.getDay()}</p>
              <p>{event.date.toLocaleString('default', { month: 'short' })}</p>
            </div>
            <div className='ml-5'>
              <h3>{event.name}</h3>
              <p className='flex items-center gap-1 text-sm text-gray-500'>
                <IconMapPin size='0.9rem' /> {event.location}{' '}
              </p>
              <p className='mt-2 pr-3 text-sm'>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
};
