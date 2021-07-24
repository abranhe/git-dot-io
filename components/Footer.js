export default function Footer(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? 'absolute w-full bottom-0 bg-blue-900'
            : 'relative') + ' pb-6'
        }>
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-white font-semibold py-1">
                © {new Date().getFullYear()}{' '}
                <a
                  href="https://www.creative-tim.com"
                  className="text-white hover:text-gray-400 text-sm font-semibold py-1">
                  GitDotIo. Not affiliated with GitHub. Inc.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
