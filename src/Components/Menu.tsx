import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  MenuIcon,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
function SizeExample() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: any) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs"];

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          height="52px"
          sx={{ borderRadius: "20px" }}
        >{`☰`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{}</DrawerHeader>
          <DrawerBody>
            <Link href="/">
              <h1>Назад</h1>
            </Link>
            <br />
            <Link href="/Discraption/Discraption">
              <h1>Посмотреть заявки</h1>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SizeExample;
