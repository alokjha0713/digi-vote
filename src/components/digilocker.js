import React, { useState, useEffect } from "react";
import axios from "axios";

const Digilocker = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await axios.get(
          "https://api.digitallocker.gov.in/v1/fetchdoc",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setDocs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDocs();
  }, []);

  const downloadDoc = async (id) => {
    try {
      const response = await axios.get(
        `https://api.digitallocker.gov.in/v1/download?doc_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {docs.map((doc) => (
        <div key={doc.id}>
          <h2>{doc.name}</h2>
          <button onClick={() => downloadDoc(doc.id)}>Download</button>
        </div>
      ))}
    </div>
  );
};

export default Digilocker;
