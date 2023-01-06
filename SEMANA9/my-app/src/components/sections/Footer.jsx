const Footer = ({ credits }) => {
    const { year, author } = credits
    return (
        <header className="py-3 mt-auto">
            <div className="container">
                <h2 className="text-light text-center fs-6 m-0">🍁 Copyright &copy; {year} {author} 🙋‍♂️. Todos los derechos reservados 🍁 </h2>
            </div>
        </header>
    );
};
export default Footer; 