export default function Gallery({ photos }) {
  if (photos.length === 0) {
    return <p className="empty">No pictures yet. Upload your first one!</p>;
  }

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div className="card" key={photo.id}>
          <img src={photo.url} alt={photo.name} />
          <p>{photo.name}</p>
        </div>
      ))}
    </div>
  );
}