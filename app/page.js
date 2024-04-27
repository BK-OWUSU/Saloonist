import About from "@/components/about";
import BookingForm from "@/components/bookingForm";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Hero/>
      <BookingForm/>
      <About/>
    </main>
  );
}
