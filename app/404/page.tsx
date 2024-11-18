const NotFoundPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="animate-bounce text-9xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-600">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-blue-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
