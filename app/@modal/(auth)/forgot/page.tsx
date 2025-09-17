'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ForgotPasswordModal } from '@/components/forgot-modal/forgot-modal'; // adjust path

export default function ForgotPasswordModalPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    router.back(); // close modal by going back
  };

  const handleSent = () => {
    setIsOpen(false);
    router.push('/login'); // after reset success, redirect to login
  };

  return (
    <ForgotPasswordModal
      isOpen={isOpen}
      onClose={handleClose}
      onSent={handleSent}
    />
  );
}
