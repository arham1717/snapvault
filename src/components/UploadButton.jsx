export default function UploadButton({ onUpload }) {
  const handleChange = (event) => {
    onUpload(event.target.files);
    event.target.value = '';
  };

  return (
    <label className="upload-btn">
      Upload pictures
      <input
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={handleChange}
      />
    </label>
  );
}