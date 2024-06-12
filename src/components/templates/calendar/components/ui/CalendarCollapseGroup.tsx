import {
  Box,
  Center,
  HStack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";

import { FC, PropsWithChildren, useTransition } from "react";

interface CalendarCollapseGroupProps {
  title: string;
  defaultIsOpen?: boolean;
}

export const CalendarCollapseGroup: FC<
  PropsWithChildren<CalendarCollapseGroupProps>
> = (props) => {
  const { children, title, defaultIsOpen = true } = props;
  const [isLessThan968] = useMediaQuery("(max-width: 968px)");
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen,
  });
  const [isPending, startTransition] = useTransition();
  const onCollapse = () => {
    startTransition(() => {
      onToggle();
    });
  };
  return (
    <Box>
      <HStack
        p={3}
        w="full"
        minH="50px"
        bgColor={"blue.50"}
        pos={"sticky"}
        top={0}
        zIndex={8}
        cursor={"pointer"}
        {...(!isLessThan968 && {
          top: "204px",
        })}
        onClick={onCollapse}
      >
        <HStack>
          <Text fontWeight={"medium"}>{title}</Text>
          {isOpen && <Minus />}
          {!isOpen && <Plus />}
        </HStack>
      </HStack>
      {/* {isPending && (
        <Center p={4}>
          <Loader />
        </Center>
      )} */}
      {isOpen && <>{children}</>}
    </Box>
  );
};
