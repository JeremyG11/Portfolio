import Navbar from "@/components/Sections/Navbar";
import ReviewForm from "@/components/Sections/ReviewForm";
export default function Review() {
  return (
    <>
      <Navbar />
      <div className="mt-32 px-4 md:px-16">
        <ReviewForm />
      </div>
    </>
  );
}
