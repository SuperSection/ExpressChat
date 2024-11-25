import { auth } from "@/auth";
import { CustomSession } from "@/types/auth-types";
import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import UserReviews from "@/components/base/UserReviews";
import Footer from "@/components/base/Footer";

export default async function LandingPage() {
  const session: CustomSession | null = await auth();

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar user={session?.user} />

      <div className="h-16 bg-gray-100" />
      <HeroSection />

      <FeatureSection />

      <UserReviews />

      <Footer />
    </div>
  );
}
