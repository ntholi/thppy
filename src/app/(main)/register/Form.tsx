'use client';

import { Input } from '@nextui-org/input';
import { User } from 'next-auth';
import React, { useEffect, useState } from 'react';

type Props = {
  user?: User | null;
};

export default function Form({ user }: Props) {
  const [names, setNames] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  useEffect(() => {
    if (user?.name) {
      setNames(user.name);
    }
  }, [user]);

  return (
    <div>
      <Input type='name' label='Names' value={names} onValueChange={setNames} />
    </div>
  );
}
