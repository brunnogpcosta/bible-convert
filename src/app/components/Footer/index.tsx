// components/Footer.tsx
import { i18n } from '../../translate/i18n'

const Footer: React.FC = () => {
    return (
      <footer className="bg-red-500 text-white text-center p-4 mt-16">

        <p>
        {i18n.t('bible.verses.john.3.16')}
        </p>
        <p className="mt-4">&copy; {new Date().getFullYear()} {i18n.t('titles.footer')} </p>
      </footer>
    );
  };
  
  export default Footer;
  