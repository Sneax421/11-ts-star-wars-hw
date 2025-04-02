import Navigation from "./Navigation.tsx";





const Header = ({ heroName }: { heroName: string }) => {

    return (
        <header className="rounded-top-4">
            <Navigation/>
            <h1 className="text-center fs-1 py-4">{heroName}</h1>
        </header>
    );
};

export default Header;

