import "../css/error.css"

export default function NotFoundPage () {

        return (
          <div className="full-width-center">
            <div className="error-page">
              <h1>Page not found</h1>
              <img src="/images/error.jpeg" alt="confused dog" />
              <button onClick={() => window.location.href = "/"}>Back to safety</button>
            </div>
          </div>
        );
      }