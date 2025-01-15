import React from "react";

const ExportModal = ({ data }) => {
  // Function to generate formatted HTML content as a string
  const generateHtmlContent = () => {
    if (data.length === 0) {
      return "No drop targets available.";
    }

    return `
  <div
    class="main-scroll"
    style="
      height: 100vh;
      width: 100vw;
      position: relative;
      background-color: #3300ff;
    "
  >
    ${data
      .map(
        (target) => `
          <div
            style="
              height: 50%;
              width: 100%;
              color: #3300ff;
              text-align: center;
              display: flex;
              justify-content: flex-start;
              flex-wrap: wrap;
            "
          >
            <div class="row h-100 w-100 position-relative">
              ${target.items
                .map(
                  (item) => `
                    <div
                      class="col-md p-1"
                      style="
                        padding: 10px;
                        border: 1px solid white;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          height: 100%;
                          background-color: white;
                          border: 1px solid white;
                          display: flex;
                          font-size: 12px;
                        "
                      >
                        ${item.props.children}
                      </div>
                    </div>
                  `
                )
                .join("\n")}
            </div>
          </div>
        `
      )
      .join("\n")}
  </div>
`;
  };

  // Function to copy generated HTML to clipboard
  const handleCopy = () => {
    const formattedContent = generateHtmlContent();
    navigator.clipboard
      .writeText(formattedContent)
      .then(() => {
        alert("Formatted text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Your Layout
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <pre>{generateHtmlContent()}</pre>{" "}
            {/* Render formatted HTML for display */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCopy} // Attach the copy handler here
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
