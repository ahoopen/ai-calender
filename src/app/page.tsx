"use client";

import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setFileName("");

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    if (!file) {
      setError("Please select a file");
      return;
    }

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setFileName(data.fileName);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Image Upload</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="file" className="block text-sm font-medium mb-2">
              Choose an image
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Upload
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {fileName && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            File name: {fileName}
          </div>
        )}
      </div>
    </main>
  );
}
