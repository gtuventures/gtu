import { useState } from "react";
import supabase from "../../supabase";

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const uploadImage: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);

      // Create a unique filename using the current timestamp
      const fileName = `ramyantra_${Date.now()}_${file.name}`;

      // Upload the image to the "ramyantra-images" bucket
      const { data, error } = await supabase.storage
        .from("ramyantra")
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      // Get the URL of the uploaded image
      const { data: { publicUrl } } = await supabase.storage
        .from("ramyantra")
        .getPublicUrl(fileName);

      setImageUrl(publicUrl);
    } catch (error) {
      console.error("Error uploading image:");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload and Display Image</h1>
      <input type="file" onChange={uploadImage} disabled={uploading} />

      {uploading && <p>Uploading...</p>}

      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" width="300" />
        </div>
      )}
    </div>
  );
}
