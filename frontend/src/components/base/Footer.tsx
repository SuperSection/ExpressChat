import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="px-8 py-4 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-3">
        <div>
          <h3>© 2024 ExpressChat. All rights reserved.</h3>
          <div className="flex justify-around mt-1">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <Input
            placeholder="Subscribe to our newsletter"
            className="bg-gray-800 border-0 focus:border focus:border-white"
          />
          <Button variant="secondary">Subscribe</Button>
        </div>
      </div>
    </footer>
  );
}
