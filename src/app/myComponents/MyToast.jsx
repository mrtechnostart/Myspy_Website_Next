export function SuccessToast() {
  return toast({
    description: "Successfull ✅",
  });
}

export function FailedToast() {
  const toast = useToast();
  return toast({
    description: "Failed ☠️",
    variant: "destructive",
  });
}
