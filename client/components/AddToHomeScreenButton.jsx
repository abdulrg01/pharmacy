"use client"

import { useEffect, useState } from 'react';

let deferredPrompt;

export default function AddToHomeScreenButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setShowButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleAddToHomeScreen = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted A2HS');
    } else {
      console.log('User dismissed A2HS');
    }
    deferredPrompt = null;
    setShowButton(false);
  };

  if (!showButton) return null;

  return (
    <button onClick={handleAddToHomeScreen} className="btn btn-primary">
      Add to Home Screen
    </button>
  );
}
