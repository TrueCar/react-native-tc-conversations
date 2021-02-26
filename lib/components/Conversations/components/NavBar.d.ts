declare type NavBarProps = {
    onPressLeft: () => void;
    title: string;
    onPressTitle: () => void;
    onPressRight: () => void;
};
declare const NavBar: ({ onPressLeft, title, onPressTitle, onPressRight, }: NavBarProps) => JSX.Element;
export default NavBar;
