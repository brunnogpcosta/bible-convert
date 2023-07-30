// components/Footer.tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-red-500 text-white text-center p-4 fixed bottom-0 left-0 w-full">
        <p className="mb-2">
          “Porque Deus amou o mundo de tal maneira, que deu o seu Filho Unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna” (João 3:16).
        </p>
        <p>&copy; {new Date().getFullYear()} bibleConvert.com - Todos os direitos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;
  