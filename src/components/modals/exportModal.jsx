import React from "react";

const ExportModal = ({ data }) => {
  // Function to copy data to clipboard
  const handleCopy = () => {
    // Format data as JSON string
    const formattedData = JSON.stringify(
      data.map((target, index) => ({
        DropTarget: index,
        items: target.items.map((item, itemIndex) => ({
          Item: itemIndex,
          Style: item.props.style,
          Type: item.type,
          Children: item.props.children,
        })),
      })),
      null,
      2 // Indentation for readability
    );

    // Use Clipboard API to copy the string
    navigator.clipboard.writeText(formattedData).then(
      () => {
        alert("Data copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy data: ", err);
      }
    );
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {data.length > 0 ? (
                data.map((target, index) => (
                  <div key={index}>
                    <h5>DropTarget {index}:</h5>
                    {target.items.length > 0 ? (
                      target.items.map((item, itemIndex) => (
                        <div key={itemIndex} style={{ marginBottom: "10px" }}>
                          <p>
                            <strong>Item {itemIndex}:</strong>
                          </p>
                          <ul>
                            <li>
                              <strong>Style:</strong> {JSON.stringify(item.props.style)}
                            </li>
                            <li>
                              <strong>Type:</strong> {item.type}
                            </li>
                            <li>
                              <strong>Children:</strong> {item.props.children}
                            </li>
                          </ul>
                        </div>
                      ))
                    ) : (
                      <p>No items.</p>
                    )}
                  </div>
                ))
              ) : (
                <p>No drop targets available.</p>
              )}
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
    </>
  );
};

export default ExportModal;