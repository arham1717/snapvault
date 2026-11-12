import { useState } from 'react';
import Header from './components/Header';
import UploadButton from './components/UploadButton';
import Gallery from './components/Gallery';

export default function App() {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handleSignIn = () => setUser({ name: 'Demo User' });
  const handleSignOut = () => setUser(null);

  const handleUpload = (files) => {
    const newPhotos = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setPhotos((previous) => [...newPhotos, ...previous]);
  };

  return (
    <>
      <Header user={user} onSignIn={handleSignIn} onSignOut={handleSignOut} />
      <main className="container">
        {user ? (
          <>
            <UploadButton onUpload={handleUpload} />
            <Gallery photos={photos} />
          </>
        ) : (
          <p className="empty">Please sign in to upload and view pictures.</p>
        )}
      </main>
    </>
  );
}
