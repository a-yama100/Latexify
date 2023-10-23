// E:\programming\Project\latexify\pages\Footer.tsx

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center py-3 d-flex justify-content-center align-items-center">
            <p>&copy; {currentYear} Latexify : LaTeX Renderer. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
