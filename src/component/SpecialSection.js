import "@fontsource/karla"
import "@fontsource/markazi-text"


const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};
const SpecialSection = () => {
    return (
        <section className="special1">
            <div className="special2">
            <div className="special3"   id="menu-section">
                This weeks specials!
            </div>
            <a href="#menu" onClick={ handleClick("menu")} className="menu">
                Online Menu
            </a>
                </div>
        </section>
    );
};
export default SpecialSection;