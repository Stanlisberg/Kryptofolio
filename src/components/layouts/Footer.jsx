import Icons from "./icons";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper font-mono text-center flex flex-col md:flex-row md:justify-around pb-2 pt-8 items-center">
        <div>
          <Icons />
        </div>
        <div className="font-mono">
          Built with <span className="text-red-600">&#x2764;</span> by{" "}
          <a href='http://www.twitter.com' target='_blank' rel="noreferrer">
          <span className="footer-color px-1 cursor-pointer hover:scale-90 ease-in-out duration-300">
            StanLisberg
          </span>
          </a>
        </div>
        <div className="md:mt-3 md:contents hidden font-mono">
          Powered by Coingecko.
        </div>
      </div>
    </footer>
  );
}
export default Footer;

