export default function CvViewer() {
  return (
    <div className="w-full h-screen bg-black">
      <iframe
        src="/cv.pdf"
        className="w-full h-full"
      />
    </div>
  );
}