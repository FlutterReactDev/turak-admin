import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [visible, setVisible] = useState(false);

    const show = () => {
      setVisible(true);
    };
    const hide = () => {
      setVisible(false);
    };

    const onToggle = () => {
      if (visible) {
        hide();
      } else {
        show();
      }
    };

    return (
      <div className="relative">
        <Input
          {...props}
          type={!visible ? "password" : "text"}
          placeholder={props.placeholder || "Пароль"}
          ref={ref}
        />
        <Button
          variant={"ghost"}
          onClick={onToggle}
          className="absolute right-2 top-2/4 -translate-y-[50%] w-7 h-7"
          size={"icon"}
          type="button"
        >
          {visible && <Eye />}
          {!visible && <EyeOff />}
        </Button>
      </div>
    );
  }
);
