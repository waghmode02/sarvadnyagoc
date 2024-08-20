import React, { useState, useEffect } from 'react';

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sarvadnyagoc-backend.onrender.com/api/getallcontact');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        const response = await fetch(`https://sarvadnyagoc-backend.onrender.com/api/delete/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        // Remove the deleted item from the state
        setData(data.filter((item) => item._id !== id));
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="overflow-x-auto flex justify-center p-4 mt-20">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg mt-20 p-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">Mobile</th>
            <th className="py-2 px-4 border-b text-left">Message</th>
            <th className="py-2 px-4 border-b text-left">Date & Time</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
              <td className="py-2 px-4 border-b">{item.mobile}</td>
              <td className="py-2 px-4 border-b">{item.message}</td>
              <td className="py-2 px-4 border-b">{new Date(item.timestamp).toLocaleString()}</td>
              <td className="py-2 px-4 border-b text-center">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition-colors duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
