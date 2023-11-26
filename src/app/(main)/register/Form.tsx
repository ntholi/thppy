'use client';

import { Input } from '@nextui-org/input';
import { User } from 'next-auth';
import React, { useEffect, useState } from 'react';
import { Select, SelectSection, SelectItem } from '@nextui-org/select';
import { Button } from '@nextui-org/button';

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
    <form className='flex flex-col gap-6'>
      <Input
        type='name'
        label='Names'
        labelPlacement='outside'
        value={names}
        onValueChange={setNames}
      />
      <Input
        type='date'
        labelPlacement='outside'
        label='Date of Birth'
        value={dateOfBirth}
        onValueChange={setDateOfBirth}
      />
      <Select
        label='Gender'
        labelPlacement='outside'
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <SelectItem key='male'>Male</SelectItem>
        <SelectItem key='female'>Female</SelectItem>
        <SelectItem key='other'>Other</SelectItem>
      </Select>

      <Button>Save</Button>
    </form>
  );
}
