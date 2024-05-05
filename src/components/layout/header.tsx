import { IconSettings } from '@tabler/icons-react';

const Header = () => {
  return (
    <div className="max-w-[450px] w-full h-[50px] mx-auto">
      <div className="h-full grid grid-cols-2 justify-between px-4">
        <div className="content-center">
          <p>Pomodoro</p>
        </div>
        <div className="justify-self-end content-center">
          <IconSettings />
        </div>
      </div>
    </div>
  );
};

export default Header;
