import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-T5J86DEMS2'); // Substitua pelo seu ID do Google Analytics
  };


export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
