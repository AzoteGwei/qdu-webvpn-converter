const Footer = () => (
  <footer className="bg-zinc-200/30 dark:bg-zinc-500/10 p-4 text-center dark:text-gray-400 text-sm">
    Created with love at bit
    <br />
    <a
      href="https://spencerwoo.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline opacity-80 hover:opacity-100 transition-all duration-50"
    >
      Spencer Woo
    </a>{' '}
    @ 2020 - {new Date().getFullYear()}
    <hr />
    Edited By <a href='https://github.com/Azotegwei'>AzoteGwei</a> to suit QDU Url.
  </footer>
)
export default Footer
