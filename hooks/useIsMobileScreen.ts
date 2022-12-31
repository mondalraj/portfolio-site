import { useMediaQuery } from "@mantine/hooks";

function IsMobileScreen() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile;
}

export default IsMobileScreen;
