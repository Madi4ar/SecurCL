'use client';
import File from '@/components/File';
import Upload from '@/components/UploadFile';
import React, { useState } from 'react';
import FileList from '@/components/FileList';
export default function UserPanel() {
  return (
    <>
      <div className="flex flex-col p-5">
        <h1 className="font-bold text-2xl uppercase">Upload files</h1>
        <Upload />

        <h1 className="font-bold text-2xl uppercase mt-10">
          Last uploaded files
        </h1>
        <FileList />
      </div>
    </>
  );
}
