import logo from '@/assets/react.svg';

const Header: React.FC = () => {
  return (
    <div className="flex justify-start px-3 py-6 items-center gap-3 bg-gray-700 border-4 border-b-gray-400">
      <div></div>
      <img src={logo} alt="Logo" />
      <div className="font-bold text-stone-300 text-2xl">Simple Modal</div>
    </div>
  );
};

export default Header;
