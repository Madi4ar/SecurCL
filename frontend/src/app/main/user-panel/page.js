'use client';
import Button from '@/components/Button';
import File from '@/components/File';
import React, { useState } from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { SingleImageDropzone } from '@/components/single-image-dropzone';
import { MultiFileDropzone } from '@/components/MultiFileDropzone';

export default function UserPanel() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const { edgestore } = useEdgeStore();
  const [urls, setUrls] = useState({ url: '' });
  const [size, setSize] = useState({ size: 0 });

  const [fileStates, setFileStates] = useState([]);

  function updateFileProgress(key, progress) {
    setFileStates((prevFileStates) => {
      const newFileStates = [...prevFileStates];
      const index = newFileStates.findIndex(
        (fileState) => fileState.key === key
      );

      if (index !== -1) {
        newFileStates[index] = {
          ...newFileStates[index],
          progress: progress,
        };
      }

      return newFileStates;
    });
  }

  const handleUpload = async () => {
    if (file) {
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            console.log(progress);
            setProgress(progress);
          },
        });
        const { url, size } = res;
        setUrls({ url });
        setSize({ size });

        // you can run some server action or api here
        // to add the necessary data to your database
        console.log(res);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
  const handleRemoveFile = () => {
    setFileStates(null);
    setFile(null);
    setFileName('');
    setUrls({ url: '' });
    setSize({ size: 0 });
  };
  return (
    <>
      <div className="flex flex-col p-5">
        <h1 className="font-bold text-2xl uppercase">Upload files</h1>
        <MultiFileDropzone
          className="w-full h-60 mt-3"
          value={fileStates}
          onChange={(files) => {
            setFileStates(files);
          }}
          onFilesAdded={async (addedFiles) => {
            setFileStates([...fileStates, ...addedFiles]);
            await Promise.all(
              addedFiles.map(async (addedFileState) => {
                try {
                  const res = await edgestore.publicFiles.upload({
                    file: addedFileState.file,
                    onProgressChange: async (progress) => {
                      updateFileProgress(addedFileState.key, progress);
                      if (progress === 100) {
                        // wait 1 second to set it to complete
                        // so that the user can see the progress bar at 100%
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        updateFileProgress(addedFileState.key, 'COMPLETE');
                      }
                    },
                  });
                  console.log(res);
                } catch (err) {
                  updateFileProgress(addedFileState.key, 'ERROR');
                }
              })
            );
          }}
        />

        <div
          className="mt-3 rounded w-64 h-[6px] bg-black border transition-all duration-150"
          style={{ width: `${progress}%` }}
        />

        {/* {urls?.url && (
          <File
            url={urls.url}
            title={fileName}
            size={size.size}
            onClick={handleRemoveFile}
          />
        )} */}

        <Button title="Remove all files" onClick={handleRemoveFile} />

        <h1 className="font-bold text-2xl uppercase mt-10">
          Last uploaded files
        </h1>

        <div className="flex">
          <File title="Anau mnau.zip" size="14" />
        </div>
      </div>
    </>
  );
}
