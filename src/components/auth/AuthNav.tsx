import { useState } from "react";
import { Button } from "@/components/ui/button";
import UserSignInDialog from "./UserSignInDialog";
import BusinessSignUpDialog from "./BusinessSignUpDialog";

export default function AuthNav() {
  const [showUserSignIn, setShowUserSignIn] = useState(false);
  const [showBusinessSignUp, setShowBusinessSignUp] = useState(false);

  return (
    <div className="flex gap-4">
      <Button variant="outline" onClick={() => setShowUserSignIn(true)}>
        Sign In
      </Button>
      <Button variant="default" onClick={() => setShowBusinessSignUp(true)}>
        Business Sign Up
      </Button>

      <UserSignInDialog
        open={showUserSignIn}
        onOpenChange={setShowUserSignIn}
      />
      <BusinessSignUpDialog
        open={showBusinessSignUp}
        onOpenChange={setShowBusinessSignUp}
      />
    </div>
  );
}
